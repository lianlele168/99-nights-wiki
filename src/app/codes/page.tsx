import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Codes (August 2026) — Free Diamonds & Rewards',
  description:
    'All working 99 Nights in the Forest codes for August 2026. Redeem free Diamonds, Flames, and exclusive event items. Updated daily with verified codes.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/codes/' },
};

export default function CodesPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: '99 Nights in the Forest Codes',
    description: 'Active redeem codes for 99 Nights in the Forest on Roblox.',
    url: 'https://99nights.robloxwikihub.com/codes',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CodesClient />
    </>
  );
}
