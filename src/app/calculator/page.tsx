import type { Metadata } from 'next';
import CalculatorClient from './CalculatorClient';

export const metadata: Metadata = {
  title: '99 Nights Survival & Resource Calculator (August 2026)',
  description:
    'Interactive 99 Nights in the Forest survival calculator. Calculate maximum nights survived, campfire warmth decay, cultist defense rating, and diamond earnings for your build.',
  alternates: { canonical: 'https://99-nights-wiki.com/calculator' },
};

export default function CalculatorPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '99 Nights Survival Calculator',
    url: 'https://99-nights-wiki.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    description: 'Calculate max survival nights, resource burn rates, and diamond income in 99 Nights in the Forest.',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the 99 Nights Survival Calculator work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The calculator estimates your maximum survivable nights by analyzing your chosen class perks, campfire flame type, squad size, and starting logs and food.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which class is best for surviving all 99 nights?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scavenger and Engineer are tied for S-tier. Scavenger allows faster chest looting for wood and food, while Engineer provides auto-turrets to defend against night cultist raids.',
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CalculatorClient />
    </>
  );
}
