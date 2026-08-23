'use client';

import { useState } from 'react';
import { 
  Key, 
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/60 text-xs font-semibold text-emerald-300 mb-4 shadow-glow">
          <Key className="w-4 h-4 text-emerald-400" />
          Verified Active · August 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          99 Nights in the Forest <span className="text-emerald-400">Codes</span>
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Get free Diamonds, Flames, and exclusive rewards. Redeem working codes before they expire. Updated daily!
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
              There are currently <span className="text-emerald-400 font-bold">{activeCount} active working codes</span> available right now.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-gray-400 bg-gray-950 px-4 py-2 rounded-xl border border-gray-800">
          <Clock className="w-4 h-4 text-emerald-400" /> Last Checked: <span className="text-white">Today</span>
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
            <h3 className="font-bold text-white text-sm mb-1">Open Codes / Chat Menu</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Click the Twitter / Codes icon on the left of your screen (or open global chat for special chat codes).
            </p>
          </div>

          <div className="bg-gray-950/80 p-5 rounded-xl border border-gray-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold flex items-center justify-center font-mono text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Paste Code & Claim</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Copy a code from our wiki above, paste it into the input box, and press Redeem to get free Diamonds!
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
