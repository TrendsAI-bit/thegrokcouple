'use client'

import { useState, useEffect } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { motion } from 'framer-motion'
import { Heart, Star, Users, Zap, Sparkles } from 'lucide-react'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import ProfileGallery from '@/components/ProfileGallery'
import AboutAV from '@/components/AboutAV'
import ProfileModal from '@/components/ProfileModal'
import { Profile } from '@/types/profile'

export default function Home() {
  const { publicKey, connected } = useWallet()
  const [hasAVTokens, setHasAVTokens] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [userProfile, setUserProfile] = useState<Profile | null>(null)

  // Mock AV token check - in real app, you'd check actual token balance
  useEffect(() => {
    if (connected && publicKey) {
      // Simulate token check - replace with actual token balance check
      setHasAVTokens(true)
    } else {
      setHasAVTokens(false)
    }
  }, [connected, publicKey])

  // Mock profiles data with no emojis and proper image handling
  useEffect(() => {
    const mockProfiles: Profile[] = [
      {
        id: '1',
        walletAddress: 'mock-wallet-1',
        name: 'Cosmic Explorer',
        bio: 'Looking for someone to explore the universe with. Passionate about space exploration and the mysteries of the cosmos.',
        interests: ['Space', 'Technology', 'Adventure'],
        profileImage: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        walletAddress: 'mock-wallet-2',
        name: 'Digital Dreamer',
        bio: 'Passionate about AI, blockchain, and the future of human connection. Building the next generation of digital relationships.',
        interests: ['AI', 'Blockchain', 'Innovation'],
        profileImage: '',
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        walletAddress: 'mock-wallet-3',
        name: 'Quantum Heart',
        bio: 'Seeking someone who understands the quantum nature of connection. Exploring the intersection of science and emotion.',
        interests: ['Science', 'Philosophy', 'Art'],
        profileImage: '',
        createdAt: new Date().toISOString(),
      },
    ]
    setProfiles(mockProfiles)
    console.log('Mock profiles loaded:', mockProfiles)
  }, [])

  const handleCreateProfile = (profileData: Omit<Profile, 'id' | 'walletAddress' | 'createdAt'>) => {
    if (publicKey) {
      const newProfile: Profile = {
        ...profileData,
        id: Date.now().toString(),
        walletAddress: publicKey.toString(),
        createdAt: new Date().toISOString(),
      }
      setUserProfile(newProfile)
      setProfiles(prev => [newProfile, ...prev])
      setShowProfileModal(false)
    }
  }

  return (
    <div className="min-h-screen bg-space-black relative overflow-x-hidden">
      {/* Floating Stars Background */}
      <div className="floating-stars">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="logo-container">
            <div className="logo-image">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Grok Couple Logo" 
                  fill
                  className="rounded-full object-cover"
                  onError={() => {
                    console.log('Logo image failed to load')
                  }}
                  onLoad={() => console.log('Logo image loaded successfully')}
                  unoptimized
                />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text tracking-wider">GROK COUPLE</span>
          </div>
          <div className="wallet-adapter-dropdown">
            <WalletMultiButton className="cta-button" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <HeroSection 
          connected={connected} 
          hasAVTokens={hasAVTokens}
          onCreateProfile={() => setShowProfileModal(true)}
        />
        
        <HowItWorks />
        
        {/* Always show ProfileGallery for demo purposes */}
        <ProfileGallery 
          profiles={profiles}
          connected={true} // Force connected for demo
          hasAVTokens={true} // Force hasAVTokens for demo
          onCreateProfile={() => setShowProfileModal(true)}
        />
        
        <AboutAV />
      </main>

      {/* Profile Creation Modal */}
      {showProfileModal && (
        <ProfileModal
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onSubmit={handleCreateProfile}
          userProfile={userProfile}
        />
      )}
    </div>
  )
} 