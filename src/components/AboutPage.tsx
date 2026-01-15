"use client";

import {
  History,
  Terminal,
  WorkspacePremium,
  School,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { aboutme } from "@/data/aboutme";

const AboutPage = () => {
  const lang = useSelector((state: RootState) => state.language.current);

  const t = aboutme[lang].aboutPage;

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 pt-20 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-20">
        {/* 1. Story Header */}
        <section className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-widest">
            <History fontSize="inherit" /> {t.tag}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {t.title} <br />
            <span className="text-teal-600 dark:text-teal-400">
              {t.subtitle}
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.p1}
          </p>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.p2}
          </p>

          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            {t.p3}
          </p>
        </section>

        {/* 2. Technical Direction */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="p-3 w-fit bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-white">
              <Terminal />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.tech1Title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.tech1Desc}
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-3 w-fit bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-2xl">
              <WorkspacePremium />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {t.tech2Title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.tech2Desc}
            </p>
          </div>
        </section>

        {/* 3. Education */}
        <section className="p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5 dark:opacity-10 text-slate-900 dark:text-white">
            <School sx={{ fontSize: 160 }} />
          </div>

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 text-teal-600 dark:text-teal-400 font-bold">
              <School /> <span>Education</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t.eduTitle}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {t.eduDesc}
              </p>
            </div>

            <div className="inline-block px-4 py-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-500">
              {t.gradDate}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
