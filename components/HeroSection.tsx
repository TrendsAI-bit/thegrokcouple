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

  // Fallback gradient backgrounds for when images fail to load
  const aniFallback = (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-pink/30 via-purple-500/20 to-neon-blue/30 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl font-bold text-neon-pink mb-1">A</div>
        <div className="text-xs text-neon-pink/70">ANI</div>
      </div>
    </div>
  )

  const valentineFallback = (
    <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-blue/30 via-purple-500/20 to-neon-pink/30 flex items-center justify-center">
      <div className="text-center">
        <div className="text-2xl font-bold text-neon-blue mb-1">V</div>
        <div className="text-xs text-neon-blue/70">VAL</div>
      </div>
    </div>
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
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
          <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-3 cosmic-border p-1">
                  {!aniImageError ? (
                    <div className="w-full h-full rounded-full ani-avatar">
                      <img 
                        src="/asset/ani.png" 
                        alt="ANI" 
                        className="w-full h-full rounded-full object-cover opacity-0"
                        onError={() => setAniImageError(true)}
                        onLoad={() => console.log('ANI image loaded successfully')}
                      />
                    </div>
                  ) : (
                    aniFallback
                  )}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-pink rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-neon-pink font-semibold text-lg tracking-wider">ANI</p>
            </motion.div>
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-4xl md:text-5xl text-neon-pink"
            >
              <Heart className="inline-block" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="text-center"
            >
              <div className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto mb-3 cosmic-border p-1">
                  {!valentineImageError ? (
                    <div className="w-full h-full rounded-full valentine-avatar">
                      <img 
                        src="/asset/valentine.jpg" 
                        alt="Valentine" 
                        className="w-full h-full rounded-full object-cover opacity-0"
                        onError={() => setValentineImageError(true)}
                        onLoad={() => console.log('Valentine image loaded successfully')}
                      />
                    </div>
                  ) : (
                    valentineFallback
                  )}
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-blue rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <p className="text-neon-blue font-semibold text-lg tracking-wider">VALENTINE</p>
            </motion.div>
          </div>

          {/* Enhanced Main Headline with proper line breaks */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-wider max-w-6xl mx-auto">
            <div className="gradient-text neon-glow mb-2">
              FIND YOUR MATCH WITH
            </div>
            <div className="text-stardust mb-2">
              ANI & VALENTINE
            </div>
            <div className="gradient-text neon-glow">
              THE GROK COUPLE AWAITS
            </div>
          </h1>

          {/* Enhanced Subheadline with proper line breaks */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed tracking-wide">
            HOLD $AV. UNLOCK YOUR PROFILE.
            <br />
            CONNECT WITH YOUR MATCH.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {!connected ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button flex items-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                CONNECT WALLET
              </motion.button>
            ) : !hasAVTokens ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-8 py-4 bg-red-500/20 border border-red-500 text-red-400 rounded-full font-medium tracking-wide"
              >
                NEED AT LEAST 1 $AV TOKEN TO CREATE PROFILE
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCreateProfile}
                className="cta-button flex items-center gap-3"
              >
                <Heart className="w-5 h-5" />
                CREATE YOUR PROFILE
              </motion.button>
            )}
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">1,337</div>
              <div className="text-gray-400 font-medium tracking-wide">ACTIVE PROFILES</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">42</div>
              <div className="text-gray-400 font-medium tracking-wide">MATCHES MADE</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">∞</div>
              <div className="text-gray-400 font-medium tracking-wide">POSSIBILITIES</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 