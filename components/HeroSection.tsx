'use client'

import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, User } from 'lucide-react'
import { useState } from 'react'

interface HeroSectionProps {
  connected: boolean
  hasAVTokens: boolean
  onCreateProfile: () => void
}

export default function HeroSection({ connected, hasAVTokens, onCreateProfile }: HeroSectionProps) {
  const [aniImageError, setAniImageError] = useState(false)
  const [valentineImageError, setValentineImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Enhanced cosmic background */}
      <div className="absolute inset-0 nebula-bg" />
      <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 via-transparent to-neon-blue/5" />
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ANI & Valentine Avatars with enhanced styling */}
          <div className="flex justify-center items-center space-x-12 mb-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-28 h-28 rounded-full mx-auto mb-3 cosmic-border p-1">
                  {!aniImageError ? (
                    <img 
                      src="/asset/ani.png" 
                      alt="ANI" 
                      className="w-full h-full rounded-full object-cover"
                      onError={() => setAniImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 flex items-center justify-center">
                      <User className="w-12 h-12 text-neon-pink" />
                    </div>
                  )}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-pink rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-neon-pink font-semibold text-lg">ANI</p>
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl text-neon-pink"
            >
              <Heart className="inline-block" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-28 h-28 rounded-full mx-auto mb-3 cosmic-border p-1">
                  {!valentineImageError ? (
                    <img 
                      src="/asset/valentine.jpg" 
                      alt="Valentine" 
                      className="w-full h-full rounded-full object-cover"
                      onError={() => setValentineImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 flex items-center justify-center">
                      <User className="w-12 h-12 text-neon-blue" />
                    </div>
                  )}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-neon-blue font-semibold text-lg">Valentine</p>
            </motion.div>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="gradient-text neon-glow">
              Find Your Match With
            </span>
            <br />
            <span className="text-stardust">
              ANI & Valentine
            </span>
            <br />
            <span className="gradient-text neon-glow">
              The Grok Couple Awaits
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Hold $AV. Unlock Your Profile. Connect With Your Match.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {!connected ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 cosmic-border"
              >
                <Sparkles className="inline-block mr-3" />
                Connect Wallet
              </motion.button>
            ) : !hasAVTokens ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-8 py-4 bg-red-500/20 border border-red-500 text-red-400 rounded-full"
              >
                Need at least 1 $AV token to create profile
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCreateProfile}
                className="px-10 py-5 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold rounded-full text-lg hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 cosmic-border"
              >
                <Heart className="inline-block mr-3" />
                Create Your Profile
              </motion.button>
            )}
          </div>

          {/* Enhanced Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3">1,337</div>
              <div className="text-gray-400 font-medium">Active Profiles</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3">42</div>
              <div className="text-gray-400 font-medium">Matches Made</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3">∞</div>
              <div className="text-gray-400 font-medium">Possibilities</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 