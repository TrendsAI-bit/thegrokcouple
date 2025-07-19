'use client'

import { motion } from 'framer-motion'
import { Wallet, User, Users, Zap } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: 'Hold $AV token',
      description: 'Ensure you have at least 1 $AV token in your wallet to access the platform.',
      color: 'text-neon-pink'
    },
    {
      icon: User,
      title: 'Connect wallet & verify',
      description: 'Connect your Solana wallet and verify your $AV token holdings.',
      color: 'text-neon-blue'
    },
    {
      icon: User,
      title: 'Create your profile',
      description: 'Set up your dating profile with name, bio, interests, and profile image.',
      color: 'text-cosmic-purple'
    },
    {
      icon: Users,
      title: 'Browse other holders & say hello',
      description: 'Discover other verified $AV holders and start meaningful connections.',
      color: 'text-neon-pink'
    }
  ]

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
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join the future of dating powered by blockchain technology and the Grok Couple
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-card text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-neon-pink to-neon-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cosmic-border p-1`}>
                  <div className="w-full h-full rounded-full bg-galaxy-gray flex items-center justify-center">
                    <step.icon className={`w-10 h-10 text-white`} />
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center text-sm font-bold cosmic-border">
                  {index + 1}
                </div>
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${step.color}`}>
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Connection Lines */}
        <div className="hidden lg:block relative mt-20">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-pink via-neon-blue to-neon-pink opacity-30" />
          <div className="absolute top-1/2 left-1/4 w-0.5 h-12 bg-neon-pink opacity-50 transform -translate-y-6" />
          <div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-neon-blue opacity-50 transform -translate-y-6" />
          <div className="absolute top-1/2 left-3/4 w-0.5 h-12 bg-cosmic-purple opacity-50 transform -translate-y-6" />
        </div>
      </div>
    </section>
  )
} 