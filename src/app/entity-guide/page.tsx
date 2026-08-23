import type { Metadata } from 'next';
import EntityClient from './EntityClient';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Entity & Monster Database (2026)',
  description:
    'Full entity guide for 99 Nights in the Forest. The Deer, The Owl, Cultist King, Wolves, Bears, and all immortal monsters with spawn behaviors and survival tactics.',
  alternates: { canonical: 'https://99-nights-wiki.com/entity-guide' },
};

export default function EntityGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '99 Nights in the Forest Entities',
    description: 'Monster and entity database for 99 Nights in the Forest.',
    url: 'https://99-nights-wiki.com/entity-guide',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EntityClient />
    </>
  );
}
