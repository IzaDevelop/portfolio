import Layout from '../../components/layout'
import Item from '../../components/item'
import { DreamAgency, ProximaJornada } from '../../assets'

export default function Home() {
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
                                    Bem-vindo(a) ao meu portfolio digital como desenvolvedora front-end
                                </h2>
                                <p className="mb-6 text-base md:text-lg">
                                    Dentro dessas paredes virtuais, convido você a explorar minha criatividade, dedicação e conhecimento técnico no mundo do desenvolvimento web.
                                </p>
                                <a
                                    href="#sobre"
                                    aria-label="Scroll down"
                                    className="flex items-center justify-center w-10 h-10 mx-auto duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
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
                                    Quem sou
                                </h5>
                                <p>
                                    Olá! Meu nome é Izabelle, sou programadora apaixonada por Front-end. Com 1 ano de experiência profissional colaborando com pessoas talentosas para a criação de produtos digitais para uso comercial. Deixe-me compartilhar um pouco mais sobre o que posso contribuir:
                                </p>
                            </div>
                            <div className='flex flex-wrap justify-evenly gap-5 items-center'>
                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        React.js
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        TypeScript
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        Node.js
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        Git/Github
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        Tailwind
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        GraphQl
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        PHP
                                    </span>
                                </div>

                                <div className="group relative inline-block focus:outline-none focus:ring">
                                    <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
                                    ></span>
                                    <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                                        Figma
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
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
                                            <span className="relative">Um</span>
                                        </span>{' '}
                                        um pouco mais sobre a minha jornada até aqui.
                                    </h2>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <Item title="Faculdade">
                                    Sistemas para Internet - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.fiap.com.br" target='_blank'>@Fiap </a>
                                    <br />
                                    <span className='text-sm'>Março de 2022 - até o momento</span>
                                </Item>
                                <Item title="Cursos">
                                    Programador Web - Senac (2022)
                                    <br />
                                    Técnico em Contabilidade - Etec Professor Camargo Aranha (2021)
                                    <br />
                                    Técnico em Edificações - Etec de São Paulo (2021)
                                </Item>
                                <Item title="Certificações">
                                    Qualificação profissional em Domain Driven Design (Java), Cloud Computing - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.fiap.com.br" target='_blank'>@Fiap </a>
                                    <br/>
                                    Qualificação profissional em Responsive Web - Front End e User Experience - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.fiap.com.br" target='_blank'>@Fiap </a>
                                </Item>
                                <Item title="Experiências">
                                    Dev. Front-End - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.ateliedepropaganda.com.br" target='_blank'>@Ateliê de Propaganda </a>
                                    <br/>
                                    <span className='text-sm'>Julho de 2022 - até o momento</span>
                                </Item>
                            </div>
                        </div>
                    </div>
                </section>

                <section id='projetos'>
                    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto pb-10">
                                Projetos
                            </h2>
                        </div>
                        <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
                            <div className="h-auto rounded-lg bg-purple-50 dark:bg-neutral-950 dark:text-white text-neutral-950 lg:col-span-2 dark:border-none border-2 shadow-md">
                                <a href="https://dream-agency-beta.vercel.app" target='_blank' aria-label="Article">
                                    <div className="overflow-hidden transition-shadow duration-300 rounded">
                                        <img
                                            src={DreamAgency}
                                            className="object-cover w-full h-64"
                                            alt=""
                                        />
                                        <div className="pt-5 px-4">
                                            <p className="text-2xl font-bold leading-5 pb-2">
                                                Dream Agency
                                            </p>
                                            <p className="mb-4">
                                                Landing page para uma agência fictícia, que oferece planos de serviços digitais para outras empresas.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="h-auto rounded-lg bg-purple-50 dark:bg-neutral-950 dark:text-white text-neutral-950 lg:col-span-2 dark:border-none border-2 shadow-md">
                                <a href="https://proxima-jornada-beta.vercel.app" target='_blank' aria-label="Article">
                                    <div className="overflow-hidden transition-shadow duration-300 rounded">
                                        <img
                                            src={ProximaJornada}
                                            className="object-cover w-full h-64"
                                            alt=""
                                        />
                                        <div className="pt-5 px-4">
                                            <p className="text-2xl font-bold leading-5 pb-2">
                                                Próxima Jornada
                                            </p>
                                            <p className="mb-4">
                                                Hotsite para uma promoção fictícia, onde participantes concorrem a uma viagem paradisíaca com todas as despesas pagas.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            {/* <div className="h-auto rounded-lg bg-purple-50 dark:bg-neutral-950 dark:text-white text-neutral-950 lg:col-span-2 dark:border-none border-2 shadow-md">
                                <a href="/" target='_blank' aria-label="Article">
                                    <div className="overflow-hidden transition-shadow duration-300 rounded">
                                        <img
                                            src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                            className="object-cover w-full h-64"
                                            alt=""
                                        />
                                        <div className="pt-5 px-4">
                                            <p className="text-2xl font-bold leading-5 pb-2">
                                                Rockpedia
                                            </p>
                                            <p className="mb-4">
                                                Blog sobre bandas, shows, intrumentos e curiosidades ligadas ao mundo da música.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="h-auto rounded-lg bg-purple-50 dark:bg-neutral-950 dark:text-white text-neutral-950 lg:col-span-2 dark:border-none border-2 shadow-md">
                                <a href="/" target='_blank' aria-label="Article">
                                    <div className="overflow-hidden transition-shadow duration-300 rounded">
                                        <img
                                            src="https://images.pexels.com/photos/2123755/pexels-photo-2123755.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                            className="object-cover w-full h-64"
                                            alt=""
                                        />
                                        <div className="pt-5 px-4">
                                            <p className="text-2xl font-bold leading-5 pb-2">
                                                Lorem Ipsum
                                            </p>
                                            <p className="mb-4">
                                                Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </section>
            </article>
        </Layout >
    )
}