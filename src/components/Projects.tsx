import { GitHub, OpenInNew, Code, Storage } from '@mui/icons-material';
import { portfolioData } from '@/data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Projects</h2>
      
      <div className="space-y-12">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-teal-300 transition-all hover:shadow-xl">
            {/* Background Icon Decoration */}
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition">
              {/* MUI Icons don't scale by size props the same way as Lucide, so we use className for massive sizing */}
              {project.category.includes("Java") ? 
                <Code className="!text-[120px]" /> : 
                <Storage className="!text-[120px]" />
              }
            </div>

            <div className="p-8 md:p-10 relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <p className="text-teal-600 font-medium mt-1">{project.category}</p>
                </div>
                
                <div className="flex gap-3">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition">
                      <OpenInNew fontSize="small" /> Live Demo
                    </a>
                  )}
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition">
                    <GitHub fontSize="small" /> Code
                  </a>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
                {project.description}
              </p>

              <div className="flex gap-3 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects