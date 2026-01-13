import { GitHub } from '@mui/icons-material';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <header id="about" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            {personal.availability}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            {personal.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
              {personal.subtitle}
            </span>
          </h1>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-7 py-3.5 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition shadow-lg shadow-teal-200">
              View My Projects
            </a>
            <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="px-7 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition flex items-center gap-2">
              <GitHub fontSize="small" /> GitHub
            </a>
          </div>
        </div>
        
        {/* Visual Content (Code Block) - Updated Colors */}
        <div className="w-full md:w-1/3 aspect-square relative hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-emerald-500 rounded-3xl rotate-6 opacity-20 blur-xl"></div>
          <div className="relative h-full w-full bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-2xl flex flex-col justify-center">
             {/* Decorative Code Snippet */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-300">Developer</span> <span className="text-purple-400">implements</span> <span className="text-yellow-300">Intern</span> {'{'}</p>
                <p className="pl-4">String[] skills = {'{'}</p>
                <p className="pl-8 text-emerald-400">"Java", "Spring Boot",</p>
                <p className="pl-8 text-emerald-400">"React", "Next.js"</p>
                <p className="pl-4">{'};'}</p>
                <p className="pl-4 text-slate-500">// Ready to deploy</p>
                <p className="pl-4"><span className="text-blue-400">public void</span> <span className="text-yellow-300">hireMe</span>() {'{'}</p>
                <p className="pl-8">System.out.println(<span className="text-emerald-400">"Let's build!"</span>);</p>
                <p className="pl-4">{'}'}</p>
                <p>{'}'}</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Hero