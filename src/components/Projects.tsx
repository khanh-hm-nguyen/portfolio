"use client";

import {
  GitHub,
  OpenInNew,
  Code,
  Storage,
  Web,
  Cloud,
  Public,
  Dns,
} from "@mui/icons-material";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { projectThemes } from "@/data/theme";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface Deployment {
  frontend: string;
  backend: string;
  database: string;
}

interface Project {
  title: string;
  image?: string;
  description: string;
  category: string;
  tags: string[];
  repoLink: string;
  demoLink?: string;
  deployment?: Deployment;
}
const Projects = () => {
  const lang = useSelector((state: RootState) => state.language.current);

  const currentData = portfolioData[lang];

  return (
    <section
      id="projects"
      className="py-24 max-w-6xl mx-auto px-6 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold tracking-wider uppercase text-xs">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            {lang === "en" ? "My Work" : "Dự án"}
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {lang === "en" ? "Featured Projects" : "Dự án Tiêu biểu"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {lang === "en"
              ? "A selection of projects demonstrating full-stack capabilities, focusing on performance and scalability."
              : "Tuyển tập các dự án thể hiện khả năng full-stack, tập trung vào hiệu suất và khả năng mở rộng."}
          </p>
        </div>

        <Link
          href={currentData.personal.githubUrl}
          target="_blank"
          className="group flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:opacity-90 transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-slate-900/20 dark:shadow-none"
        >
          {lang === "en" ? "View GitHub" : "Xem GitHub"}{" "}
          <GitHub
            fontSize="small"
            className="group-hover:rotate-12 transition-transform"
          />
        </Link>
      </div>

      <div className="space-y-20">
        {currentData.projects.map((project: Project, index: number) => {
          const theme = projectThemes[index % projectThemes.length];
          const isJava =
            project.category.includes("Java") ||
            project.category.includes("Backend");

          return (
            <div
              key={index}
              className={`group relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 ${theme.border} ${theme.shadow} hover:-translate-y-1`}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Visual Side (Left) */}
                <div className="w-full lg:w-2/5 relative min-h-[280px] lg:min-h-full overflow-hidden flex items-center justify-center bg-slate-100 dark:bg-slate-950">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  {/* Logic to show Image or Icon */}
                  {project.image ? (
                    <div className="relative w-full h-full p-4 lg:p-6 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={800}
                        className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                      <div
                        className={`relative z-10 p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                      >
                        {isJava ? (
                          <Storage className={`!text-6xl ${theme.text}`} />
                        ) : project.category.includes("Front") ? (
                          <Web className={`!text-6xl ${theme.text}`} />
                        ) : (
                          <Code className={`!text-6xl ${theme.text}`} />
                        )}
                      </div>
                    </>
                  )}
                </div>

                <div className="flex-1 p-8 md:p-10 flex flex-col relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <div
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-3 ${theme.bgLight} ${theme.bgDark} ${theme.text}`}
                      >
                        {project.category}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex gap-3 shrink-0">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          title="Live Demo"
                          className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-white transition-all duration-300 ${theme.button}`}
                        >
                          <OpenInNew fontSize="small" />
                        </a>
                      )}
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        title="View Code"
                        className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-700 text-white hover:bg-black dark:hover:bg-slate-600 transition-colors shadow-lg shadow-slate-900/20"
                      >
                        <GitHub fontSize="small" />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6 flex-grow">
                    {project.description}
                  </p>

                  {project.deployment && (
                    <div className="mb-8 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        Infrastructure & Deployment
                      </h4>
                      <div className="grid gap-3">
                        <div className="flex items-start gap-3">
                          <Public
                            fontSize="small"
                            className="text-teal-500 mt-0.5"
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              Frontend
                            </span>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {project.deployment.frontend}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Cloud
                            fontSize="small"
                            className="text-blue-500 mt-0.5"
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              Backend API
                            </span>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {project.deployment.backend}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Dns
                            fontSize="small"
                            className="text-emerald-500 mt-0.5"
                          />
                          <div>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                              Database
                            </span>
                            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {project.deployment.database}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Technologies
                    </h4>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 text-xs font-semibold rounded-md border transition-colors cursor-default ${theme.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
