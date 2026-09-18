'use client';

import { useState } from 'react';
import { 
  Gem, 
  CheckCircle2, 
  ArrowRightLeft,
  Award
} from 'lucide-react';
import classesData from '@/data/classes.json';

// Extra stat ratings for visual bars
const classStatsMap: Record<string, { speed: number; inventory: number; combat: number; utility: number }> = {
  scavenger: { speed: 95, inventory: 100, combat: 60, utility: 85 },
  engineer: { speed: 65, inventory: 70, combat: 90, utility: 100 },
  'big-game-hunter': { speed: 80, inventory: 80, combat: 85, utility: 70 },
  cyborg: { speed: 90, inventory: 60, combat: 95, utility: 65 },
  assassin: { speed: 100, inventory: 50, combat: 95, utility: 60 },
  camper: { speed: 50, inventory: 50, combat: 40, utility: 50 },
};

export default function ClassTierClient() {
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [compareClassA, setCompareClassA] = useState<string>('scavenger');
  const [compareClassB, setCompareClassB] = useState<string>('engineer');

  const filteredClasses = classesData.filter((c) => {
    if (selectedRole === 'all') return true;
    if (selectedRole === 'solo') return c.bestFor.includes('Solo');
    if (selectedRole === 'team') return c.bestFor.includes('Team play');
    if (selectedRole === 'farming') return c.bestFor.includes('Loot farming') || c.bestFor.includes('Resource farming');
    return true;
  });

  const tiers = ['S', 'A', 'B', 'C'] as const;

  const classAObj = classesData.find(c => c.id === compareClassA) || classesData[0];
  const classBObj = classesData.find(c => c.id === compareClassB) || classesData[1];
  const statsA = classStatsMap[compareClassA] || { speed: 50, inventory: 50, combat: 50, utility: 50 };
  const statsB = classStatsMap[compareClassB] || { speed: 50, inventory: 50, combat: 50, utility: 50 };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-4 shadow-glow">
          <Award className="w-4 h-4 text-emerald-400" />
          Meta Rankings · 
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          99 Nights in the Forest <span className="text-emerald-400">Class Tier List</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Detailed ranking of all playable classes. Evaluate perks, unlock costs in Diamonds, level progression, and stat benchmarks.
        </p>
      </div>

      {/* Role Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {[
          { id: 'all', label: 'All Classes' },
          { id: 'solo', label: 'Best for Solo' },
          { id: 'team', label: 'Best for Squad / Team' },
          { id: 'farming', label: 'Best for Loot Farming' },
        ].map((r) => (
          <button
            key={r.id}
            onClick={() => setSelectedRole(r.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedRole === r.id
                ? 'bg-emerald-600 text-white shadow-glow'
                : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      {/* Tier Sections */}
      <div className="space-y-10 mb-20">
        {tiers.map((tier) => {
          const tierClasses = filteredClasses.filter((c) => c.tier === tier);
          if (tierClasses.length === 0) return null;

          return (
            <div key={tier} className="space-y-4">
              
              {/* Tier Header Badge */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-black tier-${tier.toLowerCase()}`}>
                  {tier}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {tier}-Tier Classes
                  </h2>
                  <span className="text-xs text-gray-400">
                    {tier === 'S' && 'Meta Defining · Essential for late-game 99 Nights runs'}
                    {tier === 'A' && 'Strong Choices · Highly effective in specialized roles'}
                    {tier === 'B' && 'Budget / Starter · Solid early game option'}
                    {tier === 'C' && 'Situational · Needs buffs'}
                  </span>
                </div>
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tierClasses.map((c) => {
                  const stats = classStatsMap[c.id] || { speed: 50, inventory: 50, combat: 50, utility: 50 };

                  return (
                    <div key={c.id} className="glass-card p-6 border border-emerald-900/30 flex flex-col justify-between">
                      <div>
                        
                        {/* Top Info Header */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-xl font-extrabold text-white">{c.name}</h3>
                              <span className={`px-2 py-0.5 rounded text-xs font-bold tier-${c.tier.toLowerCase()}`}>
                                {c.tier} Tier
                              </span>
                            </div>
                            <p className="text-xs text-gray-300 mt-1">{c.description}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="text-xs text-gray-400 font-mono block">Cost</span>
                            <span className="text-base font-extrabold text-amber-400 font-mono flex items-center gap-1">
                              <Gem className="w-4 h-4 text-amber-400 inline" /> {c.cost} 💎
                            </span>
                          </div>
                        </div>

                        {/* Perk List */}
                        <div className="mb-5 space-y-1.5 bg-gray-950/60 p-3.5 rounded-xl border border-gray-800">
                          <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block font-mono">
                            Class Perks
                          </span>
                          {c.perks.map((perk, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-gray-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <span>{perk}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stat Progress Bars */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-xs font-mono">
                          <div>
                            <div className="flex justify-between text-gray-400 mb-1">
                              <span>Loot Speed</span>
                              <span className="text-emerald-400">{stats.speed}%</span>
                            </div>
                            <div className="w-full bg-gray-900 rounded-full h-1.5">
                              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${stats.speed}%` }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-gray-400 mb-1">
                              <span>Inventory</span>
                              <span className="text-emerald-400">{stats.inventory}%</span>
                            </div>
                            <div className="w-full bg-gray-900 rounded-full h-1.5">
                              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${stats.inventory}%` }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-gray-400 mb-1">
                              <span>Combat Power</span>
                              <span className="text-cyan-400">{stats.combat}%</span>
                            </div>
                            <div className="w-full bg-gray-900 rounded-full h-1.5">
                              <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: `${stats.combat}%` }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-gray-400 mb-1">
                              <span>Team Utility</span>
                              <span className="text-amber-400">{stats.utility}%</span>
                            </div>
                            <div className="w-full bg-gray-900 rounded-full h-1.5">
                              <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: `${stats.utility}%` }} />
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Best For Tags & Leveling */}
                      <div className="pt-4 border-t border-gray-800 flex items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {c.bestFor.map((b) => (
                            <span key={b} className="px-2 py-0.5 rounded bg-gray-900 text-gray-300 text-[10px] font-semibold border border-gray-800">
                              {b}
                            </span>
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono">
                          Lvl 2 Req: {c.level2Req}
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          );
        })}
      </div>

      {/* Head-to-Head Class Comparison Tool */}
      <div className="glass-card p-8 border border-emerald-800/40">
        <div className="flex items-center gap-3 mb-6">
          <ArrowRightLeft className="w-6 h-6 text-emerald-400" />
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Head-to-Head Class Comparison Tool
            </h2>
            <p className="text-xs text-gray-400">Select two classes to compare their specs, diamond cost, and stat ratings side by side.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          {/* Select Class A */}
          <div>
            <label className="block text-xs font-mono text-emerald-400 font-bold mb-2">Class A</label>
            <select
              value={compareClassA}
              onChange={(e) => setCompareClassA(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-white text-sm font-bold focus:outline-none focus:border-emerald-500"
            >
              {classesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.tier} Tier - {c.cost} 💎)
                </option>
              ))}
            </select>
          </div>

          {/* Select Class B */}
          <div>
            <label className="block text-xs font-mono text-emerald-400 font-bold mb-2">Class B</label>
            <select
              value={compareClassB}
              onChange={(e) => setCompareClassB(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-white text-sm font-bold focus:outline-none focus:border-emerald-500"
            >
              {classesData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name} ({c.tier} Tier - {c.cost} 💎)
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Side by side comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400 font-mono">
                <th className="py-3 px-4">Metric</th>
                <th className="py-3 px-4 text-emerald-300 font-bold">{classAObj.name}</th>
                <th className="py-3 px-4 text-emerald-300 font-bold">{classBObj.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 font-medium text-gray-200">
              <tr>
                <td className="py-3 px-4 text-gray-400">Tier Ranking</td>
                <td className="py-3 px-4 font-bold text-white">{classAObj.tier} Tier</td>
                <td className="py-3 px-4 font-bold text-white">{classBObj.tier} Tier</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-400">Unlock Cost</td>
                <td className="py-3 px-4 font-mono text-amber-400">{classAObj.cost} Diamonds</td>
                <td className="py-3 px-4 font-mono text-amber-400">{classBObj.cost} Diamonds</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-400">Loot Speed Rating</td>
                <td className="py-3 px-4 font-mono text-emerald-400">{statsA.speed} / 100</td>
                <td className="py-3 px-4 font-mono text-emerald-400">{statsB.speed} / 100</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-400">Inventory Capacity</td>
                <td className="py-3 px-4 font-mono text-emerald-400">{statsA.inventory} / 100</td>
                <td className="py-3 px-4 font-mono text-emerald-400">{statsB.inventory} / 100</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-400">Combat Damage</td>
                <td className="py-3 px-4 font-mono text-cyan-400">{statsA.combat} / 100</td>
                <td className="py-3 px-4 font-mono text-cyan-400">{statsB.combat} / 100</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-gray-400">Best Recommended For</td>
                <td className="py-3 px-4 text-xs">{classAObj.bestFor.join(', ')}</td>
                <td className="py-3 px-4 text-xs">{classBObj.bestFor.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
