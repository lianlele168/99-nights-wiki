import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-emerald-900/60 bg-emerald-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-emerald-500/20">
            NF
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">ForestSurvivor_99</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Night 99+ Clear
              </span>
            </div>
            <p className="text-xs text-emerald-300">
              Verified 99 Nights in the Forest Speedrunner & Defense Theorycrafter • 800+ In-Game Days Logged
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-emerald-300">
          <div className="flex items-center gap-1 bg-emerald-900/50 px-2.5 py-1 rounded-lg border border-emerald-800/40">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Updated: September 2026</span>
          </div>
          <div className="flex items-center gap-1 bg-emerald-900/50 px-2.5 py-1 rounded-lg border border-emerald-800/40">
            <UserCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Verified for Patch v1.6 (Night Terror)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-emerald-400/80 mt-3 pt-3 border-t border-emerald-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> Monster aggro radiuses, campfire fuel burn rates, and class turret DPS formulas were tested live through solo and 4-player Night 99 full clears.
      </p>
    </div>
  );
}
