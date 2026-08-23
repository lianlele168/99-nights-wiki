'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Skull, 
  Search, 
  CheckCircle2,
  AlertTriangle,
  Eye
} from 'lucide-react';
import entitiesData from '@/data/entities.json';

export default function EntityClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Entities' },
    { id: 'Primary Monster', label: 'Primary Monsters (Immortal)' },
    { id: 'Hostile', label: 'Cultists & Bosses' },
    { id: 'Hostile Wildlife', label: 'Hostile Wildlife' },
    { id: 'Passive Animal', label: 'Passive Animals' },
  ];

  const filteredEntities = entitiesData.filter((e) => {
    const matchesCat =
      selectedCategory === 'all' ||
      (selectedCategory === 'Hostile' ? (e.category === 'Hostile' || e.category === 'Boss') : e.category === selectedCategory);
    const matchesSearch =
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-950/80 border border-rose-700/60 text-xs font-semibold text-rose-300 mb-4 shadow-glow-red">
          <Skull className="w-4 h-4 text-rose-400" />
          Bestiary & Threat Intel · 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Entity & Monster <span className="text-rose-400">Database</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Complete guide to forest creatures, cultist raiders, bosses, and immortal primary monsters. Learn attack patterns and survival counter-tactics.
        </p>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-gray-900/80 border border-gray-800 rounded-xl w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search monster name or tactic..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900/80 border border-gray-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-500 transition-colors font-medium"
          />
        </div>

      </div>

      {/* Entities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {filteredEntities.map((item) => {
          const threatKey = item.threat.toLowerCase();
          const isImmortal = item.immortal;

          return (
            <div
              key={item.id}
              className={`glass-card p-6 border flex flex-col justify-between transition-all ${
                item.threat === 'Extreme'
                  ? 'border-rose-900/60 hover:border-rose-500/80 shadow-glow-red'
                  : 'border-gray-800/80 hover:border-emerald-700/50'
              }`}
            >
              <div>
                
                {/* Header Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-extrabold text-xl text-white flex items-center gap-2">
                      {item.name}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono">{item.category}</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold threat-${threatKey}`}>
                    {item.threat} Threat
                  </span>
                </div>

                {/* Immortal Warning Banner */}
                {isImmortal && (
                  <div className="mb-4 px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-700/50 text-rose-300 text-xs font-mono font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    IMMORTAL (Cannot be killed — Run!)
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Behavior */}
                <div className="mb-4 p-3 rounded-xl bg-gray-950/80 border border-gray-800 text-xs">
                  <span className="font-bold text-emerald-400 font-mono block mb-1">
                    Behavior Pattern:
                  </span>
                  <p className="text-gray-300">{item.behavior}</p>
                </div>

                {/* Survival Tips Checklist */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block font-mono">
                    Survival Tactics
                  </span>
                  {item.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>Status: {isImmortal ? 'Unkillable' : 'Killable for drops'}</span>
                <Link
                  href="/calculator"
                  className="text-emerald-400 hover:underline flex items-center gap-1 font-bold"
                >
                  Calc Build <Eye className="w-3 h-3" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* Primary Monsters Warning Banner */}
      <div className="glass-card p-8 border border-rose-800/40 bg-gradient-to-r from-rose-950/40 via-gray-950 to-rose-950/40">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-8 h-8 text-rose-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-extrabold text-white text-lg mb-1">
              Golden Rule of the Forest: Never Fight Primary Monsters
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Entities like <strong className="text-rose-300">The Deer</strong>, <strong className="text-rose-300">The Owl</strong>, and <strong className="text-rose-300">The Cat</strong> have infinite health pools and are scripted to kill players who stay in darkness too long. Always maintain your campfire fuel and retreat to light radius when dusk falls.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
