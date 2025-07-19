'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Star, User } from 'lucide-react'
import { Profile } from '@/types/profile'

interface ProfileGalleryProps {
  profiles: Profile[]
  connected: boolean
  hasAVTokens: boolean
  onCreateProfile: () => void
}

export default function ProfileGallery({ profiles, connected, hasAVTokens, onCreateProfile }: ProfileGalleryProps) {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Profile Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover other verified $AV holders and find your perfect match
          </p>
          
          {connected && hasAVTokens && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onCreateProfile}
              className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 cosmic-border"
            >
              <Heart className="inline-block mr-3" />
              Create Your Profile
            </motion.button>
          )}
        </motion.div>

        {profiles.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full flex items-center justify-center cosmic-border">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Be the First to Join</h3>
            <p className="text-gray-400 mb-10 text-lg max-w-2xl mx-auto">
              Connect your wallet and create your profile to start the journey
            </p>
            {connected && hasAVTokens && (
              <button
                onClick={onCreateProfile}
                className="px-8 py-4 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 cosmic-border"
              >
                Create Profile
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-card group hover:scale-105 transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="w-full h-56 rounded-lg overflow-hidden bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 p-1 cosmic-border">
                    {profile.profileImage && profile.profileImage !== '/api/placeholder/150/150' ? (
                      <img
                        src={profile.profileImage}
                        alt={profile.name}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <div className={`w-full h-full rounded-lg bg-galaxy-gray flex items-center justify-center ${profile.profileImage && profile.profileImage !== '/api/placeholder/150/150' ? 'hidden' : ''}`}>
                      <div className="text-center">
                        <User className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gray-300">{profile.name.charAt(0)}</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-neon-pink/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-neon-pink cosmic-border">
                    <Star className="inline-block w-4 h-4 mr-1" />
                    Verified
                  </div>
                </div>

                {/* Profile Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-stardust mb-3">{profile.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{profile.bio}</p>
                  </div>

                  {/* Interests */}
                  <div>
                    <h4 className="text-sm font-semibold text-neon-blue mb-3">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-neon-pink/10 border border-neon-pink/20 rounded-full text-xs text-neon-pink"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon-pink/10 border border-neon-pink/20 rounded-lg text-neon-pink hover:bg-neon-pink/20 transition-colors duration-300">
                      <Heart className="w-4 h-4" />
                      Like
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neon-blue/10 border border-neon-blue/20 rounded-lg text-neon-blue hover:bg-neon-blue/20 transition-colors duration-300">
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 