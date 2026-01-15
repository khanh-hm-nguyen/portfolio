"use client";

import { GitHub } from "@mui/icons-material";
import { portfolioData } from "@/data/portfolio";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const Hero = () => {
  const lang = useSelector((state: RootState) => state.language.current);

  const { personal, hero } = portfolioData[lang];

  return (
    <header
      id="about"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 overflow-hidden"
    >
      {/* Background Decor - Grid Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Text Content */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 rounded-full text-xs font-bold tracking-wide uppercase border border-teal-100 dark:border-teal-800/50 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
            </span>
            {personal.availability}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            {personal.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-400 animate-gradient-x">
              {personal.subtitle}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0">
            {personal.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all hover:scale-105 hover:shadow-xl shadow-teal-200/50 dark:shadow-none"
            >
              {hero.btnProject}
            </a>
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <GitHub fontSize="small" /> {hero.btnGithub}
            </a>
          </div>
        </div>

        {/* Code Visual */}
        <div className="w-full md:w-[45%] relative hidden md:block perspective-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl blur opacity-20 dark:opacity-40 animate-pulse"></div>
          <div className="relative bg-slate-900 dark:bg-[#0a0a0a] rounded-xl border border-slate-800 shadow-2xl overflow-hidden transform rotate-y-12 hover:rotate-0 transition-all duration-700 ease-out">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-auto text-xs text-slate-500 font-mono">
                {hero.codeFileName}
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 space-y-2 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <span className="text-purple-400">public class</span>{" "}
                <span className="text-yellow-300">KhanhNguyen</span> {"{"}
              </p>
              <div className="pl-4 border-l-2 border-slate-800 ml-1">
                <p className="text-slate-500">{hero.codeComment}</p>
                <p>
                  String stack ={" "}
                  <span className="text-emerald-400">
                    "Java/Spring + Next.js"
                  </span>
                  ;
                </p>
                <p>
                  boolean <span className="text-blue-400">lovesOOP</span> ={" "}
                  <span className="text-orange-400">true</span>;
                </p>
                <p>
                  boolean <span className="text-blue-400">secureAuth</span> ={" "}
                  <span className="text-orange-400">true</span>;{" "}
                  <span className="text-slate-500">// JWT</span>
                </p>
                <br />
                <p>
                  <span className="text-blue-400">public void</span>{" "}
                  <span className="text-yellow-300">work</span>() {"{"}
                </p>
                <p className="pl-4">
                  this.deploy(<span className="text-emerald-400">"Docker"</span>
                  , <span className="text-emerald-400">"Render"</span>);
                </p>
                <p>{"}"}</p>
              </div>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;