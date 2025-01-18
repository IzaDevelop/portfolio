import Layout from '../components/layout'
import Item from '../components/item'
import { DreamAgency, Memorygame, Minefields, ProximaJornada } from '../assets'
import { useAppContext } from '../context/appContext';
import { ArrowLineDown } from '@phosphor-icons/react';
import Task from '../components/task';
import Project from '../components/project';
import Skill from '../components/skill';

export default function Home() {
    const {
        handleDownload,
        PDF,
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
                                    Bem-vindo(a) ao meu portfólio digital como desenvolvedora front-end
                                </h2>
                                <p className="mb-6 text-base md:text-lg">
                                    Dentro dessas paredes virtuais, convido você a explorar minha criatividade, dedicação e conhecimento técnico no mundo do desenvolvimento web.
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
                                    Quem sou
                                </h5>
                                <p>
                                    Olá! Meu nome é Izabelle, sou programadora apaixonada por Front-end. Com 3 anos de experiência profissional, colaborando com pessoas talentosas para a criação de produtos digitais para uso comercial. Deixe-me compartilhar um pouco mais sobre o que posso contribuir:
                                </p>
                            </div>
                            <div className='flex flex-wrap justify-evenly gap-5 items-center'>
                                <Skill skill={'React.js'} />

                                <Skill skill={'TypeScript'} />

                                <Skill skill={'Node.js'} />

                                <Skill skill={'Git/Github'} />

                                <Skill skill={'Tailwind'} />
                                
                                <Skill skill={'GraphQl'} />

                                <Skill skill={'PHP'} />

                                <Skill skill={'Figma'} />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center pt-5 relative">
                        <button onClick={() => { handleDownload(PDF) }} className="flex items-center border border-purple-400 text-black dark:text-white font-semibold py-2 ps-2 pr-4 rounded-full">
                            <span className="flex items-center justify-center w-8 h-8 bg-purple-800 text-white rounded-full mr-2">
                                <ArrowLineDown size={18} />
                            </span>
                            Download Currículo PDF
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
                                    <span className='text-sm'>Março de 2022 - Dezembro de 2024</span>
                                </Item>
                                <Item title="Cursos">
                                    Programador Web - Senac Penha (2022)
                                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700" />
                                    Técnico em Contabilidade - Etec Professor Camargo Aranha (2021)
                                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700" />
                                    Técnico em Edificações - Etec de São Paulo (2021)
                                </Item>
                                <Item title="Certificações">
                                    Qualificação profissional em Domain Driven Design (Java), Cloud Computing - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.fiap.com.br" target='_blank'>@Fiap </a>
                                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700" />
                                    Qualificação profissional em Responsive Web - Front End e User Experience - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.fiap.com.br" target='_blank'>@Fiap </a>
                                </Item>
                                <Item title="Experiências">
                                    Dev. Front-End - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://pravy.com.br" target='_blank'>@Pravy </a>
                                    <br />
                                    <span className='text-sm'>Julho de 2024 - até o momento </span>
                                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-zinc-700" />
                                    Dev. Front-End - <a className='font-bold text-purple-600 dark:text-purple-400' href="https://www.ateliedepropaganda.com.br" target='_blank'>@Ateliê de Propaganda </a>
                                    <br />
                                    <span className='text-sm'>Julho de 2022 - Julho de 2024 </span>
                                </Item>
                            </div>

                        </div>
                    </div>
                </section>

                <section id='servicos'>
                    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto pb-10">
                                Serviços
                            </h2>
                        </div>

                        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
                            <Task icon={'design'} title={'UI/UX Design'} text={'Para que o usuário tenha uma melhor experiência do sistema web.'} />
                            <Task icon={'device'} title={'Web Design'} text={'Criação de layouts de sites atraente, objetivo e responsivo.'} />
                            <Task icon={'code'} title={'Desenvolvimento de sites'} text={'Desenvolvo sites profissionais, landing pages, portfólios e hotsites.'} />
                            <Task icon={'marketing'} title={'E-mail Marketing'} text={'Criação de campanhas de e-mail atrativas, com foco em engajamento e conversões.'} />
                            <Task icon={'signature'} title={'Assinaturas de e-mail'} text={'Desenvolvimento de assinaturas personalizadas, profissionais e compatíveis com diferentes plataformas.'} />
                            <Task icon={'game'} title={'Jogos para ativações'} text={'Crio interações que transmitem o tema do evento, além de chamarem a atenção do usuário.'} />
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
                            <Project 
                                link={'https://dream-agency-beta.vercel.app'}
                                image={DreamAgency}
                                title={'Dream Agency'}
                                description={'Landing page para uma agência fictícia, que oferece planos de serviços digitais para outras empresas.'}
                            />
                            <Project 
                                link={'https://proxima-jornada-beta.vercel.app'}
                                image={ProximaJornada}
                                title={'Próxima Jornada'}
                                description={'Hotsite para uma promoção fictícia, onde participantes concorrem a uma viagem paradisíaca com todas as despesas pagas.'}
                            />
                            <Project 
                                link={'https://game-minefields.vercel.app'}
                                image={Minefields}
                                title={'Campo Minado'}
                                description={'Um quebra-cabeça clássico que combina lógica, estratégia e um toque de sorte.'}
                            />
                            <Project 
                                link={'https://memory-pokemon.vercel.app'}
                                image={Memorygame}
                                title={'Jogo da Memória'}
                                description={'Um jogo de tabuleiro que desafia a memória e a concentração dos jogadores.'}
                            />
                        </div>
                    </div>
                </section>
            </article>
        </Layout >
    )
}