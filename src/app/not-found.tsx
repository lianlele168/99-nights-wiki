import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🌲</div>
        <h1 className="text-4xl font-bold text-white mb-3">Lost in the Forest?</h1>
        <p className="text-gray-400 mb-8">
          This page doesn&apos;t exist. The fog must have gotten to it.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="px-5 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors">
            🏠 Back to Home
          </Link>
          <Link href="/codes" className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700">
            🔑 View Codes
          </Link>
        </div>
      </div>
    </div>
  );
}
