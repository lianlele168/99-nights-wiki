import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from 'lucide-react';
import config from '@/data/game.config.json';

export const metadata: Metadata = {
  title: `Terms of Use & Community Guidelines | ${config.game.name} Wiki`,
  description: `Terms of use, gameplay accuracy disclaimers, and fair use guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/terms/',
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-slate-200">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs text-emerald-400 font-mono">
          <Link href="/" className="hover:text-emerald-300">Home</Link>
          <span>/</span>
          <span className="text-slate-200">Terms of Use</span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>COMMUNITY &amp; LEGAL TERMS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Terms of Use &amp; Service Guidelines
        </h1>
        <p className="text-xs sm:text-sm text-slate-400">
          Unofficial strategy companion for {config.game.name}.
        </p>
      </div>

      <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Gamepad2 className="w-4 h-4 text-emerald-400" />
            <span>1. Unofficial Fan Companion</span>
          </h2>
          <p>
            99 Nights in the Forest Wiki is an independent fan-made guide. It is not affiliated with, sponsored by, or endorsed by Roblox Corporation or {config.game.developer}.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
          </h2>
          <p>
            Entities, flame decay rates, class skills, diamond spawns, and redeem codes change frequently as developers patch the game. All guides and calculator results are provided &quot;as is&quot;. Always verify current game mechanics inside the Roblox experience.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>3. Anti-Phishing &amp; Account Security Pledge</span>
          </h2>
          <p>
            We will <strong className="text-white">never</strong> ask for your Roblox credentials, security passwords, or Robux. Never share account credentials with third-party fan sites. Redeem codes exclusively inside the official Roblox game.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>4. Acceptable Community Use</span>
          </h2>
          <p>
            Visitors are welcome to freely access and share our survival guides and calculators. You agree not to engage in malicious attacks, automated scraping, or misrepresenting this fan site as official game documentation.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Scale className="w-4 h-4 text-purple-400" />
            <span>5. Intellectual Property &amp; Fair Use</span>
          </h2>
          <p>
            Roblox is a registered trademark of Roblox Corporation. {config.game.name} and all related visual assets belong to {config.game.developer}. All media and text are used under Fair Use principles for educational commentary.
          </p>
        </section>

        <section className="space-y-2 border-t border-gray-800 pt-6">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>6. DMCA &amp; Contact Inquiries</span>
          </h2>
          <p>
            For rights holders, content attribution, or takedown requests, contact our editorial team directly at:
          </p>
          <div className="inline-block rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 font-mono text-sm font-bold text-emerald-300">
            lianlele168@gmail
          </div>
          <p className="text-xs text-slate-400 font-mono">
            We respond promptly within 48 business hours.
          </p>
        </section>
      </div>
    </main>
  );
}
