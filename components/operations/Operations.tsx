'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone, ShoppingBag, Palette, Truck } from 'lucide-react'

export default function Operations() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      title: 'ATTRACT',
      subtitle: 'Digital Marketing',
      icon: Megaphone,
      items: [
        'Content creation',
        'Social media marketing',
        'SEO optimization',
        'PPC campaigns'
      ]
    },
    {
      title: 'CONVERT',
      subtitle: 'Ecommerce',
      icon: ShoppingBag,
      items: [
        'Website development',
        'Mobile app development',
        'Social commerce',
        'Marketplace activation'
      ]
    },
    {
      title: 'CREATE',
      subtitle: 'Design & Production',
      icon: Palette,
      items: [
        'Digital print',
        'Branded merchandise',
        'Custom designs',
        'Premium packaging'
      ]
    },
    {
      title: 'DELIVER',
      subtitle: 'Operations',
      icon: Truck,
      items: [
        'Global distribution',
        'B2B fulfillment',
        'Customer service',
        'Returns management'
      ]
    }
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Dot grid pattern - left side */}
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-20 right-20 w-40 h-40 border border-white/5 rotate-45"></div>
      <div className="absolute bottom-40 left-20 w-2 h-40 bg-iv-pink-500/10"></div>

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
            <div className="text-8xl font-light text-white/5 leading-none">02</div>
            <div className="flex-1 pt-4">
              <h2 className="text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide uppercase">
                END-TO-END
              </h2>
              <div className="flex items-start gap-6">
                <div className="w-1 h-16 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
                <p className="text-xl text-white/50 font-light max-w-2xl">
                  Complete merchandise ecosystem from concept to customer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual flow timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mb-20 relative"
        >
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-white/60 text-sm font-light">0{index + 1}</span>
                </div>
                {/* Title */}
                <div className="px-4 py-2 bg-white text-black font-medium text-sm tracking-wider mb-2">
                  {service.title}
                </div>
                <div className="text-xs text-white/40">{service.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service cards - creative grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                {/* Card with corner accents */}
                <div className="relative bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300 h-full">
                  {/* Top left corner bracket */}
                  <div className="absolute top-3 left-3 w-4 h-px bg-iv-pink-500/40"></div>
                  <div className="absolute top-3 left-3 w-px h-4 bg-iv-pink-500/40"></div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-xs text-white/30">0{index + 1}</span>
                  </div>

                  {/* Icon with background */}
                  <div className="mb-8 relative">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white/70" />
                    </div>
                  </div>

                  {/* Title with accent */}
                  <div className="mb-6">
                    <h3 className="text-xl font-medium text-white mb-1 tracking-wide">
                      {service.title}
                    </h3>
                    <div className="w-8 h-px bg-iv-pink-500"></div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-white/40 mb-8 font-light">
                    {service.subtitle}
                  </p>

                  {/* Items list */}
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-center text-white/60 text-sm font-light"
                      >
                        <div className="w-1.5 h-px bg-white/30 mr-3 flex-shrink-0"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Bottom right corner bracket */}
                  <div className="absolute bottom-3 right-3 w-4 h-px bg-white/10"></div>
                  <div className="absolute bottom-3 right-3 w-px h-4 bg-white/10"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
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