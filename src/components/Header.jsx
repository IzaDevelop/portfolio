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
        t
    } = useAppContext();

    return (
        <header className='w-full bg-purple-300 dark:bg-neutral-950 text-zinc-900 dark:text-zinc-100'>
            <nav className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
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
                                href="mailto:izabelledevelop@gmail.com"
                                aria-label="Contato"
                                title="Contato"
                                className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-300"
                            >
                                {t("header.contact")}
                            </a>
                        </li>
                        <li>
                            <button onClick={() => changeLanguage("pt")}>PT</button>
                        </li>
                        <li>
                            <button onClick={() => changeLanguage("en")}>EN</button>
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
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setMenu(true)}
                        >
                            <List size={35} />
                        </button>
                        {menu && (
                            <div className="absolute z-10 top-0 left-0 w-full" onClick={() => setMenu(false)}>
                                <div className="p-5 bg-purple-300 dark:bg-neutral-950 rounded shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <figure className="flex items-center">
                                                <img src={Logo} className="h-16 mr-3 dark:invert" alt="Logo" />
                                            </figure>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
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
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300"
                                                >
                                                    {t("header.home")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#sobre"
                                                    aria-label="Sobre mim"
                                                    title="Sobre mim"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300"
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
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300"
                                                >
                                                    {t("header.projects")}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="mailto:izabelledevelop@gmail.com"
                                                    aria-label="Contato"
                                                    title="Contato"
                                                    className="font-medium tracking-wide transition-colors duration-200 hover:text-purple-500 dark:hover:text-purple-300"
                                                >
                                                    {t("header.contact")}
                                                </a>
                                            </li>
                                            <li>
                                                <button onClick={() => changeLanguage("pt")}>PT</button>
                                            </li>
                                            <li>
                                                <button onClick={() => changeLanguage("en")}>EN</button>
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
                                                        className="py-2 rounded focus:border-0 hover:text-purple-500"
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
        </header>
    )
}