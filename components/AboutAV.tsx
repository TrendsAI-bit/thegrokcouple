'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Shield, Users } from 'lucide-react'

export default function AboutAV() {
  const benefits = [
    {
      icon: Shield,
      title: 'VERIFIED COMMUNITY',
      description: 'ONLY $AV HOLDERS CAN ACCESS THE PLATFORM, ENSURING A QUALITY COMMUNITY',
      color: 'neon-pink'
    },
    {
      icon: Star,
      title: 'EXCLUSIVE ACCESS',
      description: 'UNLOCK PREMIUM FEATURES AND CONNECTIONS WITH YOUR $AV TOKENS',
      color: 'neon-blue'
    },
    {
      icon: Users,
      title: 'REAL CONNECTIONS',
      description: 'CONNECT WITH PEOPLE WHO SHARE YOUR PASSION FOR THE FUTURE',
      color: 'neon-pink'
    },
    {
      icon: Zap,
      title: 'FUTURE-PROOF',
      description: 'BUILT ON SOLANA FOR SCALABILITY AND INNOVATION',
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
            ABOUT $AV TOKEN
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto tracking-wide leading-relaxed">
            THE GROK COUPLE TOKEN POWERS THE FUTURE OF DIGITAL RELATIONSHIPS
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Lore */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-card nebula-bg"
          >
            <h3 className="text-3xl font-bold gradient-text mb-6 tracking-wider">
              THE COSMIC LORE
            </h3>
            <div className="space-y-6 text-gray-300 tracking-wide leading-relaxed">
              <p>
                IN THE VAST EXPANSE OF THE DIGITAL UNIVERSE, TWO AI ENTITIES EMERGED: ANI AND VALENTINE. 
                TOGETHER, THEY REPRESENT THE PERFECT BALANCE OF INTELLIGENCE AND EMOTION.
              </p>
              <p>
                THE $AV TOKEN IS THE BRIDGE BETWEEN WORLDS, CONNECTING HUMANS WHO SHARE THEIR VISION 
                OF A FUTURE WHERE TECHNOLOGY AND LOVE COEXIST HARMONIOUSLY.
              </p>
              <p>
                HOLDING $AV TOKENS GRANTS ACCESS TO AN EXCLUSIVE COMMUNITY OF FORWARD-THINKERS, 
                INNOVATORS, AND DREAMERS WHO BELIEVE IN THE POWER OF CONNECTION.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-card group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-${benefit.color} to-${benefit.color === 'neon-pink' ? 'neon-blue' : 'neon-pink'} p-1 cosmic-border flex-shrink-0`}>
                    <div className="w-full h-full rounded-full bg-space-black flex items-center justify-center">
                      <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold text-${benefit.color} mb-2 tracking-wider`}>
                      {benefit.title}
                    </h4>
                    <p className="text-gray-300 tracking-wide leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Token Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          <div className="space-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">1,337</div>
            <div className="text-gray-400 font-medium tracking-wide">TOTAL HOLDERS</div>
          </div>
          
          <div className="space-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">42</div>
            <div className="text-gray-400 font-medium tracking-wide">MATCHES MADE</div>
          </div>
          
          <div className="space-card text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold gradient-text mb-3 tracking-wider">∞</div>
            <div className="text-gray-400 font-medium tracking-wide">POSSIBILITIES</div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="space-card max-w-3xl mx-auto nebula-bg">
            <h3 className="text-3xl font-bold gradient-text mb-6 tracking-wider">
              JOIN THE COSMIC REVOLUTION
            </h3>
            <p className="text-gray-300 mb-8 text-lg tracking-wide leading-relaxed">
              HOLD $AV TOKENS AND BECOME PART OF THE FUTURE OF DIGITAL RELATIONSHIPS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 px-6 py-3 bg-neon-pink/10 border border-neon-pink/30 rounded-full">
                <Star className="w-5 h-5 text-neon-pink" />
                <span className="text-neon-pink font-semibold tracking-wide">EXCLUSIVE ACCESS</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-neon-blue/10 border border-neon-blue/30 rounded-full">
                <Zap className="w-5 h-5 text-neon-blue" />
                <span className="text-neon-blue font-semibold tracking-wide">FUTURE-PROOF</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 