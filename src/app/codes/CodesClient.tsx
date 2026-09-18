'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Check, 
  Copy, 
  Sparkles, 
  Search, 
  AlertCircle, 
  Gift, 
  HelpCircle,
  Clock,
  CheckCircle2
} from 'lucide-react';
import codesData from '@/data/codes.json';

import AuthorCard from '@/components/AuthorCard';

export default function CodesClient() {
  const [filter, setFilter] = useState<'all' | 'active' | 'expired'>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const filteredCodes = codesData.filter((c) => {
    const matchesFilter = filter === 'all' || c.status === filter;
    const matchesSearch =
      c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.reward.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const activeCount = codesData.filter((c) => c.status === 'active').length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Toast Notification */}
      {copiedCode && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-400 animate-in slide-in-from-bottom duration-200">
          <CheckCircle2 className="w-5 h-5 text-white" />
          <div>
            <p className="font-bold text-sm font-mono">Code Copied!</p>
            <p className="text-xs text-emerald-100">&quot;{copiedCode}&quot; copied to clipboard</p>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          99 Nights in the Forest <span className="text-emerald-400">Codes</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Get free Diamonds, Flames, and exclusive rewards. All 3 working codes were re-tested on — every reward below shows the exact amount you receive.
        </p>
      </div>

      {/* Active Code Highlights Bar */}
      <div className="glass-panel p-6 rounded-2xl mb-10 border border-emerald-500/40 shadow-glow flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
            <Gift className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h3 className="font-bold text-white text-base">Active Redeem Codes</h3>
            <p className="text-xs text-gray-300">
              There are currently <span className="text-emerald-400 font-bold">{activeCount} active working codes</span> available right now — more than Beebom or Try Hard Guides list, and we still include the secret
              <span className="text-amber-300 font-bold"> yay fishing </span> chat code most outlets leave out.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400 bg-gray-950 px-4 py-2 rounded-xl border border-gray-800">
          <Clock className="w-4 h-4 text-emerald-400" /> Last Checked: <span className="text-white"></span>
        </div>
      </div>

      {/* Controls & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        
        {/* Status Filter Tabs */}
        <div className="flex items-center p-1 bg-gray-900/80 border border-gray-800 rounded-xl w-full sm:w-auto">
          {(['active', 'all', 'expired'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab === 'active' ? `Active (${activeCount})` : tab}
            </button>
          ))}
        </div>

        {/* Search Field */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search codes or rewards..."
            className="w-full pl-10 pr-4 py-2 bg-gray-900/80 border border-gray-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors font-medium"
          />
        </div>

      </div>

      {/* Codes Table Grid */}
      <div className="space-y-4 mb-16">
        {filteredCodes.map((item) => {
          const isActive = item.status === 'active';
          const isCopied = copiedCode === item.code;

          return (
            <div
              key={item.code}
              className={`glass-card p-5 border transition-all ${
                isActive
                  ? 'border-emerald-800/40 hover:border-emerald-500/60'
                  : 'border-gray-800/60 opacity-60'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Code & Reward */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-extrabold text-lg sm:text-xl text-white tracking-wider bg-gray-950 px-3 py-1 rounded-lg border border-gray-800">
                      {item.code}
                    </span>
                    {isActive ? (
                      <span className="badge-active">
                        <Sparkles className="w-3 h-3 text-emerald-400" /> Active
                      </span>
                    ) : (
                      <span className="badge-expired">Expired</span>
                    )}
                    {item.isNew && (
                      <span className="badge-new">NEW</span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-emerald-400" /> {item.reward}
                  </p>
                  {'specialNote' in item && item.specialNote && (
                    <p className="text-xs text-amber-300/90 bg-amber-950/40 px-3 py-1 rounded-md border border-amber-800/40 flex items-center gap-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400" /> {item.specialNote}
                    </p>
                  )}
                </div>

                {/* Copy Action Button */}
                {isActive && (
                  <button
                    onClick={() => handleCopy(item.code)}
                    className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-500 text-white shadow-glow'
                        : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm hover:shadow-glow'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-4 h-4" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" /> Copy Code
                      </>
                    )}
                  </button>
                )}

              </div>
            </div>
          );
        })}

        {filteredCodes.length === 0 && (
          <div className="glass-card p-12 text-center text-gray-400">
            <AlertCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <p className="font-bold text-base text-white">No codes matching your search filter.</p>
            <button
              onClick={() => { setFilter('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-emerald-400 underline font-mono cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* How to Redeem Step-by-Step Guide */}
      <div className="glass-card p-8 border border-emerald-800/30">
        <h2 className="section-title">
          <HelpCircle className="w-6 h-6 text-emerald-400" />
          How to Redeem Codes in 99 Nights in the Forest
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <div className="bg-gray-950/80 p-5 rounded-xl border border-gray-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center font-mono text-sm mb-3">
              1
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Launch Roblox Game</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Open 99 Nights in the Forest on Roblox and join a lobby or start a solo game.
            </p>
          </div>

          <div className="bg-gray-950/80 p-5 rounded-xl border border-gray-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center font-mono text-sm mb-3">
              2
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Open the Currency Shop</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Stay in the main lobby, click the <strong>Diamond icon</strong> in the bottom-left corner (or talk to the currency NPC), then press the <strong>Codes</strong> button in the bottom-right of the shop.
            </p>
          </div>

          <div className="bg-gray-950/80 p-5 rounded-xl border border-gray-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center font-mono text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Submit Code &amp; Claim</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Paste a code into the field and press <strong>Submit</strong>. Codes are not case-sensitive, but the spelling and spaces must be exact, and each code works once per account.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="glass-card p-8 border border-emerald-800/30 mt-8">
        <h2 className="section-title">
          <HelpCircle className="w-6 h-6 text-emerald-400" />
          99 Nights in the Forest Codes FAQ
        </h2>
        <div className="mt-6 space-y-5">
          <div>
            <h3 className="font-bold text-white text-sm mb-1.5">How do I redeem codes in 99 Nights in the Forest?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Launch the game and stay in the main lobby. Open the <strong>Currency Shop</strong> by clicking the Diamond icon in the bottom-left corner (or by talking to the currency NPC), then press the <strong>Codes</strong> button in the bottom-right of the shop, type your code and hit <strong>Submit</strong>. The <em>yay fishing</em> code is the exception — that one is typed into the in-game chat while you are fishing.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-1.5">Why isn&apos;t my 99 Nights code working?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Four usual reasons: a typo (the spelling and spaces must be exact, though codes are <strong>not</strong> case-sensitive), the wrong redemption method (<em>yay fishing</em> only works as a chat code while fishing), the code was already claimed once on that account, or the code has expired. If it still fails, leave the game and rejoin a fresh server.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-1.5">How many 99 Nights in the Forest codes are active right now?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Three: <strong>forestwakesup26</strong> (15 Diamonds + 3 random Flames), <strong>afterparty</strong> (15 Diamonds) and the secret chat code <strong>yay fishing</strong> (2 Diamonds) — 32 Diamonds and 3 Flames in total. That is one more working code than most major outlets list, who usually only report the first two.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white text-sm mb-1.5">When do new 99 Nights in the Forest codes come out?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              New codes are tied to major updates and events rather than a fixed schedule — roughly every few months. They appear first in the official 99 Nights in the Forest Discord server, and sometimes on the developer <strong>Grandma&apos;s Favourite Studio</strong> social accounts. We re-verify this page whenever a code drops.
            </p>
          </div>
        </div>
      </div>

      {/* Related Guides */}
      <div className="glass-card p-6 border border-emerald-800/30 mt-6">
        <h3 className="font-bold text-white text-sm mb-3">Keep Surviving</h3>
        <div className="flex flex-wrap gap-3 text-xs font-mono">
          <Link href="/calculator/" className="px-4 py-2 rounded-xl border border-emerald-800/50 text-gray-300 hover:text-white hover:border-emerald-500 transition-colors">
            Night Survival Calculator
          </Link>
          <Link href="/class-tier-list/" className="px-4 py-2 rounded-xl border border-emerald-800/50 text-gray-300 hover:text-white hover:border-emerald-500 transition-colors">
            Class Tier List
          </Link>
          <Link href="/diamonds-guide/" className="px-4 py-2 rounded-xl border border-emerald-800/50 text-gray-300 hover:text-white hover:border-emerald-500 transition-colors">
            How to Farm Diamonds
          </Link>
          <Link href="/flame-guide/" className="px-4 py-2 rounded-xl border border-emerald-800/50 text-gray-300 hover:text-white hover:border-emerald-500 transition-colors">
            Flames Guide
          </Link>
        </div>
      </div>

      <AuthorCard />

    </div>
  );
}
