import Link from 'next/link';
import { Flame, Shield, Heart, ExternalLink, Key, Swords, Calculator } from 'lucide-react';
import config from '@/data/game.config.json';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-emerald-950/80 text-gray-400 mt-20">
      {/* Top Banner */}
      <div className="border-b border-gray-900 bg-gradient-to-r from-emerald-950/40 via-gray-950 to-emerald-950/40 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-sm font-semibold text-gray-200">
              Roblox Game Status: <span className="text-emerald-400 font-mono">ONLINE ({config.stats.onlineNow} Playing)</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/codes"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-600/40 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Key className="w-3.5 h-3.5" />
              Check Active Codes (3 Active)
            </Link>
            <a
              href={`https://www.roblox.com/games/${config.game.robloxId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 text-xs font-bold transition-all flex items-center gap-1.5"
            >
              Play on Roblox <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-emerald-400" />
              <span className="font-extrabold text-white text-lg tracking-tight">
                99 NIGHTS WIKI
              </span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              The premier unofficial wiki and strategy database for {config.game.name} on Roblox. Updated daily with verified codes, tier lists, and calculators.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-[11px] font-mono text-emerald-400">
              <span>Database Version: {config.game.currentVersion}</span>
            </div>
          </div>

          {/* Quick Hub Tools */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono text-emerald-400">
              Interactive Tools
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/calculator" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-emerald-400" />
                  Night Survival Calculator
                </Link>
              </li>
              <li>
                <Link href="/codes" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-emerald-400" />
                  Active Redeem Codes 2026
                </Link>
              </li>
              <li>
                <Link href="/class-tier-list" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <Swords className="w-3.5 h-3.5 text-emerald-400" />
                  Class Tier List & Stats
                </Link>
              </li>
            </ul>
          </div>

          {/* Survival Guides */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono text-emerald-400">
              Survival Guides
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/entity-guide" className="hover:text-emerald-400 transition-colors">
                  Entity & Monster Database
                </Link>
              </li>
              <li>
                <Link href="/diamonds-guide" className="hover:text-emerald-400 transition-colors">
                  Diamond Earning & Spending Guide
                </Link>
              </li>
              <li>
                <Link href="/flame-guide" className="hover:text-emerald-400 transition-colors">
                  Campfire Flame Combination Guide
                </Link>
              </li>
              <li>
                <Link href="/beginner-guide" className="hover:text-emerald-400 transition-colors">
                  Beginner Survival Roadmap (Day 1-99)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & About */}
          <div>
            <h3 className="font-bold text-white text-sm mb-4 uppercase tracking-wider font-mono text-emerald-400">
              Legal & Info
            </h3>
            <ul className="space-y-2.5 text-xs mb-4">
              <li>
                <Link href="/about" className="hover:text-emerald-400 transition-colors">
                  About Us & Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="p-3 rounded-xl bg-gray-900/60 border border-gray-800/80 text-[11px] text-gray-400 leading-normal">
              <Shield className="w-3.5 h-3.5 text-emerald-500 inline mr-1" />
              Not affiliated with, endorsed by, or sponsored by Roblox Corporation or {config.game.developer}. All game trademarks belong to their respective owners.
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} 99 Nights in the Forest Wiki. Built for Roblox Survival Gamers.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" /> by 99 Nights Wiki Team
          </p>
        </div>
      </div>
    </footer>
  );
}
