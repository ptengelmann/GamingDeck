'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function StoreShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stores = [
    {
      name: 'Enshrouded Store',
      description: 'Premium merchandise platform with real-time inventory sync',
      videoSrc: '/videos/ENVideo.mov',
    },
    {
      name: 'Wobbly Life Store', 
      description: 'Custom merchandise store with playful branding',
      videoSrc: '/videos/WLVideo.mov',
    }
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Dot grid pattern - left side */}
      <div className="absolute left-0 top-1/3 w-1/4 h-1/3 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-32 right-20 w-48 h-48 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-40 left-32 w-2 h-40 bg-iv-pink-500/10"></div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 left-8 w-px h-12 bg-white/10"></div>
      <div className="absolute top-8 right-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 right-8 w-px h-12 bg-white/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header with number */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-24"
        >
          <div className="flex items-start gap-12 mb-8">
            <div className="text-8xl font-light text-white/5 leading-none">06</div>
            <div className="flex-1 pt-4">
              <h2 className="text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide uppercase">
                Store Showcase
              </h2>
              <div className="flex items-start gap-6">
                <div className="w-1 h-16 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
                <p className="text-xl text-white/50 font-light max-w-2xl">
                  Custom-built merchandise platforms in action
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Store videos */}
        <div className="space-y-20">
          {stores.map((store, index) => (
            <motion.div
              key={store.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Store info */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 bg-iv-pink-500 rounded-full" />
                  <h3 className="text-2xl font-medium text-white tracking-wide">{store.name}</h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-px bg-iv-pink-500 mt-3"></div>
                  <p className="text-lg text-white/50 font-light max-w-2xl">{store.description}</p>
                </div>
              </div>

              {/* Video container */}
              <div className="relative aspect-video bg-white/[0.02] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Top left corner bracket */}
                <div className="absolute top-4 left-4 w-6 h-px bg-iv-pink-500/40 z-10"></div>
                <div className="absolute top-4 left-4 w-px h-6 bg-iv-pink-500/40 z-10"></div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-4 right-4 w-6 h-px bg-white/10 z-10"></div>
                <div className="absolute bottom-4 right-4 w-px h-6 bg-white/10 z-10"></div>

                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={store.videoSrc} type="video/mp4" />
                  <source src={store.videoSrc} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>

                {/* Clean play overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="relative max-w-3xl mx-auto bg-white/[0.02] border border-white/10 p-12">
            {/* Top left corner bracket */}
            <div className="absolute top-4 left-4 w-6 h-px bg-iv-pink-500/40"></div>
            <div className="absolute top-4 left-4 w-px h-6 bg-iv-pink-500/40"></div>

            {/* Bottom right corner bracket */}
            <div className="absolute bottom-4 right-4 w-6 h-px bg-white/10"></div>
            <div className="absolute bottom-4 right-4 w-px h-6 bg-white/10"></div>

            <h3 className="text-3xl font-light text-white mb-6 tracking-wide uppercase">Ready to Launch?</h3>
            <div className="flex justify-center mb-8">
              <div className="w-12 h-px bg-iv-pink-500"></div>
            </div>
            <p className="text-lg text-white/50 font-light mb-10">
              Get your custom store built and deployed in 48 hours
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-black font-medium hover:bg-white/90 transition-all duration-200"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Store
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Bottom corner brackets */}
      <div className="absolute bottom-8 left-8 w-12 h-px bg-white/10"></div>
      <div className="absolute bottom-8 left-8 w-px h-12 bg-white/10"></div>
      <div className="absolute bottom-8 right-8 w-12 h-px bg-white/10"></div>
      <div className="absolute bottom-8 right-8 w-px h-12 bg-white/10"></div>
    </section>
  )
}