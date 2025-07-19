'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Upload, User, Heart } from 'lucide-react'
import { Profile } from '@/types/profile'

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (profileData: Omit<Profile, 'id' | 'walletAddress' | 'createdAt'>) => void
  userProfile: Profile | null
}

export default function ProfileModal({ isOpen, onClose, onSubmit, userProfile }: ProfileModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    interests: [] as string[],
    profileImage: ''
  })
  const [newInterest, setNewInterest] = useState('')

  useEffect(() => {
    if (userProfile) {
      setFormData({
        name: userProfile.name,
        bio: userProfile.bio,
        interests: userProfile.interests,
        profileImage: userProfile.profileImage
      })
    }
  }, [userProfile])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name.trim() && formData.bio.trim()) {
      onSubmit(formData)
    }
  }

  const addInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }))
      setNewInterest('')
    }
  }

  const removeInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          profileImage: e.target?.result as string
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-galaxy-gray rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold gradient-text">
                {userProfile ? 'Edit Profile' : 'Create Your Profile'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Image */}
              <div className="text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-neon-pink to-neon-blue p-1">
                    <div className="w-full h-full rounded-full bg-galaxy-gray flex items-center justify-center">
                      {formData.profileImage ? (
                        <img
                          src={formData.profileImage}
                          alt="Profile"
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <User className="w-16 h-16 text-gray-400" />
                      )}
                    </div>
                  </div>
                  <label className="absolute bottom-0 right-0 bg-neon-pink p-2 rounded-full cursor-pointer hover:bg-neon-pink/80 transition-colors">
                    <Upload className="w-4 h-4 text-white" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-stardust mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-stardust placeholder-gray-400 focus:outline-none focus:border-neon-pink transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-semibold text-stardust mb-2">
                  Bio *
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-stardust placeholder-gray-400 focus:outline-none focus:border-neon-pink transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                  rows={4}
                  required
                />
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-semibold text-stardust mb-2">
                  Interests
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-stardust placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
                    placeholder="Add an interest"
                  />
                  <button
                    type="button"
                    onClick={addInterest}
                    className="px-4 py-2 bg-neon-blue/20 border border-neon-blue/30 rounded-lg text-neon-blue hover:bg-neon-blue/30 transition-colors"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neon-pink/10 border border-neon-pink/20 rounded-full text-sm text-neon-pink flex items-center gap-2"
                    >
                      {interest}
                      <button
                        type="button"
                        onClick={() => removeInterest(interest)}
                        className="hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-white/20 rounded-lg text-stardust hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-pink/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  {userProfile ? 'Update Profile' : 'Create Profile'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 