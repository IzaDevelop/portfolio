import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { Logo } from "../../assets";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-white">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <figure
                            className="inline-flex items-center"
                        >
                            <img src={Logo} alt="Logo" className="max-w-[50px] dark:invert" />
                        </figure>
                        <div className="lg:max-w-sm">
                            <p className="text-base">
                                Desenvolvedora, construindo o Front-end de sites <br className="hidden lg:block" /> e aplicativos Web.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">
                            Contatos
                        </p>
                        <div className="flex">
                            <p className="mr-1 text-base">E-mail:</p>
                            <a
                                href="mailto:izabelledevelop@gmail.com"
                                aria-label="Email"
                                title="Email"
                                className="text-base duration-300 dark:hover:text-purple-400"
                            >
                                izabelledevelop@gmail.com
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide">
                            Social
                        </span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a
                                href="https://github.com/IzaDevelop"
                                target='_blank'
                                className="transition-colors duration-300 hover:text-purple-400"
                                title="Github"
                            >
                                <GithubLogo size={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/izabelle-santos-128703224/"
                                target='_blank'
                                className="transition-colors duration-300 hover:text-purple-400"
                                title="Linkedin"
                            >
                                <LinkedinLogo size={30} />
                            </a>
                            <a
                                href="https://wa.me/5511974518906?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento"
                                target='_blank'
                                className="transition-colors duration-300 hover:text-purple-400"
                                title="Whatsapp"
                            >
                                <WhatsappLogo size={30} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-5 pb-10 border-t">
                    <p className="text-sm">
                        Copyright © 2023 <a href="https://izadevelop.vercel.app" className="font-semibold transition-colors duration-300 hover:text-purple-400">Izabelle Develop</a>. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};