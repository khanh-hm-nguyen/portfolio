import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Contribute?</h2>
        <p className="text-lg text-slate-400 mb-8">
          I am currently looking for an Internship opportunity where I can apply my Java/Spring Boot skills 
          and learn from a professional team.
        </p>
        
        <div className="flex justify-center gap-6">
          <a href={`mailto:${personal.email}`} className="flex items-center gap-2 hover:text-white transition">
            <Email fontSize="medium" /> Email
          </a>
          <a href={personal.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <LinkedIn fontSize="medium" /> LinkedIn
          </a>
          <a href={personal.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
            <GitHub fontSize="medium" /> GitHub
          </a>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
          © {new Date().getFullYear()} Developed by {personal.name}
        </div>
      </div>
    </footer>
  )
}

export default Footer