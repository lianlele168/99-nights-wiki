import type { Metadata } from 'next';
import ClassTierClient from './ClassTierClient';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Class Tier List 2026 — Best Classes Ranked',
  description:
    'Comprehensive class tier list for 99 Nights in the Forest. Scavenger, Engineer, Cyborg, Assassin, Big Game Hunter ranked with stats, perks, and unlock costs.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/class-tier-list/' },
};

export default function ClassTierListPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '99 Nights in the Forest Class Tier List',
    description: 'Ranked list of best survival classes in 99 Nights in the Forest.',
    url: 'https://99nights.robloxwikihub.com/class-tier-list',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClassTierClient />
    </>
  );
}
