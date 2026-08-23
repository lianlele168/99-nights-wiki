'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Calculator, 
  Flame, 
  Users, 
  ShieldCheck, 
  Clock, 
  Gem, 
  TrendingUp, 
  RotateCcw,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import classesData from '@/data/classes.json';

const flameTypes = [
  { id: 'basic', name: 'Basic Campfire', bonus: '1x Warmth', decayMultiplier: 1.0, icon: '🔥' },
  { id: 'emerald', name: 'Emerald Flame', bonus: '+50% Warmth & Fog Vision', decayMultiplier: 0.75, icon: '🟢' },
  { id: 'soul', name: 'Soul Flame', bonus: '+100% Defense vs Cultists', decayMultiplier: 0.6, icon: '👻' },
  { id: 'inferno', name: 'Inferno Flame', bonus: '+200% Heat Radius & Beast Repel', decayMultiplier: 0.4, icon: '💥' },
];

export default function CalculatorClient() {
  // Input State
  const [selectedClassId, setSelectedClassId] = useState('scavenger');
  const [selectedFlameId, setSelectedFlameId] = useState('basic');
  const [teamSize, setTeamSize] = useState<number>(2);
  const [woodLogs, setWoodLogs] = useState<number>(60);
  const [rawMeat, setRawMeat] = useState<number>(30);
  const [ammoCount, setAmmoCount] = useState<number>(50);

  const selectedClass = classesData.find(c => c.id === selectedClassId) || classesData[0];
  const selectedFlame = flameTypes.find(f => f.id === selectedFlameId) || flameTypes[0];

  // Calculation Logic
  const calcResults = useMemo(() => {
    // Class multiplier
    let classBonus = 1.0;
    if (selectedClassId === 'scavenger') classBonus = 1.35;
    if (selectedClassId === 'engineer') classBonus = 1.4;
    if (selectedClassId === 'cyborg') classBonus = 1.25;
    if (selectedClassId === 'big-game-hunter') classBonus = 1.2;

    // Wood & Flame math
    const woodBurnDays = (woodLogs / (8 * selectedFlame.decayMultiplier)) * classBonus;
    
    // Food math
    const foodDays = rawMeat / (2.5 * teamSize);

    // Defense rating
    const defenseScore = Math.min(100, Math.round((ammoCount * 0.4 + (selectedClassId === 'engineer' ? 40 : 15)) * (selectedFlameId === 'soul' ? 1.5 : 1.0)));

    // Estimated Max Nights
    const maxNights = Math.min(99, Math.max(1, Math.round(Math.min(woodBurnDays, foodDays) * 4)));

    // Estimated Diamond Gain
    const estimatedDiamonds = Math.round(maxNights * 1.5 + (selectedClassId === 'scavenger' ? 20 : 5));

    // Advice text
    let advice = 'Balanced setup! Keep gathering wood during daytime.';
    if (woodBurnDays < foodDays) {
      advice = '⚠️ Wood deficit! You will freeze before running out of food. Chop more logs!';
    } else if (foodDays < woodBurnDays) {
      advice = '⚠️ Food shortage! Hunt wolves or rabbits to sustain your squad size.';
    } else if (defenseScore < 40) {
      advice = '🛡️ Low defense! Cultist raids on Night 10+ will overpower your camp. Craft ammo or turrets!';
    } else if (maxNights >= 70) {
      advice = '🔥 Excellent build! High survival probability for all 99 Nights.';
    }

    return {
      maxNights,
      woodBurnDays: woodBurnDays.toFixed(1),
      foodDays: foodDays.toFixed(1),
      defenseScore,
      estimatedDiamonds,
      advice,
    };
  }, [selectedClassId, selectedFlameId, teamSize, woodLogs, rawMeat, ammoCount, selectedFlame]);

  const handleReset = () => {
    setSelectedClassId('scavenger');
    setSelectedFlameId('basic');
    setTeamSize(2);
    setWoodLogs(60);
    setRawMeat(30);
    setAmmoCount(50);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-4 shadow-glow">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          Interactive Utility Tool · 2026 Updated
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Night Survival & Resource <span className="text-emerald-400">Calculator</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Simulate your squad build, campfire warmth burn rates, food supplies, and cultist defense power. Estimate your max survivable nights before entering the forest.
        </p>
      </div>

      {/* Main Grid: Controls Left (8 cols) & Results Right (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Class Selection */}
          <div className="glass-card p-6">
            <label className="block text-sm font-bold text-white mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-400" />
                Select Character Class
              </span>
              <span className="text-xs text-gray-400 font-mono">Current: {selectedClass.name} ({selectedClass.tier}-Tier)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {classesData.map((c) => {
                const isSelected = c.id === selectedClassId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClassId(c.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950/90 border-emerald-500 shadow-glow text-white'
                        : 'bg-gray-900/60 border-gray-800 hover:border-gray-700 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-sm">{c.name}</span>
                      <span className={`px-1.5 py-0.2 rounded text-[10px] font-bold tier-${c.tier.toLowerCase()}`}>
                        {c.tier}
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-400 block line-clamp-1">{c.perks[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Campfire Flame Type */}
          <div className="glass-card p-6">
            <label className="block text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              Campfire Flame Upgrade
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {flameTypes.map((f) => {
                const isSelected = f.id === selectedFlameId;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlameId(f.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500/80 shadow-glow-gold text-white'
                        : 'bg-gray-900/60 border-gray-800 hover:border-gray-700 text-gray-300'
                    }`}
                  >
                    <span className="text-2xl">{f.icon}</span>
                    <div>
                      <span className="font-bold text-sm block text-white">{f.name}</span>
                      <span className="text-xs text-amber-400 font-medium">{f.bonus}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Squad & Resource Sliders */}
          <div className="glass-card p-6 space-y-6">
            
            {/* Squad Size Slider */}
            <div>
              <div className="flex justify-between text-sm font-bold text-white mb-2">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" /> Squad Size
                </span>
                <span className="text-emerald-400 font-mono">{teamSize} {teamSize === 1 ? 'Player (Solo)' : 'Players'}</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-gray-500 font-mono mt-1">
                <span>Solo</span>
                <span>Duo</span>
                <span>Trio</span>
                <span>Full Squad (4)</span>
              </div>
            </div>

            {/* Wood Logs Slider */}
            <div>
              <div className="flex justify-between text-sm font-bold text-white mb-2">
                <span>🪵 Wood Logs Collected</span>
                <span className="text-emerald-400 font-mono">{woodLogs} Logs</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={woodLogs}
                onChange={(e) => setWoodLogs(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Meat Slider */}
            <div>
              <div className="flex justify-between text-sm font-bold text-white mb-2">
                <span>🍖 Cooked / Raw Meat</span>
                <span className="text-emerald-400 font-mono">{rawMeat} Pieces</span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={rawMeat}
                onChange={(e) => setRawMeat(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            {/* Ammo Slider */}
            <div>
              <div className="flex justify-between text-sm font-bold text-white mb-2">
                <span>🏹 Ammo & Turret Parts</span>
                <span className="text-emerald-400 font-mono">{ammoCount} Ammo</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={ammoCount}
                onChange={(e) => setAmmoCount(Number(e.target.value))}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <button
              onClick={handleReset}
              className="text-xs text-gray-400 hover:text-white flex items-center gap-1 font-mono hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset all sliders to default
            </button>

          </div>

        </div>

        {/* Live Results Panel */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="glass-panel p-6 rounded-2xl sticky top-20 border border-emerald-600/40 shadow-glow">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-emerald-900/60">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                <h3 className="font-extrabold text-white text-lg">Simulation Results</h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50">
                LIVE CALC
              </span>
            </div>

            {/* Highlight Max Nights */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-950 to-gray-950 border border-emerald-500/50 text-center mb-6 shadow-glow">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Estimated Max Survival
              </span>
              <div className="text-5xl font-extrabold text-white tracking-tight flex items-center justify-center gap-1">
                <span>{calcResults.maxNights}</span>
                <span className="text-lg text-emerald-400 font-normal">/ 99 Nights</span>
              </div>
              <div className="w-full bg-gray-950 rounded-full h-2 mt-4 overflow-hidden border border-emerald-900/60">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${(calcResults.maxNights / 99) * 100}%` }}
                />
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              
              <div className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Wood Burn Time
                </div>
                <span className="text-lg font-bold text-white font-mono">{calcResults.woodBurnDays} Days</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" /> Food Supply
                </div>
                <span className="text-lg font-bold text-white font-mono">{calcResults.foodDays} Days</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Raid Defense
                </div>
                <span className="text-lg font-bold text-white font-mono">{calcResults.defenseScore}/100</span>
              </div>

              <div className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <Gem className="w-3.5 h-3.5 text-purple-400" /> Est. Diamonds
                </div>
                <span className="text-lg font-bold text-emerald-400 font-mono">+{calcResults.estimatedDiamonds} 💎</span>
              </div>

            </div>

            {/* Tactical Advice Box */}
            <div className="p-4 rounded-xl bg-gray-950 border border-emerald-800/60 mb-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-emerald-300 font-mono uppercase mb-1">Tactical Analysis</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">
                    {calcResults.advice}
                  </p>
                </div>
              </div>
            </div>

            {/* Related Tools Links */}
            <div className="space-y-2 pt-2 border-t border-gray-800">
              <Link
                href="/class-tier-list"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" /> View Full Class Tier List
              </Link>
              <Link
                href="/codes"
                className="w-full py-2.5 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-bold border border-gray-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Claim Free Codes for Diamonds
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
