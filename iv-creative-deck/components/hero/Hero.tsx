'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden">
      {/* Dot grid pattern - right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-1/4 right-20 w-64 h-64 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-1/3 left-20 w-2 h-48 bg-iv-pink-500/10"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 border border-white/5 rotate-45"></div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 left-8 w-px h-12 bg-white/10"></div>
      <div className="absolute top-8 right-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 right-8 w-px h-12 bg-white/10"></div>

      {/* Header - top left */}
      <motion.header
        className="absolute top-12 left-12 flex items-center gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image src="/logo.png" alt="IV Creative" width={28} height={28} />
        <span className="text-sm font-medium text-white/90 tracking-wider uppercase">IV CREATIVE</span>
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
        <div className="flex items-start gap-12">
          {/* Section number */}
          <motion.div
            className="text-9xl font-light text-white/5 leading-none"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            01
          </motion.div>

          {/* Content */}
          <div className="flex-1 pt-8">
            <motion.h1
              className="text-6xl lg:text-8xl xl:text-9xl font-light leading-[0.9] mb-8 text-white tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block mb-3">GAMING</span>
              <span className="block mb-3">MERCH</span>
              <span className="block text-white/20 text-5xl lg:text-6xl xl:text-7xl">
                REVENUE ENGINE
              </span>
            </motion.h1>

            <motion.div
              className="flex items-start gap-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-1 h-20 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                Zero upfront costs. Complete fulfillment. Pure revenue sharing.
              </p>
            </motion.div>

            {/* Key stats inline */}
            <motion.div
              className="mt-16 flex items-center gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div>
                <div className="text-3xl font-light text-white mb-1">$430K+</div>
                <div className="text-sm text-white/40">Generated</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-3xl font-light text-white mb-1">25K+</div>
                <div className="text-sm text-white/40">Products</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <div className="text-3xl font-light text-white mb-1">48hrs</div>
                <div className="text-sm text-white/40">Launch Time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom metadata */}
      <motion.div
        className="absolute bottom-12 left-12 text-white/40 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="font-light">IV Creative — 2025</div>
      </motion.div>

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