import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — 99 Nights in the Forest Wiki',
  description: 'Privacy policy for 99 Nights in the Forest Wiki.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <div className="glass-card p-6 space-y-5 text-gray-300 text-sm leading-relaxed">
        <p>Last updated: August 23, 2026</p>
        <section>
          <h2 className="text-white font-semibold mb-2">Information We Collect</h2>
          <p>
            This website does not collect any personal information. We do not require account
            registration, login, or any form of personal data submission.
          </p>
        </section>
        <section>
          <h2 className="text-white font-semibold mb-2">Analytics</h2>
          <p>
            We may use privacy-respecting analytics tools to understand site traffic and improve
            our content. These tools do not store personally identifiable information.
          </p>
        </section>
        <section>
          <h2 className="text-white font-semibold mb-2">Third Party Links</h2>
          <p>
            This site contains links to external websites (such as Roblox). We are not responsible
            for the privacy practices or content of those sites.
          </p>
        </section>
        <section>
          <h2 className="text-white font-semibold mb-2">Cookies</h2>
          <p>
            This site uses minimal functional cookies only (e.g., for copy-to-clipboard functionality).
            No tracking cookies are used.
          </p>
        </section>
        <section>
          <h2 className="text-white font-semibold mb-2">Disclaimer</h2>
          <p>
            99 Nights in the Forest Wiki is an unofficial fan site. It is not affiliated with
            Roblox Corporation or Grandma&apos;s Favorite Games. All trademarks belong to their
            respective owners.
          </p>
        </section>
      </div>
    </div>
  );
}
