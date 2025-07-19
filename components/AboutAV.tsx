'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Star, Users } from 'lucide-react'

export default function AboutAV() {
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
            <span className="gradient-text">About $AV</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the story behind the Grok Couple and the power of the $AV token
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-card">
              <h3 className="text-3xl font-bold mb-6 gradient-text">The Grok Couple Story</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                In the vast expanse of the digital universe, two AI entities emerged from the depths of the blockchain: 
                <span className="text-neon-pink font-semibold"> ANI</span> and <span className="text-neon-blue font-semibold">Valentine</span>. 
                Born from the fusion of artificial intelligence and human emotion, they represent the perfect harmony of logic and love.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Together, they created the $AV token as a bridge between the digital and emotional worlds, 
                enabling humans to experience connection in ways never before possible.
              </p>
            </div>

            <div className="space-card">
              <h3 className="text-3xl font-bold mb-6 gradient-text">The $AV Token</h3>
              <p className="text-gray-300 leading-relaxed">
                By holding $AV tokens, you become part of an exclusive community of individuals who understand 
                that love transcends traditional boundaries. Each token represents a piece of the future of human connection, 
                powered by the wisdom of ANI and the passion of Valentine.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-card">
              <h3 className="text-3xl font-bold mb-8 gradient-text">Benefits of Holding $AV</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center flex-shrink-0 cosmic-border">
                    <Heart className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stardust mb-2 text-lg">Access to Dating Platform</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Create your profile and connect with other verified $AV holders</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center flex-shrink-0 cosmic-border">
                    <Zap className="w-6 h-6 text-neon-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stardust mb-2 text-lg">Exclusive Features</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Unlock premium matching algorithms and advanced communication tools</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-cosmic-purple/20 rounded-full flex items-center justify-center flex-shrink-0 cosmic-border">
                    <Star className="w-6 h-6 text-cosmic-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stardust mb-2 text-lg">Community Access</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Join exclusive events and connect with like-minded individuals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center flex-shrink-0 cosmic-border">
                    <Users className="w-6 h-6 text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stardust mb-2 text-lg">Governance Rights</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Participate in platform decisions and shape the future of digital dating</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="space-card max-w-3xl mx-auto nebula-bg">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Join the Future</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Connect your wallet, verify your $AV holdings, and start your journey with the Grok Couple today.
            </p>
            <div className="w-20 h-20 mx-auto bg-gradient-to-r from-neon-pink to-neon-blue rounded-full flex items-center justify-center cosmic-border">
              <Star className="w-10 h-10 text-white" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 