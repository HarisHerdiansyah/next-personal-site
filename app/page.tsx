import Image from "next/image";
import Link from "next/link";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main className="px-4 sm:px-6 md:px-8 lg:px-10">
        {/* <!-- Hero Section --> */}
        <section className="flex items-center justify-center min-h-svh py-16 sm:py-20">
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
        <section className="py-16 sm:py-20">
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
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  width={64}
                  height={64}
                  alt="React"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                />
                <p className="text-sm sm:text-base">Modern Frontend</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                  width={64}
                  height={64}
                  alt="Spring"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                />
                <p className="text-sm sm:text-base">System Development</p>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg"
                  width={64}
                  height={64}
                  alt="Google Colab"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                />
                <p className="text-sm sm:text-base">Data & Machine Learning</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Me Section --> */}

        {/* <!-- Technology Section --> */}
        <section className="py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Tools and Technologies
            </h2>
            <div className="tech-wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="TypeScript"
                />
                <p className="text-sm md:text-base">TypeScript</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Tailwind CSS"
                />
                <p className="text-sm md:text-base">Tailwind CSS</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Next.js"
                />
                <p className="text-sm md:text-base">Next.js</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Prisma"
                />
                <p className="text-sm md:text-base">Prisma</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Spring"
                />
                <p className="text-sm md:text-base">Spring</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="PostgreSQL"
                />
                <p className="text-sm md:text-base">PostgreSQL</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Redis"
                />
                <p className="text-sm md:text-base">Redis</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Docker"
                />
                <p className="text-sm md:text-base">Docker</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Python"
                />
                <p className="text-sm md:text-base">Python</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 sm:gap-3 aspect-square">
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-14 md:h-14"
                  alt="Google Colab"
                />
                <p className="text-sm md:text-base">Google Colab</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Technology Section --> */}

        {/* <!-- Project Section --> */}
        <section className="py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Selected Works and Explorations
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              <div className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                  <Image
                    src="/assets/peluit.png"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Peluit 2024 Dashboard"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex flex-col grow p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                    Peluit 2024 (Vote App)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 sm:line-clamp-2 mb-5 sm:mb-6 grow leading-relaxed">
                    Voting app for Himatif FMIPA Unpad Chairman Election at
                    2024.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      Next.js
                    </span>
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      DaisyUI
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                  <Image
                    src="/assets/incensory.png"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Incensory 2025 Dashboard"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex flex-col grow p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                    Incensory (PKMK 2025)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 sm:line-clamp-2 mb-5 sm:mb-6 grow leading-relaxed">
                    Web application for marketing and managing products. Visit
                    at
                    <Link
                      href="https://incensory.id/"
                      target="_blank"
                      className="text-sky-400 hover:text-sky-300 underline"
                    >
                      https://incensory.id/
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      Next.js
                    </span>
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      Supabase
                    </span>
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      AWS
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm overflow-hidden hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
                  <Image
                    src="/assets/gpa-pred.png"
                    width={1200}
                    height={675}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt="Student GPA PredPredictioniction"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="flex flex-col grow p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 mb-2">
                    Student GPA Prediction
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 sm:line-clamp-2 mb-5 sm:mb-6 grow leading-relaxed">
                    Simple machine learning project to predict student GPA based
                    on various features.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      Python
                    </span>
                    <span className="px-2 py-1 text-[10px] sm:text-[11px] font-medium text-slate-300 bg-slate-800 rounded-md border border-slate-700/50">
                      Scikit Learn
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Project Section --> */}

        {/* <!-- Connect Section --> */}
        <section className="py-16 sm:py-20">
          <div className="p-4 sm:p-8 lg:p-10 max-w-300 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-[#38BDF8] text-center">
              Let&apos;s Connect
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
              <Link
                href="mailto:harisherdian001@gmail.com"
                target="_blank"
                className="h-full"
              >
                <div className="h-full flex items-center gap-3 sm:gap-4 bg-slate-700/50 rounded-lg p-3 sm:p-4">
                  <Image
                    src="/assets/gmail.svg"
                    width={56}
                    height={56}
                    alt="Gmail"
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                  <p className="font-semibold text-sm sm:text-base lg:text-lg break-all sm:break-normal">
                    harisherdian001@gmail.com
                  </p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/harisherdian"
                target="_blank"
                className="h-full"
              >
                <div className="h-full flex items-center gap-3 sm:gap-4 bg-slate-700/50 rounded-lg p-3 sm:p-4">
                  <Image
                    src="/assets/linkedin.svg"
                    width={56}
                    height={56}
                    alt="LinkedIn"
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">
                    Haris Herdiansyah
                  </p>
                </div>
              </Link>

              <Link
                href="https://github.com/HarisHerdiansyah"
                target="_blank"
                className="h-full"
              >
                <div className="h-full flex items-center gap-3 sm:gap-4 bg-slate-700/50 rounded-lg p-3 sm:p-4">
                  <Image
                    src="/assets/github_dark.svg"
                    width={56}
                    height={56}
                    alt="Github"
                    className="w-12 h-12 md:w-14 md:h-14"
                  />
                  <p className="font-semibold text-sm sm:text-base lg:text-lg">
                    HarisHerdiansyah
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- Connect Section --> */}

        {/* <!-- Signature --> */}
        <section className="py-12 sm:py-16">
          <p className="text-center text-sm sm:text-base text-[#38BDF8] font-semibold">
            Designed & Built by Haris Herdiansyah &copy; 2026
          </p>
        </section>
        {/* <!-- Signature --> */}
      </main>
    </>
  );
}
