import type { Metadata } from 'next';
import CodesClient from './CodesClient';

export const metadata: Metadata = {
  title: '99 Nights in the Forest Codes — Free Diamonds & Rewards',
  description:
    'All 3 working 99 Nights in the Forest codes for,  verified on September 18. Redeem free Diamonds and random Flames, plus the secret yay fishing chat code.',
  alternates: { canonical: 'https://99nights.robloxwikihub.com/codes/' },
};

export default function CodesPage() {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: '99 Nights in the Forest Codes',
      description: 'Active redeem codes for 99 Nights in the Forest on Roblox.',
      url: 'https://99nights.robloxwikihub.com/codes',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I redeem codes in 99 Nights in the Forest?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Launch 99 Nights in the Forest and stay in the main lobby, open the Currency Shop by clicking the Diamond icon in the bottom-left corner (or talk to the currency NPC), press the Codes button in the bottom-right of the shop, enter your code and hit Submit. The yay fishing code is the exception — it must be typed into the in-game chat while you are fishing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my 99 Nights in the Forest code not working?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Four usual reasons: a typo (spelling and spaces must be exact, though codes are not case-sensitive), the wrong redemption method (yay fishing only works as a chat code while fishing), the code was already claimed once on that account, or the code has expired. If it still fails, leave the game and rejoin a new server.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many 99 Nights in the Forest codes are active right now?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'There are 3 active codes: forestwakesup26 (15 Diamonds + 3 random Flames), afterparty (15 Diamonds) and the secret chat code yay fishing (2 Diamonds). That is more working codes than most major outlets list, who usually report only two.',
          },
        },
        {
          '@type': 'Question',
          name: 'When do new 99 Nights in the Forest codes come out?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'New codes are tied to major game updates and events rather than a fixed schedule — roughly every few months. They usually appear first in the official 99 Nights in the Forest Discord server, and sometimes on the developer Grandma\u2019s Favourite Studio social accounts. This page is re-verified whenever a code drops.',
          },
        },
      ],
    },
  ];

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
