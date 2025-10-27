'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Package, Users, Star } from 'lucide-react'
import Image from 'next/image'

const iconMap = {
  TrendingUp,
  Package,
  Users,
  Star
}

interface Stat {
  icon: string
  label: string
  value: string
  change?: string
}

interface Product {
  name: string
  image: string
}

interface CaseStudyProps {
  game: string
  website?: string
  tagline: string
  description: string
  stats: Stat[]
  products: Product[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  accentColor: string
  background: string
}

export default function CaseStudy({
  game,
  website,
  tagline,
  description,
  stats,
  products,
  testimonial,
}: CaseStudyProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Dot grid pattern - alternating sides */}
      <div className="absolute left-0 top-1/3 w-1/4 h-1/3 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-40 right-32 w-48 h-48 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-32 left-20 w-2 h-40 bg-iv-pink-500/10"></div>

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 left-8 w-px h-12 bg-white/10"></div>
      <div className="absolute top-8 right-8 w-12 h-px bg-white/10"></div>
      <div className="absolute top-8 right-8 w-px h-12 bg-white/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header with Case Study label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-start gap-12 mb-8">
            <div className="text-8xl font-light text-white/5 leading-none">04</div>
            <div className="flex-1 pt-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-6"
              >
                <div className="w-1.5 h-1.5 bg-iv-pink-500 rounded-full"></div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                  Case Study
                </span>
              </motion.div>

              <div className="flex items-center gap-6 mb-6">
                <h2 className="text-5xl lg:text-7xl font-light text-white tracking-wide uppercase">{game}</h2>
                {website && (
                  <motion.a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-white/70">Visit Store</span>
                    <svg className="w-3 h-3 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </motion.a>
                )}
              </div>

              <div className="flex items-start gap-6">
                <div className="w-1 h-16 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
                <p className="text-xl text-white/50 font-light max-w-3xl">
                  {tagline}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats grid - enhanced layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={index}
                className="relative bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Top left corner bracket */}
                <div className="absolute top-2 left-2 w-3 h-px bg-iv-pink-500/40"></div>
                <div className="absolute top-2 left-2 w-px h-3 bg-iv-pink-500/40"></div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-2 right-2 w-3 h-px bg-white/10"></div>
                <div className="absolute bottom-2 right-2 w-px h-3 bg-white/10"></div>

                <div className="mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <Icon size={18} className="text-white/50" />
                  </div>
                </div>
                <div className="text-3xl font-light text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 mb-2">{stat.label}</div>
                {stat.change && (
                  <div className="text-xs text-white/40">
                    {stat.change}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Description & Testimonial */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light text-white mb-6 tracking-wide">THE CHALLENGE</h3>
            <p className="text-lg text-white/60 leading-relaxed font-light">{description}</p>
          </motion.div>

          {testimonial && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-white/[0.02] border border-white/10 p-8"
            >
              {/* Top left corner bracket */}
              <div className="absolute top-3 left-3 w-4 h-px bg-iv-pink-500/40"></div>
              <div className="absolute top-3 left-3 w-px h-4 bg-iv-pink-500/40"></div>

              {/* Bottom right corner bracket */}
              <div className="absolute bottom-3 right-3 w-4 h-px bg-white/10"></div>
              <div className="absolute bottom-3 right-3 w-px h-4 bg-white/10"></div>

              <div className="text-4xl text-iv-pink-500/20 mb-4 font-serif">"</div>
              <p className="text-lg text-white/80 italic mb-6 font-light leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-1 h-12 bg-iv-pink-500"></div>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Products - clean showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-light text-white mb-12 tracking-wide uppercase">Featured Products</h3>
          
          {/* Main products */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {products.slice(0, 2).map((product, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {/* Top left corner bracket */}
                <div className="absolute top-3 left-3 w-4 h-px bg-iv-pink-500/40"></div>
                <div className="absolute top-3 left-3 w-px h-4 bg-iv-pink-500/40"></div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-3 right-3 w-4 h-px bg-white/10"></div>
                <div className="absolute bottom-3 right-3 w-px h-4 bg-white/10"></div>

                <div className="aspect-[4/3] bg-white/[0.02] mb-6 overflow-hidden relative">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package size={48} className="text-white/20" />
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-iv-pink-500"></div>
                  <h4 className="text-lg font-medium text-white">{product.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supporting products */}
          {products.length > 2 && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(2).map((product, index) => (
                <motion.div
                  key={index + 2}
                  className="group relative bg-white/[0.02] border border-white/10 p-4 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {/* Top left corner bracket */}
                  <div className="absolute top-2 left-2 w-3 h-px bg-iv-pink-500/40"></div>
                  <div className="absolute top-2 left-2 w-px h-3 bg-iv-pink-500/40"></div>

                  {/* Bottom right corner bracket */}
                  <div className="absolute bottom-2 right-2 w-3 h-px bg-white/10"></div>
                  <div className="absolute bottom-2 right-2 w-px h-3 bg-white/10"></div>

                  <div className="aspect-square bg-white/[0.02] mb-4 overflow-hidden relative">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package size={32} className="text-white/20" />
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-white text-sm">{product.name}</h4>
                </motion.div>
              ))}
            </div>
          )}
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