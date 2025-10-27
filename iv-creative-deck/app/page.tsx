import Hero from '@/components/hero/Hero'
import Operations from '@/components/operations/Operations'
import Brands from '@/components/brands/Brands'
import CaseStudy from '@/components/case-studies/CaseStudy'
import Dashboard from '@/components/dashboard/Dashboard'
import StoreShowcase from '@/components/store-showcase/StoreShowcase'
import { caseStudies } from '@/data/caseStudies'

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Global subtle background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc=')] opacity-20 pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Hero />
        
        <div className="h-px bg-white/10" />
        <Operations />

        <div className="h-px bg-white/10" />
        <Brands />

        <div className="h-px bg-white/10" />
        {caseStudies.map((study, index) => (
          <div key={study.game}>
            <CaseStudy {...study} />
            {index < caseStudies.length - 1 && (
              <div className="h-px bg-white/5" />
            )}
          </div>
        ))}
        
        <div className="h-px bg-white/10" />
        <Dashboard />
        
        <div className="h-px bg-white/10" />
        <StoreShowcase />
      </div>
    </main>
  )
}