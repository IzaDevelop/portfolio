import { Logo } from '../assets'
import { List, Sun, Moon, X } from '@phosphor-icons/react'
import { useAppContext } from '../context/appContext'

export default function Header() {
    const {
        handleToggleTheme,
        theme,
        menu,
        setMenu,
        changeLanguage,
        t,
        currentLang
    } = useAppContext();

    return (
        <header className='w-full bg-purple-300 dark:bg-neutral-950 text-zinc-900 dark:text-zinc-100'>
            <nav className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div className="relative flex items-center justify-between px-5 xl:px-0">
                    <figure className="flex items-center">
                        <img src={Logo} className="h-16 mr-3 dark:invert" alt="Logo" />
                    </figure>
                    <ul className="items-center hidden space-x-8 lg:flex">
                        <li>
                            <a
                                href="#home"
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.home")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#sobre"
                                aria-label="Sobre mim"
                                title="Sobre mim"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.about")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#servicos"
                                aria-label="Serviços"
                                title="Serviços"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.services")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projetos"
                                aria-label="Projetos"
                                title="Projetos"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.projects")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:contact.izadeveloper@gmail.com"
                                aria-label="Contato"
                                title="Contato"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                        <li className='flex gap-3 justify-between items-center'>
                            <span
                                onClick={() => changeLanguage("pt")}
                                className={`font-medium tracking-wide px-3 py-1 ${currentLang === "pt" ? "bg-purple-500 text-white rounded-full hover:text-black dark:hover:text-purple-950" : "hover:text-purple-500 dark:hover:text-purple-300"}`}
                            >
                                PT
                            </span>
                            <span>/</span>
                            <span
                                onClick={() => changeLanguage("en")}
                                className={`font-medium tracking-wide px-3 py-1 ${currentLang === "en" ? "bg-purple-500 text-white rounded-full hover:text-black dark:hover:text-purple-950" : "hover:text-purple-500 dark:hover:text-purple-300"}`}
                            >
                                EN
                            </span>
                        </li>
                        <li>
                            {theme ? (
                                <button
                                    type="button"
                                    onClick={handleToggleTheme}
                                    className="py-2 rounded focus:border-0 dark:hover:text-purple-300"
                                >
                                    <Sun size={23} weight="light" />
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleToggleTheme}
                                    className="py-2 rounded focus:border-0 hover:text-purple-700"
                                >
                                    <Moon size={23} weight="light" />
                                </button>
                            )}
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setMenu(true)}
                        >
                            <List size={35} />
                        </button>
                        {menu && (
                            <div className="absolute z-10 top-0 left-0 w-full" onClick={() => setMenu(false)}>
                                <div className="p-5 pt-0 bg-purple-300 dark:bg-neutral-950 rounded shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <figure className="flex items-center">
                                                <img src={Logo} className="h-16 dark:invert" alt="Logo" />
                                            </figure>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                                            >
                                                <X size={30} />
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <a
                                                    href="#home"
                                                    aria-label="Home"
                                                    title="Home"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300 block w-full"
                                                >
                                                    {t("header.home")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#sobre"
                                                    aria-label="Sobre mim"
                                                    title="Sobre mim"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300 block w-full"
                                                >
                                                    {t("header.about")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#servicos"
                                                    aria-label="Serviços"
                                                    title="Serviços"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300 block w-full"
                                                >
                                                    {t("header.services")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#projetos"
                                                    aria-label="Projetos"
                                                    title="Projetos"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300 block w-full"
                                                >
                                                    {t("header.projects")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="mailto:contact.izadeveloper@gmail.com"
                                                    aria-label="Contato"
                                                    title="Contato"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300 block w-full"
                                                >
                                                    {t("header.contact")}
                                                </a>
                                            </li>
                                            <li className='flex gap-3 flex-col items-center'>
                                                <span
                                                    onClick={() => changeLanguage("pt")}
                                                    className={`font-medium tracking-wide cursor-pointer w-full ${currentLang === "pt" ? "bg-purple-500 text-white px-3 py-1 " : ""}`}
                                                >
                                                    PT
                                                </span>
                                                <span
                                                    onClick={() => changeLanguage("en")}
                                                    className={`font-medium tracking-wide cursor-pointer w-full ${currentLang === "en" ? "bg-purple-500 text-white px-3 py-1 " : ""}`}
                                                >
                                                    EN
                                                </span>
                                            </li>
                                            <li>
                                                {theme ? (
                                                    <button
                                                        type="button"
                                                        onClick={handleToggleTheme}
                                                        className="py-2 rounded focus:border-0 dark:hover:text-purple-300 w-full"
                                                    >
                                                        <Sun size={23} weight="light" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={handleToggleTheme}
                                                        className="py-2 rounded focus:border-0 hover:text-purple-500 w-full"
                                                    >
                                                        <Moon size={23} weight="light" />
                                                    </button>
                                                )}
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header >
    )
}