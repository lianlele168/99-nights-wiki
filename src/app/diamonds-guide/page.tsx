import type { Metadata } from 'next';
import Link from 'next/link';
import { Gem, Gift, Award, Key, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Diamonds Guide — How to Get & Spend (2026)',
  description:
    'Complete diamonds guide for 99 Nights in the Forest. Learn how to earn free Diamonds fast, priority class purchases, and active code rewards.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/diamonds-guide/' },
};

const earningMethods = [
  {
    method: 'Daily Quests',
    diamonds: '10–25 💎',
    difficulty: 'Easy',
    tip: 'Always complete your daily quests before logging off. They reset every 24 hours.',
    priority: 1,
  },
  {
    method: 'Redeem Active Codes',
    diamonds: 'Up to 32 💎',
    difficulty: 'Instant',
    tip: 'Redeem active codes FORESTWAKESUP26 (15) + AFTERPARTY (15) + YAY FISHING (2) for 32 free diamonds.',
    priority: 2,
  },
  {
    method: 'In-Game Achievements',
    diamonds: '5–50 💎',
    difficulty: 'Medium',
    tip: 'Complete milestone achievements on the lobby quest board.',
    priority: 3,
  },
  {
    method: 'Survive Night Milestones',
    diamonds: 'Bonus Yield',
    difficulty: 'Hard',
    tip: 'Reaching Night 25, 50, 75, and 99 gives large diamond rewards.',
    priority: 4,
  },
];

const spendingGuide = [
  {
    priority: '✅ Buy First (S-Tier)',
    item: 'Scavenger Class',
    cost: 80,
    reason: 'Best ROI of any diamond purchase. Extra inventory slots + 50% faster chest opening speed.',
  },
  {
    priority: '✅ Buy Next (S-Tier)',
    item: 'Engineer Class',
    cost: 150,
    reason: 'Deployable auto-turrets handle cultist night raids automatically while you chop wood.',
  },
  {
    priority: '⚠️ Optional Later',
    item: 'Big Game Hunter Class',
    cost: 120,
    reason: 'Great for solo meat & pelt farming, but secondary to Scavenger.',
  },
  {
    priority: '⚠️ Optional Later',
    item: 'Cyborg / Assassin Class',
    cost: 180,
    reason: 'High cost. Buy only if your squad needs dedicated combat DPS.',
  },
  {
    priority: '❌ Avoid',
    item: 'Lobby Shop Rerolls',
    cost: '10 💎 / roll',
    reason: 'Do not waste diamonds rerolling shop stock early game when saving for Scavenger.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you get Diamonds in 99 Nights in the Forest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earn Diamonds through daily quests (10-25/day), redeeming active codes (32 free diamonds), and completing night survival milestones.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I spend my Diamonds on first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buy the Scavenger class first (80 diamonds). It provides extra inventory space and 50% faster chest opening speed.',
      },
    },
  ],
};

export default function DiamondsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-xs font-semibold text-purple-300 mb-4 shadow-glow">
            <Gem className="w-4 h-4 text-purple-400" />
            Currency & Progression Strategy · 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Diamonds Earning & <span className="text-purple-400">Spending Guide</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Master the Diamond economy. Learn the fastest ways to farm Diamonds without Robux and how to optimize class unlocks.
          </p>
        </div>

        {/* Currency Summary Card */}
        <div className="glass-card p-6 mb-10 border border-purple-800/40 bg-gradient-to-r from-purple-950/30 via-gray-950 to-purple-950/30">
          <div className="flex items-start gap-4">
            <Gem className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-extrabold text-white text-lg mb-2">What are Diamonds in 99 Nights?</h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Diamonds are the core progression currency in 99 Nights in the Forest. They are earned entirely through gameplay and code redemption (no Robux required). Use Diamonds in the lobby shop to permanently unlock classes like <strong className="text-emerald-300">Scavenger</strong> and <strong className="text-emerald-300">Engineer</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Redeem Code CTA */}
        <div className="glass-panel p-6 rounded-2xl mb-12 border border-emerald-500/40 shadow-glow flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Gift className="w-8 h-8 text-emerald-400 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-white text-base">Claim 32 Free Diamonds Instantly</h3>
              <p className="text-xs text-gray-300">Redeem active codes FORESTWAKESUP26 and AFTERPARTY for instant diamonds.</p>
            </div>
          </div>
          <Link href="/codes" className="btn-primary text-xs">
            <Key className="w-4 h-4" /> Claim Active Codes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Earning Methods */}
        <div className="space-y-4 mb-16">
          <h2 className="section-title">
            <Award className="w-6 h-6 text-purple-400" />
            Top Ways to Earn Diamonds Fast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earningMethods.map((m) => (
              <div key={m.priority} className="glass-card p-5 border border-purple-900/30 flex items-start gap-4">
                <span className="w-8 h-8 rounded-xl bg-purple-950 text-purple-300 border border-purple-700 font-mono font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  #{m.priority}
                </span>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white text-sm">{m.method}</h3>
                    <span className="font-mono text-xs font-extrabold text-amber-400">{m.diamonds}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mb-2">{m.tip}</p>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-900 text-purple-300 border border-gray-800">
                    Difficulty: {m.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spending Priority Guide Table */}
        <div className="glass-card p-6 mb-16 border border-purple-900/30">
          <h2 className="section-title">
            <Gem className="w-6 h-6 text-purple-400" />
            Diamond Spending Priority (ROI Breakdown)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-800 text-gray-400 font-mono">
                  <th className="py-3 px-4">Priority Status</th>
                  <th className="py-3 px-4">Item / Class</th>
                  <th className="py-3 px-4">Cost</th>
                  <th className="py-3 px-4">Why Buy / Avoid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/60 font-medium text-gray-200">
                {spendingGuide.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3.5 px-4 font-bold">{row.priority}</td>
                    <td className="py-3.5 px-4 font-extrabold text-white">{row.item}</td>
                    <td className="py-3.5 px-4 font-mono text-amber-400 font-extrabold">
                      {row.cost} 💎
                    </td>
                    <td className="py-3.5 px-4 text-gray-300 text-xs">{row.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="glass-card p-8 border border-purple-900/30">
          <h2 className="section-title">
            <HelpCircle className="w-6 h-6 text-purple-400" />
            Frequently Asked Questions
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
