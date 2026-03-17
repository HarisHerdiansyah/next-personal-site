"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
} from "motion/react";
import ParticleBackground from "@/components/ParticleBackground";
import {
  ABOUT_HIGLIGHTS,
  CONNECT_LINKS,
  PROJECTS,
  TECH_STACK,
} from "@/utils/constants";
import {
  heroParent,
  heroChild,
  aboutArticleParent,
  aboutArticleChild,
  highlightParent,
  highlightChild,
  techGridParent,
  techGridChild,
  projectGridParent,
  projectGridChild,
} from "@/utils/motion";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const techRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: mainRef });

  const leftAboutControls = useAnimationControls();
  const rightAboutControls = useAnimationControls();
  const techTitleControls = useAnimationControls();
  const techGridControls = useAnimationControls();
  const projectTitleControls = useAnimationControls();
  const projectGridControls = useAnimationControls();

  const viewProps = useMemo(
    () => ({
      once: true,
      amount: 0.3,
      root: mainRef,
    }),
    [],
  );

  const aboutInView = useInView(aboutRef, viewProps);
  const techInView = useInView(techRef, viewProps);
  const projectInView = useInView(projectRef, viewProps);

  useEffect(() => {
    if (!aboutInView) return;

    const run = async () => {
      await leftAboutControls.start("visible");
      await rightAboutControls.start("visible");
    };

    run();
  }, [aboutInView, leftAboutControls, rightAboutControls]);

  useEffect(() => {
    if (!techInView) return;

    const run = async () => {
      await techTitleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
      });
      await techGridControls.start("visible");
    };

    run();
  }, [techInView, techTitleControls, techGridControls]);

  useEffect(() => {
    if (!projectInView) return;

    const run = async () => {
      await projectTitleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" },
      });
      await projectGridControls.start("visible");
    };

    run();
  }, [projectInView, projectTitleControls, projectGridControls]);

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          backgroundColor: "#38bdf8",
          zIndex: 50,
        }}
      />
      <ParticleBackground />
      <main
        ref={mainRef}
        className="h-svh overflow-y-auto overscroll-y-contain touch-pan-y snap-y snap-proximity px-4 sm:px-6 md:px-8 lg:px-10"
      >
        {/* <!-- Hero Section --> */}
        <section className="flex items-center justify-center snap-start min-h-svh py-16 sm:py-20">
          <motion.div
            id="hero"
            className="max-w-190 flex flex-col items-center justify-center text-center gap-4 sm:gap-6"
            variants={heroParent}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              variants={heroChild}
            >
              Hi! <span>I&apos;m Haris Herdiansyah</span>
            </motion.h1>
            <motion.h2
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              variants={heroChild}
            >
              A continuous learner and developer building modern interactive
              UIs, scalable system, and data-driven machine learning workflows
            </motion.h2>
          </motion.div>
        </section>
        {/* <!-- Hero Section --> */}

        {/* <!-- About Me Section --> */}
        <section
          ref={aboutRef}
          className="flex items-center justify-center snap-start min-h-svh py-16 sm:py-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 max-w-300 mx-auto">
            <motion.div
              className="md:col-span-2 lg:col-span-3 p-4 sm:p-8 lg:p-10"
              variants={aboutArticleParent}
              initial="hidden"
              animate={leftAboutControls}
            >
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center"
                variants={aboutArticleChild}
              >
                About Me
              </motion.h2>
              <motion.article
                id="about-me"
                className="space-y-4 sm:space-y-5 text-base md:text-lg leading-relaxed"
                variants={aboutArticleChild}
              >
                <p>
                  I am a <span>software engineering enthusiast</span> driven by
                  an endless curiosity for how systems operate, both on the
                  surface and behind the scenes. My journey is about connecting
                  the dots between{" "}
                  <span>clean, interactive frontend interfaces</span> and the{" "}
                  <span>complex logic of data</span> that powers them.
                </p>
                <p>
                  Currently, I am focused on
                  <span>exploring the machine learning workflowm</span>, from
                  data analysis and feature engineering to model
                  evaluation—while also diving into the
                  <span>foundational theories of computer science</span>.
                </p>
              </motion.article>
            </motion.div>
            <motion.div
              className="md:col-span-1 px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-5 content-center"
              variants={highlightParent}
              initial="hidden"
              animate={rightAboutControls}
            >
              {ABOUT_HIGLIGHTS.map((h) => (
                <motion.div
                  key={h.alt}
                  className="flex items-center gap-3 sm:gap-4"
                  variants={highlightChild}
                >
                  <Image
                    src={h.src}
                    width={64}
                    height={64}
                    alt={h.alt}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                  <p className="text-sm sm:text-base">{h.textContent}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* <!-- About Me Section --> */}

        {/* <!-- Technology Section --> */}
        <section
          ref={techRef}
          className="flex items-center justify-center snap-start min-h-svh py-16 sm:py-20"
        >
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={techTitleControls}
            >
              Tools and Technologies
            </motion.h2>
            <motion.div
              className="tech-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
              variants={techGridParent}
              initial="hidden"
              animate={techGridControls}
            >
              {TECH_STACK.map((tech) => (
                <motion.div
                  key={tech.alt}
                  className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square"
                  variants={techGridChild}
                >
                  <Image
                    src={tech.src}
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-14 md:h-14"
                    alt={tech.alt}
                  />
                  <p className="text-sm md:text-base">{tech.textContent}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* <!-- Technology Section --> */}

        {/* <!-- Project Section --> */}
        <section
          ref={projectRef}
          className="flex items-center justify-center snap-start min-h-svh py-16 sm:py-20"
        >
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={projectTitleControls}
            >
              Selected Works and Explorations
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
              variants={projectGridParent}
              initial="hidden"
              animate={projectGridControls}
            >
              {PROJECTS.map((project) => (
                <motion.div
                  key={project.title}
                  className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
                  variants={projectGridChild}
                >
                  <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                    <Image
                      src={project.src}
                      width={1200}
                      height={675}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      alt={project.alt}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  <div className="flex flex-col grow p-4 sm:p-5 lg:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 sm:line-clamp-2 mb-5 sm:mb-6 grow leading-relaxed">
                      {project.description}
                      {project.link && (
                        <>
                          {" "}
                          Visit at{" "}
                          <Link
                            href={project.link.href}
                            target="_blank"
                            className="text-sky-400 hover:text-sky-300 underline"
                          >
                            {project.link.textContent}
                          </Link>
                        </>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* <!-- Project Section --> */}

        {/* <!-- Connect Section --> */}
        <section className="flex items-center justify-center snap-start min-h-svh py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Let&apos;s Connect
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              {CONNECT_LINKS.map((contact) => (
                <Link
                  key={contact.href}
                  href={contact.href}
                  target="_blank"
                  className="h-full"
                >
                  <div className="h-full flex items-center gap-3 sm:gap-4 bg-slate-700/50 rounded-lg p-3 sm:p-4">
                    <Image
                      src={contact.src}
                      width={56}
                      height={56}
                      alt={contact.alt}
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                    <p
                      className={`font-semibold text-sm sm:text-base lg:text-lg ${contact.textClassName ?? ""}`}
                    >
                      {contact.textContent}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Connect Section --> */}
      </main>
    </>
  );
}
