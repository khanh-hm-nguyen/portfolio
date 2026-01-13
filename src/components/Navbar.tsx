import { Terminal } from '@mui/icons-material'
import { portfolioData } from '@/data/portfolio';

const Nabar = () => {
  return (
   <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-bold text-xl text-teal-700 tracking-tight flex items-center gap-2">
          <Terminal fontSize="medium" />
          <span>DevPortfolio</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {portfolioData.navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-teal-600 transition">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="px-4 py-2 bg-teal-600 text-white text-sm rounded-lg font-medium hover:bg-teal-700 transition shadow-md shadow-teal-200">
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Nabar