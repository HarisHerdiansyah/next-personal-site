import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";
import {
  ABOUT_HIGLIGHTS,
  CONNECT_LINKS,
  PROJECTS,
  TECH_STACK,
} from "@/utils/constants";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main className="h-svh overflow-y-auto overscroll-y-contain snap-y snap-proximity scroll-smooth px-4 sm:px-6 md:px-8 lg:px-10">
        {/* <!-- Hero Section --> */}
        <section className="flex items-center justify-center snap-start snap-always h-svh py-16 sm:py-20">
          <div
            id="hero"
            className="max-w-190 flex flex-col items-center justify-center text-center gap-4 sm:gap-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Hi! <span>I&apos;m Haris Herdiansyah</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              A continuous learner and developer building modern interactive
              UIs, scalable system, and data-driven machine learning workflows
            </h2>
          </div>
        </section>
        {/* <!-- Hero Section --> */}

        {/* <!-- About Me Section --> */}
        <section className="flex items-center justify-center snap-start snap-always h-svh py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8 lg:gap-10 max-w-300 mx-auto">
            <div className="md:col-span-2 lg:col-span-3 p-4 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
                About Me
              </h2>
              <article
                id="about-me"
                className="space-y-4 sm:space-y-5 text-base md:text-lg leading-relaxed"
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
              </article>
            </div>
            <div className="md:col-span-1 px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-5 content-center">
              {ABOUT_HIGLIGHTS.map((h) => (
                <div key={h.alt} className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={h.src}
                    width={64}
                    height={64}
                    alt={h.alt}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                  />
                  <p className="text-sm sm:text-base">{h.textContent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- About Me Section --> */}

        {/* <!-- Technology Section --> */}
        <section className="flex items-center justify-center snap-start snap-always h-svh py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Tools and Technologies
            </h2>
            <div className="tech-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.alt}
                  className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square"
                >
                  <Image
                    src={tech.src}
                    width={64}
                    height={64}
                    className="w-12 h-12 md:w-14 md:h-14"
                    alt={tech.alt}
                  />
                  <p className="text-sm md:text-base">{tech.textContent}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Technology Section --> */}

        {/* <!-- Project Section --> */}
        <section className="flex items-center justify-center snap-start snap-always h-svh py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Selected Works and Explorations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {PROJECTS.map((project) => (
                <div
                  key={project.title}
                  className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1"
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
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- Project Section --> */}

        {/* <!-- Connect Section --> */}
        <section className="flex items-center justify-center snap-start snap-always h-svh py-16 sm:py-20">
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
