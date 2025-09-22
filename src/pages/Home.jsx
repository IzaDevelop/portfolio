import Layout from '../components/Layout'
import { useAppContext } from '../context/appContext';
import { ArrowLineDown } from '@phosphor-icons/react';
import Task from '../components/Task';
import Project from '../components/Project';
import Skill from '../components/Skill';
import Infos from '../components/Infos';
import Details from '../components/Details';

export default function Home() {
    const {
        handleDownload,
        PDFFile,
        t
    } = useAppContext();

    return (
        <Layout>
            <article>
                <section id='home'>
                    <div className="relative bg-purple-300 dark:bg-neutral-950">
                        <div className="absolute inset-x-0 bottom-0">
                            <svg
                                viewBox="0 0 224 12"
                                className="w-full -mb-1 fill-neutral-50 dark:fill-neutral-900"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                            </svg>
                        </div>
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                                    {t("home.welcome.title")}
                                </h2>
                                <p className="mb-6 text-base md:text-lg">
                                    {t("home.welcome.subtitle")}
                                </p>
                                <a
                                    href="#sobre"
                                    aria-label="Scroll down"
                                    className="flex items-center justify-center w-10 h-10 mx-auto duration-300 transform border border-purple-800 dark:border-purple-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110 animate-bounce"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                        fill="currentColor"
                                    >
                                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='sobre'>
                    <div className="px-4 pt-10 pb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="flex flex-col lg:flex-row">
                            <div className="max-w-xl pb-10 lg:pb-0 lg:pr-16 mx-auto">
                                <h5 className="mb-6 text-3xl font-extrabold leading-none">
                                    {t("home.about.title")}
                                </h5>
                                <p dangerouslySetInnerHTML={{ __html: t("home.about.text") }} ></p>
                            </div>
                            <div className='flex flex-wrap justify-evenly gap-5 items-center'>
                                {t("home.about.skills", { returnObjects: true }).map((skill, index) => (
                                    <Skill key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-5 pt-5 relative">
                        <button onClick={() => { handleDownload(PDFFile) }} className="flex items-center border border-purple-300 dark:border-purple-800 text-black dark:text-white font-semibold py-2 ps-2 pr-4 rounded-full transition hover:bg-purple-300 dark:hover:bg-purple-800">
                            <span className="flex items-center justify-center w-8 h-8 bg-purple-800 text-white rounded-full mr-2">
                                <ArrowLineDown size={18} />
                            </span>
                            {t("home.about.cv")}
                        </button>
                    </div>

                    <div className="px-4 pt-10 pb-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
                        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                            <div className="flex flex-col pb-5 sm:text-center">
                                <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                                    <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                                        <span className="relative inline-block">
                                            <svg
                                                viewBox="0 0 52 24"
                                                fill="#d8b4fe"
                                                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                            >
                                                <defs>
                                                    <pattern
                                                        id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                                        x="0"
                                                        y="0"
                                                        width=".135"
                                                        height=".30"
                                                    >
                                                        <circle cx="1" cy="1" r=".7" />
                                                    </pattern>
                                                </defs>
                                                <rect
                                                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                                    width="52"
                                                    height="24"
                                                />
                                            </svg>
                                        </span>
                                        <span className='relative'>{t("home.about.education.title")}</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Details
                                    key="experience"
                                    title={t("home.about.education.experience.section")}
                                    items={t("home.about.education.experience.items", { returnObjects: true })}
                                />

                                <Details
                                    key="degree"
                                    title={t("home.about.education.degree.section")}
                                    items={t("home.about.education.degree.items", { returnObjects: true })}
                                />

                                <Details
                                    key="courses"
                                    title={t("home.about.education.courses.section")}
                                    items={t("home.about.education.courses.items", { returnObjects: true })}
                                />

                                <Infos
                                    key="certifications"
                                    title={t("home.about.education.certifications.section")}
                                    items={t("home.about.education.certifications.items", { returnObjects: true })}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id='servicos'>
                    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto pb-10">
                                {t("home.services.title")}
                            </h2>
                        </div>

                        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                            {t("home.services.items", { returnObjects: true }).map((task, index) => (
                                <Task
                                    key={index}
                                    icon={task.icon}
                                    title={task.title}
                                    text={task.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id='projetos'>
                    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto pb-10">
                                {t("home.projects.title")}
                            </h2>
                        </div>
                        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
                            {t("home.projects.items", { returnObjects: true }).map((project, index) => (
                                <Project
                                    key={index}
                                    cta={project.cta}
                                    link={project.link}
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </article>
        </Layout >
    )
}