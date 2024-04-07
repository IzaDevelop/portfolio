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
                            <p className="text-sm">
                                Desenvolvedora, construindo o Front-end de sites e aplicativos Web.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">
                            Contatos
                        </p>
                        {/* <div className="flex">
                            <p className="mr-1">Telefone:</p>
                            <a
                                href="tel:+55 11 97451-8906"
                                aria-label="Telefone"
                                title="Telefone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                +55 11 97451-8906
                            </a>
                        </div> */}
                        <div className="flex">
                            <p className="mr-1">E-mail:</p>
                            <a
                                href="mailto:izabelledevelop@gmail.com"
                                aria-label="Email"
                                title="Email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
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
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                title="Github"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/izabelle-santos-128703224/"
                                target='_blank'
                                className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                                title="Linkedin"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-5 pb-10 border-t">
                    <p className="text-sm">
                        © Copyright 2023 Izabelle Develop. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};