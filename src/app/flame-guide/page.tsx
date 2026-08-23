import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Zap, HelpCircle, ArrowRight, Gift, Key } from 'lucide-react';

export const metadata: Metadata = {
  title: '99 Nights Flame Combination Guide — All 13 Flame Types (2026)',
  description:
    'Complete flame guide for 99 Nights in the Forest. Learn all 13 flame types, campfire bonuses, recipe combinations, and how to get them.',
  alternates: { canonical: 'https://99-nights-wiki.com/flame-guide' },
};

const flames = [
  { name: 'Standard Flame', color: '#f59e0b', effect: 'Default campfire flame. Reliable fuel burner for basic warmth.' },
  { name: 'Protective Flame', color: '#3b82f6', effect: 'Creates a +50% larger protection radius around the campfire.' },
  { name: 'Healing Flame', color: '#10b981', effect: 'Slowly regenerates health for all players near the campfire light.' },
  { name: 'Hunter\'s Flame', color: '#ef4444', effect: 'Increases tracking range and radar for discovering large animals.' },
  { name: 'Ward Flame', color: '#8b5cf6', effect: 'Applies a 30% slow movement debuff to approaching cultist raiders.' },
  { name: 'Fog Flame', color: '#6b7280', effect: 'Pushes back surrounding forest fog for enhanced vision radius.' },
  { name: 'Fortune Flame', color: '#f59e0b', effect: 'Slightly increases rare item drop rates from nearby chests.' },
  { name: 'Vigil Flame', color: '#0ea5e9', effect: 'Reduces night sanity decay rate while standing near campfire.' },
  { name: 'Ember Flame', color: '#dc2626', effect: 'Reduces log fuel burn rate by 25% for longer night warmth.' },
  { name: 'Scout Flame', color: '#84cc16', effect: 'Reveals a mini-map radar around camp during night phases.' },
  { name: 'Storm Flame', color: '#7c3aed', effect: 'Prevents campfire from extinguishing during rainstorm events.' },
  { name: 'Kin Flame', color: '#ec4899', effect: 'Amplifies the effect strength of all other equipped flames by +20%.' },
  { name: 'Ancient Flame', color: '#f59e0b', effect: 'Ultra-rare ancient flame with supercharged warmth and defense radius.' },
];

const flameCombos = [
  {
    name: 'Defensive Survival Build',
    flames: ['Protective Flame', 'Ember Flame', 'Healing Flame'],
    desc: 'Bigger safe radius + 25% slower fuel burn + health regen. The ultimate all-rounder for surviving 99 Nights.',
    bestFor: 'Solo & Duo Squads',
  },
  {
    name: 'Anti-Cultist Raid Defense',
    flames: ['Ward Flame', 'Protective Flame', 'Kin Flame'],
    desc: 'Cultists slowed + wide light radius + Kin Flame boost. Turns camp into an impenetrable fortress.',
    bestFor: 'Night 10+ Raid Defense',
  },
  {
    name: 'Resource Farming Build',
    flames: ['Fortune Flame', 'Scout Flame', 'Hunter\'s Flame'],
    desc: 'Chest loot boost + mini-map radar + animal tracking. Maximize loot yield during daytime exploration.',
    bestFor: 'Scavenger Class Main',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many Flames can you equip at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can equip up to 3 flames simultaneously to your campfire in 99 Nights in the Forest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you get free Flames?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Redeem active code FORESTWAKESUP26 for 3 free random flames, and visit the Daily Quest machine every 24 hours.',
      },
    },
  ],
};

export default function FlameGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-700/60 text-xs font-semibold text-amber-300 mb-4 shadow-glow-gold">
            <Flame className="w-4 h-4 text-amber-400" />
            Campfire Mechanics Guide · 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Campfire Flame <span className="text-amber-400">Guide & Combinations</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Master campfire flame upgrades. Discover all 13 flame types, how to stack up to 3 flames, and optimal survival synergy recipes.
          </p>
        </div>

        {/* Banner */}
        <div className="glass-card p-6 mb-10 border border-amber-800/40 bg-gradient-to-r from-amber-950/30 via-gray-950 to-amber-950/30">
          <div className="flex items-start gap-4">
            <Flame className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-extrabold text-white text-lg mb-1">Campfire Flame Basics</h2>
              <ul className="text-xs text-gray-300 space-y-1.5 list-disc list-inside">
                <li>Flames grant powerful passive buffs to everyone standing within the campfire light.</li>
                <li>You can equip up to <strong className="text-amber-300">3 flames at the same time</strong>.</li>
                <li>Equipping flames changes your campfire color visually in-game!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Claim Free Flames CTA */}
        <div className="glass-panel p-6 rounded-2xl mb-12 border border-emerald-500/40 shadow-glow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Gift className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-base">Claim 3 Free Random Flames</h3>
              <p className="text-xs text-gray-300">Redeem code FORESTWAKESUP26 for 3 free flames + 15 Diamonds instantly!</p>
            </div>
          </div>
          <Link href="/codes" className="btn-primary text-xs">
            <Key className="w-4 h-4" /> Redeem Flame Code <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* All 13 Flames */}
        <div className="space-y-4 mb-16">
          <h2 className="section-title">
            <Flame className="w-6 h-6 text-amber-400" />
            All 13 Flame Types & Effects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {flames.map((f, i) => (
              <div key={i} className="glass-card p-5 border border-amber-900/30 flex items-start gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{ backgroundColor: f.color + '22', border: `1px solid ${f.color}66` }}
                >
                  🔥
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{f.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1">{f.effect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Combos */}
        <div className="space-y-4 mb-16">
          <h2 className="section-title">
            <Zap className="w-6 h-6 text-amber-400" />
            Top 3 Flame Synergy Combinations
          </h2>
          <div className="space-y-4">
            {flameCombos.map((combo, idx) => (
              <div key={idx} className="glass-card p-6 border border-amber-900/40">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-extrabold text-white text-base">{combo.name}</h3>
                  <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 text-xs font-mono font-bold border border-amber-800">
                    Best for: {combo.bestFor}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {combo.flames.map((f) => (
                    <span key={f} className="px-3 py-1 rounded-lg bg-gray-950 text-amber-300 border border-amber-800/60 font-mono text-xs font-bold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> {f}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{combo.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="glass-card p-8 border border-amber-900/30">
          <h2 className="section-title">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            Flame System FAQ
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-gray-950/80 border border-gray-800">
                <h3 className="font-bold text-white text-sm mb-1">{faq.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
