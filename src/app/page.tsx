import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AuthorCard from '@/components/AuthorCard';
import { 
  Flame, 
  Key, 
  Swords, 
  ShieldAlert, 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Copy,
  HelpCircle
} from 'lucide-react';
import config from '@/data/game.config.json';
import codesData from '@/data/codes.json';
import classesData from '@/data/classes.json';
import entitiesData from '@/data/entities.json';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Wiki — Codes, Class Tier List & Calculator 2026',
  description:
    'The #1 unofficial 99 Nights in the Forest wiki. Access active redeem codes, interactive survival calculator, S-tier class rankings, entity bestiary, and diamond guides.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/' },
};

export default function HomePage() {
  const activeCodes = codesData.filter((c) => c.status === 'active');
  const sTierClasses = classesData.filter((c) => c.tier === 'S');
  const extremeEntities = entitiesData.filter((e) => e.threat === 'Extreme');

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is 99 Nights in the Forest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '99 Nights in the Forest is a popular survival horror game on Roblox developed by Grandma\'s Favorite Games, where players must keep their campfire fueled and survive 99 nights against cultist raids and immortal forest entities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the best active codes in 99 Nights in the Forest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Active working codes include FORESTWAKESUP26 (15 Diamonds + 3 Flames), AFTERPARTY (15 Diamonds), and YAY FISHING (2 Diamonds in fishing chat minigame).',
        },
      },
      {
        '@type': 'Question',
        name: 'Which class is the best in 99 Nights in the Forest?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scavenger and Engineer are the S-tier classes. Scavenger allows faster chest looting for wood and food, while Engineer deploys automated turrets to defend your campfire.',
        },
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '99 Nights in the Forest Wiki',
    url: 'https://99nights.robloxwikihub.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://99nights.robloxwikihub.com/codes?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      <div className="space-y-20 pb-16">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 border-b border-emerald-950/60">
          
          {/* Hero Ambient Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Version & Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-6 shadow-glow">
              <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Official Survival Hub</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-none mb-6">
              Survive the Dark. <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                99 Nights in the Forest
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              The premier unofficial strategy wiki. Claim active codes for free Diamonds, calculate campfire survival burn rates, and master class tier lists.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <Link href="/calculator" className="btn-primary text-sm sm:text-base">
                <Calculator className="w-5 h-5" /> Launch Survival Calculator
              </Link>
              <Link href="/codes" className="btn-secondary text-sm sm:text-base">
                <Key className="w-5 h-5 text-emerald-400" /> Active Codes ({activeCodes.length})
              </Link>
              <Link href="/class-tier-list" className="btn-secondary text-sm sm:text-base">
                <Swords className="w-5 h-5 text-emerald-400" /> Class Tier List
              </Link>
            </div>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              
              <div className="glass-card p-4 text-center border-gray-800">
                <span className="text-xs text-gray-400 font-mono block mb-1">Roblox Visits</span>
                <span className="text-2xl font-extrabold text-white tracking-tight font-mono">{config.stats.visits}</span>
              </div>

              <div className="glass-card p-4 text-center border-gray-800">
                <span className="text-xs text-gray-400 font-mono block mb-1">Active Codes</span>
                <span className="text-2xl font-extrabold text-emerald-400 tracking-tight font-mono">{activeCodes.length} Codes</span>
              </div>

              <div className="glass-card p-4 text-center border-gray-800">
                <span className="text-xs text-gray-400 font-mono block mb-1">Monster Database</span>
                <span className="text-2xl font-extrabold text-rose-400 tracking-tight font-mono">{entitiesData.length} Entities</span>
              </div>

              <div className="glass-card p-4 text-center border-gray-800">
                <span className="text-xs text-gray-400 font-mono block mb-1">Playable Classes</span>
                <span className="text-2xl font-extrabold text-amber-400 tracking-tight font-mono">{classesData.length} Classes</span>
              </div>

            </div>

          </div>
        </section>

        {/* E-E-A-T AUTHOR VERIFICATION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AuthorCard />

          {/* VISUAL GAMEPLAY SHOWCASE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-emerald-900/60 bg-emerald-950/40 p-4">
              <Image
                src="/images/99nights-header.webp"
                alt="99 Nights in the Forest Official Game Icon"
                width={512}
                height={512}
                className="rounded-xl object-cover w-full h-56 border border-emerald-800/40"
                priority
              />
              <p className="text-xs text-emerald-300 mt-2.5 text-center font-medium">
                Figure 1: Official 99 Nights in the Forest Game Cover Icon.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-emerald-900/60 bg-emerald-950/40 p-4">
              <Image
                src="/images/99nights-gameplay.webp"
                alt="99 Nights in the Forest Campfire Arena"
                width={768}
                height={432}
                className="rounded-xl object-cover w-full h-56 border border-emerald-800/40"
              />
              <p className="text-xs text-emerald-300 mt-2.5 text-center font-medium">
                Figure 2: Midnight Campfire Defense with Fortified Spike Barricades.
              </p>
            </div>
          </div>
        </div>

        {/* INTERACTIVE HUB TOOLS GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Wiki Interactive Utility Hub
            </h2>
            <p className="text-gray-400 text-sm">
              Use our interactive calculators and databases to plan your squad builds and maximize survival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Calculator Card */}
            <Link href="/calculator" className="glass-card p-6 border-emerald-800/40 hover:border-emerald-500 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  Survival Calculator
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">NEW TOOL</span>
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Simulate your squad build, campfire warmth burn rates, food supplies, and cultist defense power.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 font-mono">
                Open Calculator <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Redeem Codes Card */}
            <Link href="/codes" className="glass-card p-6 border-emerald-800/40 hover:border-emerald-500 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  Active Redeem Codes
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">3 ACTIVE</span>
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Get 32 free Diamonds and 3 Flames instantly. Copy codes with 1-click clipboard feedback.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 font-mono">
                View Active Codes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Class Tier List Card */}
            <Link href="/class-tier-list" className="glass-card p-6 border-emerald-800/40 hover:border-emerald-500 group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Swords className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  Class Tier List
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">META 2026</span>
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  S-tier rankings for Scavenger, Engineer, Cyborg & more. Side-by-side comparison tool.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 font-mono">
                Rankings & Stats <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

          </div>
        </section>

        {/* ACTIVE CODES PREVIEW WIDGET */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 rounded-3xl border border-emerald-500/40 shadow-glow">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-emerald-400" />
                  <h2 className="text-2xl font-extrabold text-white tracking-tight">
                    Working Codes 
                  </h2>
                </div>
                <p className="text-xs text-gray-400 mt-1">Copy active codes directly below for free Diamonds & Flames.</p>
              </div>
              <Link href="/codes" className="btn-primary text-xs">
                View Full Codes Hub <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCodes.map((c) => (
                <div key={c.code} className="p-4 rounded-xl bg-gray-950 border border-gray-800 flex flex-col justify-between">
                  <div>
                    <span className="font-mono font-extrabold text-emerald-400 text-base block mb-1">{c.code}</span>
                    <span className="text-xs text-gray-300 block mb-2">{c.reward}</span>
                  </div>
                  <Link href="/codes" className="text-[11px] font-mono font-bold text-emerald-400 hover:underline flex items-center gap-1">
                    Copy Code in Hub <Copy className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* S-TIER CLASS SPOTLIGHT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                S-Tier Class Spotlight
              </h2>
              <p className="text-xs text-gray-400 mt-1">The two mandatory classes every squad needs for 99 Night survival.</p>
            </div>
            <Link href="/class-tier-list" className="text-xs font-bold text-emerald-400 hover:underline font-mono">
              View All 6 Classes →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sTierClasses.map((c) => (
              <div key={c.id} className="glass-card p-6 border border-amber-900/40">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-extrabold text-white">{c.name}</span>
                  <span className="px-2.5 py-0.5 rounded text-xs font-black tier-s">S TIER</span>
                </div>
                <p className="text-xs text-gray-300 mb-4">{c.description}</p>
                <div className="space-y-1.5 bg-gray-950/80 p-3.5 rounded-xl border border-gray-800 mb-4">
                  {c.perks.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-emerald-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Unlock Cost: <strong className="text-amber-400">{c.cost} 💎</strong></span>
                  <Link href="/class-tier-list" className="text-emerald-400 hover:underline font-bold">
                    Class Specs →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ENTITY THREAT RADAR TICKER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 border border-rose-900/40 bg-gradient-to-r from-rose-950/30 via-gray-950 to-rose-950/30">
            <div className="flex items-start gap-4 mb-6">
              <ShieldAlert className="w-8 h-8 text-rose-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-extrabold text-white tracking-tight">
                  Immortal Entity Threat Radar
                </h2>
                <p className="text-xs text-rose-300/80">Extreme threat entities that hunt players in dark forest zones.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {extremeEntities.map((ent) => (
                <div key={ent.id} className="p-4 rounded-xl bg-gray-950/90 border border-rose-900/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-extrabold text-white text-sm">{ent.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold threat-extreme">EXTREME</span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 mb-2">{ent.description}</p>
                  <span className="text-[10px] font-mono text-rose-400">Rule: {ent.tips[0]}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/entity-guide" className="inline-flex items-center gap-2 text-xs font-bold text-rose-300 hover:text-white font-mono">
                Explore All 13 Monsters in Database <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION SECTION */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-emerald-400" />
              99 Nights Game FAQ
            </h2>
            <p className="text-xs text-gray-400">Frequently asked questions about codes, survival, and class tier lists.</p>
          </div>

          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="glass-card p-5 border border-gray-800">
                <h3 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  {faq.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed pl-6">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
