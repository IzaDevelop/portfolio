export default function Project({cta, link, image, title, description}) {
    return (
        <a href={link} target="_blank" className="group relative block overflow-hidden lg:col-span-2 dark:border-none border-2 shadow-md rounded">
            <img
                src={image}
                alt=""
                className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className="relative bg-purple-50 dark:bg-neutral-950 p-6">
                <h3 className="mt-1.5 text-lg font-medium text-gray-900 dark:text-white">{title}</h3>

                <p className="mt-1.5 line-clamp-3 text-gray-700 dark:text-zinc-300">{description}</p>

                <form className="mt-4 flex gap-4">
                    <button
                        type="button"
                        className="block w-full rounded bg-purple-800 hover:bg-purple-950 transition-colors duration-500 px-4 py-3 font-medium text-white"
                    >
                       {cta}
                    </button>
                </form>
            </div>
        </a>
    )
}