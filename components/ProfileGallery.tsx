'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, User, Star } from 'lucide-react'
import { Profile } from '@/types/profile'

interface ProfileGalleryProps {
  profiles: Profile[]
  connected: boolean
  hasAVTokens: boolean
  onCreateProfile: () => void
}

export default function ProfileGallery({ profiles, connected, hasAVTokens, onCreateProfile }: ProfileGalleryProps) {
  if (!connected) {
    return (
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-card max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">🔐</div>
            <h2 className="text-3xl font-bold gradient-text mb-4 tracking-wider">CONNECT YOUR WALLET</h2>
            <p className="text-gray-300 mb-8 text-lg tracking-wide">
              CONNECT YOUR WALLET TO VIEW VERIFIED PROFILES AND START YOUR JOURNEY
            </p>
            <div className="text-2xl font-bold gradient-text">JOIN THE COSMIC COMMUNITY</div>
          </motion.div>
        </div>
      </section>
    )
  }

  if (!hasAVTokens) {
    return (
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-card max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">💎</div>
            <h2 className="text-3xl font-bold gradient-text mb-4 tracking-wider">HOLD $AV TOKENS</h2>
            <p className="text-gray-300 mb-8 text-lg tracking-wide">
              YOU NEED TO HOLD AT LEAST 1 $AV TOKEN TO ACCESS VERIFIED PROFILES
            </p>
            <div className="text-2xl font-bold gradient-text">UNLOCK THE UNIVERSE</div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 tracking-wider">
            VERIFIED PROFILES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            DISCOVER OTHER $AV HOLDERS WHO SHARE YOUR PASSION FOR THE FUTURE
          </p>
        </motion.div>

        {profiles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-card max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">🌟</div>
            <h3 className="text-2xl font-bold gradient-text mb-4 tracking-wider">BE THE FIRST</h3>
            <p className="text-gray-300 mb-8 tracking-wide">
              NO PROFILES YET. CREATE YOURS AND START THE COSMIC JOURNEY
            </p>
            <button
              onClick={onCreateProfile}
              className="cta-button flex items-center gap-3 mx-auto"
            >
              <User className="w-5 h-5" />
              CREATE PROFILE
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-card group hover:scale-105 transition-all duration-300"
              >
                {/* Profile Image Placeholder */}
                <div className="w-full h-48 rounded-lg mb-6 cosmic-border p-1">
                  <div className="w-full h-full rounded-lg bg-gradient-to-br from-neon-pink/20 via-purple-500/10 to-neon-blue/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold gradient-text mb-2">
                        {profile.name.charAt(0)}
                      </div>
                      <div className="text-sm text-gray-400 tracking-wide">
                        PROFILE IMAGE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-stardust tracking-wider">
                      {profile.name}
                    </h3>
                    <div className="flex items-center gap-1 text-neon-pink">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">VERIFIED</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {profile.bio}
                  </p>

                  {/* Interests */}
                  <div>
                    <h4 className="text-neon-blue font-semibold mb-3 tracking-wide">INTERESTS</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink rounded-full text-sm font-medium tracking-wide"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-neon-pink/30 text-neon-pink rounded-lg hover:bg-neon-pink/10 transition-colors duration-300 tracking-wide">
                      <Heart className="w-4 h-4" />
                      <span className="font-medium">LIKE</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-neon-blue/30 text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-colors duration-300 tracking-wide">
                      <MessageCircle className="w-4 h-4" />
                      <span className="font-medium">MESSAGE</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Create Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="space-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4 tracking-wider">
              READY TO JOIN THE COSMIC COUPLE?
            </h3>
            <p className="text-gray-300 mb-6 tracking-wide">
              CREATE YOUR PROFILE AND CONNECT WITH OTHER $AV HOLDERS
            </p>
            <button
              onClick={onCreateProfile}
              className="cta-button flex items-center gap-3 mx-auto"
            >
              <User className="w-5 h-5" />
              CREATE YOUR PROFILE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 