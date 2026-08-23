'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Flame, 
  Key, 
  ShieldAlert, 
  BookOpen, 
  Gem, 
  Calculator, 
  Swords, 
  Menu, 
  X, 
  Search,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import classesData from '@/data/classes.json';
import codesData from '@/data/codes.json';
import entitiesData from '@/data/entities.json';

const navItems = [
  { href: '/codes', label: 'Codes', icon: Key, badge: 'Active' },
  { href: '/calculator', label: 'Calculator', icon: Calculator, badge: 'New Tool' },
  { href: '/class-tier-list', label: 'Tier List', icon: Swords },
  { href: '/entity-guide', label: 'Entities', icon: ShieldAlert },
  { href: '/diamonds-guide', label: 'Diamonds', icon: Gem },
  { href: '/flame-guide', label: 'Flames', icon: Flame },
  { href: '/beginner-guide', label: 'Guide', icon: BookOpen },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Keyboard shortcut Ctrl+K / Cmd+K for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter search items
  const filteredCodes = searchQuery
    ? codesData.filter(c => c.code.toLowerCase().includes(searchQuery.toLowerCase()) || c.reward.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredClasses = searchQuery
    ? classesData.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const filteredEntities = searchQuery
    ? entitiesData.filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase()) || e.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <>
      <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur-md border-b border-emerald-900/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 p-0.5 shadow-glow flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-emerald-400 fill-emerald-500/20 group-hover:text-emerald-300 transition-colors animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg text-white tracking-tight group-hover:text-emerald-400 transition-colors flex items-center gap-1.5 leading-tight">
                  99 NIGHTS <span className="text-emerald-400 font-extrabold text-xs px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-800/60">WIKI</span>
                </span>
                <span className="text-[10px] text-emerald-400/80 tracking-widest font-mono font-bold">IN THE FOREST · 2026</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                      isActive
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50 shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-gray-900/60'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-600/40">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: Search Button & Mobile Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900/80 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800 text-xs transition-all cursor-pointer"
                title="Search Wiki (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline font-medium">Search Wiki...</span>
                <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-mono bg-gray-800 text-gray-400 rounded border border-gray-700">
                  ⌘K
                </kbd>
              </button>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 bg-gray-950/95 backdrop-blur-xl px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                    isActive
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50'
                      : 'text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-emerald-400" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-600/40">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-gray-950/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-gray-900 border border-emerald-800/50 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            {/* Modal Search Bar */}
            <div className="flex items-center px-4 border-b border-gray-800 bg-gray-950">
              <Search className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search active codes, classes, monsters, guides..."
                className="w-full px-4 py-4 bg-transparent text-white placeholder-gray-500 focus:outline-none text-base font-medium"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Results Body */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
              {!searchQuery && (
                <div className="text-center py-8 text-gray-400">
                  <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2 opacity-60" />
                  <p className="text-sm font-medium">Type a search term to find game items quickly.</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['FORESTWAKESUP26', 'Scavenger', 'The Deer', 'Diamonds', 'Campfire'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs font-mono text-emerald-300 rounded-lg border border-gray-700"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Codes Results */}
              {filteredCodes.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2">Active Codes</h4>
                  <div className="space-y-2">
                    {filteredCodes.map((c) => (
                      <Link
                        key={c.code}
                        href="/codes"
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-950/60 hover:bg-emerald-950/40 border border-gray-800 hover:border-emerald-700/50 transition-all group"
                      >
                        <div>
                          <span className="font-mono font-bold text-emerald-400 text-sm block">{c.code}</span>
                          <span className="text-xs text-gray-400">{c.reward}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Class Results */}
              {filteredClasses.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2">Classes</h4>
                  <div className="space-y-2">
                    {filteredClasses.map((cl) => (
                      <Link
                        key={cl.id}
                        href="/class-tier-list"
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-950/60 hover:bg-emerald-950/40 border border-gray-800 hover:border-emerald-700/50 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold tier-${cl.tier.toLowerCase()}`}>
                            {cl.tier} Tier
                          </span>
                          <div>
                            <span className="font-bold text-white text-sm block">{cl.name}</span>
                            <span className="text-xs text-gray-400 line-clamp-1">{cl.description}</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Entity Results */}
              {filteredEntities.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider mb-2">Entities & Monsters</h4>
                  <div className="space-y-2">
                    {filteredEntities.map((ent) => (
                      <Link
                        key={ent.id}
                        href="/entity-guide"
                        onClick={() => setSearchOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-950/60 hover:bg-emerald-950/40 border border-gray-800 hover:border-emerald-700/50 transition-all group"
                      >
                        <div>
                          <span className="font-bold text-white text-sm block">{ent.name}</span>
                          <span className="text-xs text-gray-400">{ent.category} · Threat: {ent.threat}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-emerald-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {searchQuery && filteredCodes.length === 0 && filteredClasses.length === 0 && filteredEntities.length === 0 && (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">No results found for &quot;{searchQuery}&quot;.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-gray-950 border-t border-gray-800 text-center text-xs text-gray-500 font-mono">
              Press <kbd className="px-1.5 py-0.5 bg-gray-800 rounded text-gray-400 border border-gray-700">ESC</kbd> to exit
            </div>
          </div>
        </div>
      )}
    </>
  );
}
