import { Code, Devices, GameController, Newspaper, Signature, PersonArmsSpread, Headset, Wrench, DesktopTower } from "@phosphor-icons/react";

export default function Task({icon, title, text }) {
    return (
        <div className="relative p-px overflow-hidden transition transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
            <div className="absolute bottom-0 left-0 w-full h-1 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 left-0 w-1 h-full origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="absolute top-0 left-0 w-full h-1 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            <div className="absolute bottom-0 right-0 w-1 h-full origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
            <div className="relative p-5 text-black dark:text-white rounded">
                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                    <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 rounded-full bg-purple-400 text-black lg:mb-0">
                       {icon === 'code' && <Code size={25} />}
                       {icon === 'device' && <Devices size={25} />}
                       {icon === 'wrench' && <Wrench size={25} />}
                       {icon === 'headset' && <Headset size={25} />}
                       {icon === 'desktop' && <DesktopTower  size={25} />}
                       {icon === 'person' && <PersonArmsSpread size={25} />}
                       {icon === 'marketing' && <Newspaper size={25} />}
                       {icon === 'signature' && <Signature size={25} />}
                       {icon === 'game' && <GameController size={25} />}
                    </div>
                    <h6 className="font-semibold leading-5">{title}</h6>
                </div>
                <p className="mb-2 text-sm">{text}</p>
            </div>
        </div>
    );
};