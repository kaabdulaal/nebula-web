import { DownloadButton } from '@/components/DownloadButton'
import { FeatureCard } from '@/components/FeatureCard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-indigo-600 rounded-full">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold mb-4">
            Nebula
          </h1>
          
          <p className="text-2xl text-slate-300 mb-8">
            Secure Distributed Cloud Storage on Telegram
          </p>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            Store unlimited files with military-grade encryption. Your data, encrypted on your device, 
            distributed across Telegram channels. Zero-knowledge architecture ensures only you can access your files.
          </p>
          
          <DownloadButton />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Why Nebula?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🔒"
            title="Zero-Knowledge Encryption"
            description="AES-256-GCM encryption happens on your device. Your password never leaves your phone."
          />
          
          <FeatureCard
            icon="☁️"
            title="Unlimited Storage"
            description="Leverage Telegram's infrastructure. No storage limits, no monthly fees."
          />
          
          <FeatureCard
            icon="⚡"
            title="Smart Chunking"
            description="Files automatically split into 1.9GB encrypted chunks for optimal performance."
          />
          
          <FeatureCard
            icon="📱"
            title="Cross-Platform"
            description="Available on Android, iOS (coming soon), and desktop (coming soon)."
          />
          
          <FeatureCard
            icon="🔄"
            title="Resume Support"
            description="Pause and resume uploads/downloads. Network issues won't interrupt your transfers."
          />
          
          <FeatureCard
            icon="🛡️"
            title="Privacy First"
            description="No tracking, no analytics, no backdoors. Your data belongs to you."
          />
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Connect to Telegram</h3>
              <p className="text-slate-400">
                Log in with your Telegram account. Nebula creates a private channel for your encrypted files.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Upload & Encrypt</h3>
              <p className="text-slate-400">
                Select files to upload. Nebula encrypts them on your device, splits into chunks, and uploads to your private channel.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Access Anywhere</h3>
              <p className="text-slate-400">
                Download and decrypt your files on any device. The virtual file system syncs across all your devices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2026 Nebula Project. Open Source. MIT License.</p>
          <div className="mt-4 space-x-6">
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Documentation</a>
            <a href="#" className="hover:text-white transition">Discord</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
