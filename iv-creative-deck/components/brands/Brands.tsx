'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

interface Brand {
  name: string
  logo: string
}

interface BrandsProps {
  brands?: Brand[]
}

export default function Brands({ brands = [] }: BrandsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Default placeholder brands if none provided
  const displayBrands = brands.length > 0 ? brands : [
    { name: 'Activision', logo: '/brands/activision.png' },
    { name: 'Codemasters', logo: '/brands/codemasters.png' },
    { name: 'Netflix', logo: '/brands/netflix.png' },
    { name: 'Ubisoft', logo: '/brands/ubisoft.png' },
    { name: 'Enshrouded', logo: '/brands/enshrouded.png' },
    { name: 'Wobbly Life', logo: '/brands/wobblylife.png' },
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Dot grid pattern - right side */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-32 left-20 w-32 h-32 border border-white/5 rounded-full"></div>
      <div className="absolute bottom-20 right-32 w-2 h-48 bg-iv-pink-500/10"></div>

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
            <div className="text-8xl font-light text-white/5 leading-none">03</div>
            <div className="flex-1 pt-4">
              <h2 className="text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide uppercase">
                OUR PARTNERS
              </h2>
              <div className="flex items-start gap-6">
                <div className="w-1 h-16 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
                <p className="text-xl text-white/50 font-light max-w-2xl">
                  Trusted by leading game studios worldwide to power their merchandise operations
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brands grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {displayBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              {/* Brand card */}
              <div className="relative aspect-square bg-white/[0.02] border border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 flex items-center justify-center p-6">
                {/* Top left corner bracket */}
                <div className="absolute top-2 left-2 w-3 h-px bg-iv-pink-500/40"></div>
                <div className="absolute top-2 left-2 w-px h-3 bg-iv-pink-500/40"></div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-2 right-2 w-3 h-px bg-white/10"></div>
                <div className="absolute bottom-2 right-2 w-px h-3 bg-white/10"></div>

                {/* Brand logo */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain p-2 opacity-60 group-hover:opacity-100 transition-opacity filter brightness-0 invert"
                    onError={(e) => {
                      // Fallback to text if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const fallback = target.parentElement?.querySelector('.fallback-text')
                      if (fallback) (fallback as HTMLElement).style.display = 'block'
                    }}
                  />
                  <div className="fallback-text hidden text-white/30 text-xs text-center font-light">
                    {brand.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats or tagline below brands */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/[0.02] border border-white/10">
            <div className="w-2 h-2 bg-iv-pink-500 rounded-full"></div>
            <span className="text-white/50 text-sm font-light">
              Powering merchandise for 50+ game studios globally
            </span>
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
