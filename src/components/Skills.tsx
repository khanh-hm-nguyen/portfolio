import { Storage, Layers, Memory } from '@mui/icons-material'; // Import specific MUI icons
import { SvgIconComponent } from '@mui/icons-material';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, SvgIconComponent> = {
  Storage: Storage,
  Layers: Layers,
  Memory: Memory
};

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Proficiency</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Focused on Backend stability with a solid understanding of Frontend requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup) => {
            const Icon = iconMap[skillGroup.icon];
            
            return (
              <div key={skillGroup.category} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition group">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition duration-300">
                  {Icon && <Icon fontSize="medium" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills