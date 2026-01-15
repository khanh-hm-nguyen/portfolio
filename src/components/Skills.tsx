"use client";

import {
  Storage,
  Layers,
  Memory,
  Code,
  Terminal,
  Cloud,
} from "@mui/icons-material";
import { SvgIconComponent } from "@mui/icons-material";
import { portfolioData } from "@/data/portfolio";
import { skillThemes } from "@/data/theme";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const iconMap: Record<string, SvgIconComponent> = {
  Storage: Storage,
  Layers: Layers,
  Memory: Memory,
  Terminal: Terminal,
  Cloud: Cloud,
};

const Skills = () => {
  const lang = useSelector((state: RootState) => state.language.current);
  const currentData = portfolioData[lang];

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden bg-slate-50 dark:bg-[#0B1120] transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            {lang === "en" ? "Technical " : "Năng Lực "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              {lang === "en" ? "Proficiency" : "Kỹ Thuật"}
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            {lang === "en"
              ? "A diverse technical skillset focused on building scalable, high-performance applications."
              : "Bộ kỹ năng đa dạng tập trung vào việc xây dựng các ứng dụng có khả năng mở rộng và hiệu suất cao."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentData.skills.map((skillGroup, index: number) => {
            const Icon = iconMap[skillGroup.icon] || Code;
            const theme = skillThemes[index % skillThemes.length];

            return (
              <div
                key={skillGroup.category}
                className={`group bg-white dark:bg-slate-900/80 backdrop-blur-sm p-8 rounded-3xl 
                  border border-slate-200 dark:border-slate-800 
                  shadow-sm dark:shadow-none
                  transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
                  ${theme.cardHover}`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${theme.iconBg} ${theme.iconColor}`}
                  >
                    <Icon
                      style={{ fontSize: 30 }}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300 ${theme.title}`}
                    >
                      {skillGroup.category}
                    </h3>
                    <div className="h-1 w-12 bg-slate-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-current opacity-50`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item: string) => (
                    <span
                      key={item}
                      className={`px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-default select-none border
                        bg-slate-50 text-slate-600 border-slate-200
                        dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700
                        ${theme.tag}`}
                    >
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
  );
};

export default Skills;
