import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — 99 Nights in the Forest Wiki',
  description: 'About the unofficial 99 Nights in the Forest wiki — your source for codes, guides, and tier lists.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-6">About 99 Nights in the Forest Wiki</h1>
      <div className="glass-card p-6 space-y-4 text-gray-300 text-sm leading-relaxed">
        <p>
          99 Nights in the Forest Wiki is an unofficial, community-run resource for the popular Roblox
          game <em>99 Nights in the Forest</em> by Grandma&apos;s Favorite Games.
        </p>
        <p>
          Our goal is to provide the most accurate and up-to-date guides, codes, class tier lists,
          entity information, and survival tips to help players of all skill levels survive all 99 nights.
        </p>
        <p>
          This site is not affiliated with Roblox Corporation or the developers of 99 Nights in the Forest.
          All game content, characters, and mechanics belong to their respective owners.
        </p>
        <p>
          If you notice incorrect information or want to contribute, the game&apos;s Discord server
          is the best place to get the latest official updates.
        </p>
      </div>
    </div>
  );
}
