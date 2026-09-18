import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  BookOpen, 
  Key, 
  Swords, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Sparkles,
  Flame
} from 'lucide-react';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Beginner Guide — Night 1 to 99 Roadmap (2026)',
  description:
    'Beginner survival guide for 99 Nights in the Forest. Learn campfire management, wood hoarding, Scavenger class perks, and monster counter-tactics.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/beginner-guide/' },
};

const steps = [
  {
    step: 1,
    title: 'Redeem Free Diamonds & Flames',
    content: 'Before launching into the forest, redeem all active working codes (FORESTWAKESUP26 & AFTERPARTY) for 32 free Diamonds and 3 Flames.',
    link: '/codes',
    linkText: 'Claim 32 Diamonds →',
  },
  {
    step: 2,
    title: 'Unlock Scavenger Class (80 💎)',
    content: 'Save 80 Diamonds to unlock Scavenger immediately. Extra inventory capacity and 50% faster chest looting make early game survival twice as easy.',
    link: '/class-tier-list',
    linkText: 'Check Class Perks →',
  },
  {
    step: 3,
    title: 'Stockpile Campfire Fuel Before Dusk',
    content: 'The campfire light is your only shield against immortal primary monsters. Chop wood continuously during daytime. Never enter night with under 50 logs.',
  },
  {
    step: 4,
    title: 'Defend Against Night Cultist Raids',
    content: 'Cultists spawn every night to attack your campfire. Prioritize killing Crossbow Cultists first, or deploy Engineer turrets for automated defense.',
    link: '/entity-guide',
    linkText: 'View Monster DB →',
  },
  {
    step: 5,
    title: 'Plant Saplings for Infinite Wood',
    content: 'Plant tree saplings around your camp radius on Day 2. By Night 20+, they create an infinite renewable log farm right next to your campfire.',
  },
];

const mistakesToAvoid = [
  { mistake: 'Trying to kill The Deer or immortal monsters', fix: 'Primary monsters are unkillable. Run into campfire light immediately.' },
  { mistake: 'Letting the campfire run out of log fuel', fix: 'Always keep 2x the wood you think you need in camp inventory.' },
  { mistake: 'Wasting Diamonds on shop rerolls', fix: 'Save all Diamonds for Scavenger (80 💎) and Engineer (150 💎).' },
  { mistake: 'Wandering far from camp during night phases', fix: 'Stay strictly within the campfire light radius at night. Explore at dawn.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you survive in 99 Nights in the Forest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep your campfire lit with wood at all times, gather food and logs during daytime, build turrets to defend against cultist raids, and avoid immortal entities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best class for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scavenger is the best beginner class. It costs 80 Diamonds and gives extra backpack slots and 50% faster chest opening speed.',
      },
    },
  ],
};

export default function BeginnerGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-4 shadow-glow">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Complete Survival Roadmap · 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Beginner Survival <span className="text-emerald-400">Master Guide</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg">
            Essential roadmap for surviving your first 10 nights and building towards the 99 Night victory milestone.
          </p>
        </div>

        {/* Step by Step Timeline */}
        <div className="space-y-4 mb-16">
          <h2 className="section-title">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            5-Step Day 1-10 Survival Checklist
          </h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="glass-card p-6 border border-emerald-900/30 flex items-start gap-4">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-extrabold text-lg flex items-center justify-center flex-shrink-0 font-mono shadow-glow">
                  {s.step}
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-base mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-3">{s.content}</p>
                  {s.link && (
                    <Link href={s.link} className="text-xs font-bold text-emerald-400 hover:underline flex items-center gap-1">
                      {s.linkText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mistakes to Avoid Table */}
        <div className="glass-card p-6 mb-16 border border-emerald-900/30">
          <h2 className="section-title text-rose-400">
            <XCircle className="w-6 h-6 text-rose-400" />
            Fatal Mistakes to Avoid
          </h2>
          <div className="space-y-3">
            {mistakesToAvoid.map((m, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-950/80 border border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 font-bold uppercase block">Rookie Mistake</span>
                    <p className="text-xs text-gray-300 font-medium">{m.mistake}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 border-t md:border-t-0 md:border-l border-gray-800 pt-3 md:pt-0 md:pl-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Correct Tactic</span>
                    <p className="text-xs text-emerald-300 font-medium">{m.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <Link href="/calculator" className="glass-card p-5 border border-emerald-800/40 hover:border-emerald-500 transition-all text-center group">
            <Flame className="w-8 h-8 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-sm mb-1">Survival Calculator</h3>
            <p className="text-xs text-gray-400">Simulate wood & food burn rates</p>
          </Link>
          <Link href="/class-tier-list" className="glass-card p-5 border border-emerald-800/40 hover:border-emerald-500 transition-all text-center group">
            <Swords className="w-8 h-8 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-sm mb-1">Class Tier List</h3>
            <p className="text-xs text-gray-400">Rankings & perk breakdown</p>
          </Link>
          <Link href="/codes" className="glass-card p-5 border border-emerald-800/40 hover:border-emerald-500 transition-all text-center group">
            <Key className="w-8 h-8 text-emerald-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-white text-sm mb-1">Redeem Codes</h3>
            <p className="text-xs text-gray-400">Claim 32 free Diamonds</p>
          </Link>
        </div>

        {/* FAQ */}
        <div className="glass-card p-8 border border-emerald-900/30">
          <h2 className="section-title">
            <HelpCircle className="w-6 h-6 text-emerald-400" />
            Beginner Survival FAQ
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
