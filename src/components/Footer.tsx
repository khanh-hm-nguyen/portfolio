import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer id="contact" className="py-20 border-t transition-colors duration-300 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* 1. Call to Action Header */}
        <div className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Ready to Collaborate?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I am currently available for internships and junior positions. 
            If you are looking for a dedicated Java developer to join your team, let's get in touch.
          </p>
        </div>
        
        {/* 2. Contact Links (Adaptive Cards) */}
        <div className="flex flex-wrap justify-center gap-5 mb-16">
          
          {/* Email Button */}
          <a 
            href={`mailto:${personal.email}`} 
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1
              bg-white border border-slate-200 text-slate-700 hover:border-teal-500 hover:text-teal-600
              dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
          >
            <div className="p-2 rounded-lg transition-colors bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white">
              <Email fontSize="small" /> 
            </div>
            <span className="font-semibold">Email Me</span>
          </a>
          
          {/* LinkedIn Button */}
          <a 
            href={personal.linkedinUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1
              bg-white border border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600
              dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:text-blue-400"
          >
            <div className="p-2 rounded-lg transition-colors bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white">
              <LinkedIn fontSize="small" />
            </div>
            <span className="font-semibold">LinkedIn</span>
          </a>
          
          {/* GitHub Button (Adaptive Black/White) */}
          <a 
            href={personal.githubUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1
              bg-white border border-slate-200 text-slate-700 hover:border-black hover:text-black
              dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
          >
            <div className="p-2 rounded-lg transition-colors 
              bg-slate-100 text-slate-700 group-hover:bg-black group-hover:text-white
              dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-white dark:group-hover:text-black"
            >
              <GitHub fontSize="small" />
            </div>
            <span className="font-semibold">GitHub</span>
          </a>
        </div>
        
        {/* 3. Footer Bottom / Copyright */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-slate-800 dark:text-slate-200 font-semibold">Next.js</span> & <span className="text-teal-600 dark:text-teal-400 font-semibold">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;