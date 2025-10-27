'use client'

import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, ShoppingBag, Users, Target, Award, Zap, Globe } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Dashboard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const heroMetrics = [
    { label: 'Total Revenue', value: '$430K+', subtext: 'Generated in 12 months', icon: DollarSign },
    { label: 'Products Delivered', value: '25,000+', subtext: 'Worldwide shipments', icon: ShoppingBag },
    { label: 'Avg. Order Value', value: '$52', subtext: '+18% vs industry', icon: TrendingUp },
    { label: 'Customer Rating', value: '4.8/5', subtext: '2,100+ reviews', icon: Award },
  ]

  const keyMetrics = [
    { label: 'Conversion Rate', value: '3.2%', change: '+127%', icon: Target },
    { label: 'Repeat Customers', value: '38%', change: '+210%', icon: Users },
    { label: 'Time to Market', value: '14 days', change: '-60%', icon: Zap },
    { label: 'Global Reach', value: '47 countries', change: '+100%', icon: Globe },
  ]

  const projects = [
    {
      name: 'Wobbly Life',
      revenue: '$250K',
      growth: '+340%',
      products: '12,500',
    },
    {
      name: 'Enshrouded',
      revenue: '$180K',
      growth: '+285%',
      products: '12,500',
    }
  ]

  return (
    <section ref={ref} className="relative py-40 bg-black overflow-hidden">
      {/* Dot grid pattern - right side */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      {/* Geometric accents */}
      <div className="absolute top-20 left-20 w-40 h-40 border border-white/5 rotate-45"></div>
      <div className="absolute bottom-40 right-32 w-2 h-48 bg-iv-pink-500/10"></div>

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
            <div className="text-8xl font-light text-white/5 leading-none">05</div>
            <div className="flex-1 pt-4">
              <h2 className="text-6xl lg:text-8xl font-light text-white mb-6 tracking-wide uppercase">
                The Numbers
              </h2>
              <div className="flex items-start gap-6">
                <div className="w-1 h-16 bg-iv-pink-500 flex-shrink-0 mt-2"></div>
                <p className="text-xl text-white/50 font-light max-w-2xl">
                  Real metrics. Real revenue. Real results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Metrics - enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {heroMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
            >
              {/* Top left corner bracket */}
              <div className="absolute top-2 left-2 w-3 h-px bg-iv-pink-500/40"></div>
              <div className="absolute top-2 left-2 w-px h-3 bg-iv-pink-500/40"></div>

              {/* Bottom right corner bracket */}
              <div className="absolute bottom-2 right-2 w-3 h-px bg-white/10"></div>
              <div className="absolute bottom-2 right-2 w-px h-3 bg-white/10"></div>

              <div className="mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-white/50" />
                </div>
              </div>
              <div className="text-3xl font-light text-white mb-3">{metric.value}</div>
              <div className="text-sm text-white/70 font-medium mb-1">{metric.label}</div>
              <div className="text-xs text-white/40">{metric.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Performance breakdown */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-light text-white mb-8 tracking-wide uppercase">Performance Metrics</h3>
            <div className="grid grid-cols-2 gap-6">
              {keyMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="relative bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                >
                  {/* Top left corner bracket */}
                  <div className="absolute top-2 left-2 w-3 h-px bg-iv-pink-500/40"></div>
                  <div className="absolute top-2 left-2 w-px h-3 bg-iv-pink-500/40"></div>

                  {/* Bottom right corner bracket */}
                  <div className="absolute bottom-2 right-2 w-3 h-px bg-white/10"></div>
                  <div className="absolute bottom-2 right-2 w-px h-3 bg-white/10"></div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <metric.icon className="w-4 h-4 text-white/50" />
                    </div>
                    <span className="text-sm text-white/50">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-light text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-white/40">{metric.change} vs industry</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative bg-white/[0.02] border border-white/10 p-8"
          >
            {/* Top left corner bracket */}
            <div className="absolute top-3 left-3 w-4 h-px bg-iv-pink-500/40"></div>
            <div className="absolute top-3 left-3 w-px h-4 bg-iv-pink-500/40"></div>

            {/* Bottom right corner bracket */}
            <div className="absolute bottom-3 right-3 w-4 h-px bg-white/10"></div>
            <div className="absolute bottom-3 right-3 w-px h-4 bg-white/10"></div>

            <h3 className="text-xl font-medium text-white mb-8 tracking-wide uppercase">Why We Win</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-px bg-iv-pink-500 mt-3 flex-shrink-0 w-4" />
                <span className="text-white/60 font-light leading-relaxed">Zero upfront costs for game studios</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-px bg-iv-pink-500 mt-3 flex-shrink-0 w-4" />
                <span className="text-white/60 font-light leading-relaxed">Full design-to-delivery handled</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-px bg-iv-pink-500 mt-3 flex-shrink-0 w-4" />
                <span className="text-white/60 font-light leading-relaxed">Revenue sharing model that scales</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-px bg-iv-pink-500 mt-3 flex-shrink-0 w-4" />
                <span className="text-white/60 font-light leading-relaxed">Global fulfillment network</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Project comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl font-light text-white mb-12 tracking-wide uppercase">Project Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                className="relative bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {/* Top left corner bracket */}
                <div className="absolute top-3 left-3 w-4 h-px bg-iv-pink-500/40"></div>
                <div className="absolute top-3 left-3 w-px h-4 bg-iv-pink-500/40"></div>

                {/* Bottom right corner bracket */}
                <div className="absolute bottom-3 right-3 w-4 h-px bg-white/10"></div>
                <div className="absolute bottom-3 right-3 w-px h-4 bg-white/10"></div>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-iv-pink-500 rounded-full" />
                    <h4 className="text-xl font-medium text-white">{project.name}</h4>
                  </div>
                  <span className="text-white/40 text-sm">{project.growth}</span>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-2xl font-light text-white mb-2">{project.revenue}</div>
                    <div className="text-sm text-white/40">Total Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-white mb-2">{project.products}</div>
                    <div className="text-sm text-white/40">Units Sold</div>
                  </div>
                </div>
              </motion.div>
            ))}
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