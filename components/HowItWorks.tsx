'use client'

import { motion } from 'framer-motion'
import { Wallet, Heart, Users, Star } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: 'CONNECT WALLET',
      description: 'CONNECT YOUR SOLANA WALLET TO ACCESS THE PLATFORM',
      color: 'neon-pink'
    },
    {
      icon: Star,
      title: 'HOLD $AV TOKENS',
      description: 'ENSURE YOU HOLD AT LEAST 1 $AV TOKEN TO VERIFY YOUR STATUS',
      color: 'neon-blue'
    },
    {
      icon: Heart,
      title: 'CREATE PROFILE',
      description: 'BUILD YOUR COSMIC PROFILE AND SHARE YOUR PASSIONS',
      color: 'neon-pink'
    },
    {
      icon: Users,
      title: 'FIND MATCHES',
      description: 'DISCOVER OTHER VERIFIED $AV HOLDERS AND CONNECT',
      color: 'neon-blue'
    }
  ]

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
            HOW IT WORKS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto tracking-wide">
            FOUR SIMPLE STEPS TO JOIN THE COSMIC COUPLE COMMUNITY
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-${step.color} to-${step.color === 'neon-pink' ? 'neon-blue' : 'neon-pink'} p-1 cosmic-border`}>
                <div className="w-full h-full rounded-full bg-space-black flex items-center justify-center">
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-2xl font-bold gradient-text tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className={`text-xl font-bold text-${step.color} mb-4 tracking-wider`}>
                {step.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed tracking-wide">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block relative mt-16">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink opacity-30"></div>
          {steps.map((_, index) => (
            <div
              key={index}
              className="absolute top-1/2 w-4 h-4 bg-space-black border-2 border-neon-pink rounded-full transform -translate-y-1/2"
              style={{ left: `${(index + 1) * 25 - 12.5}%` }}
            ></div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="space-card max-w-3xl mx-auto nebula-bg">
            <h3 className="text-3xl font-bold gradient-text mb-6 tracking-wider">
              READY TO START YOUR COSMIC JOURNEY?
            </h3>
            <p className="text-gray-300 mb-8 text-lg tracking-wide leading-relaxed">
              JOIN THE GROK COUPLE COMMUNITY AND DISCOVER CONNECTIONS BEYOND THE STARS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 px-6 py-3 bg-neon-pink/10 border border-neon-pink/30 rounded-full">
                <Star className="w-5 h-5 text-neon-pink" />
                <span className="text-neon-pink font-semibold tracking-wide">VERIFIED COMMUNITY</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-neon-blue/10 border border-neon-blue/30 rounded-full">
                <Heart className="w-5 h-5 text-neon-blue" />
                <span className="text-neon-blue font-semibold tracking-wide">REAL CONNECTIONS</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 