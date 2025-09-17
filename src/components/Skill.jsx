export default function Skill({ skill }) {
    return (
        <div className="group relative inline-block focus:outline-none focus:ring">
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-purple-300 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"
            ></span>
            <span className="relative inline-block border-2 border-purple-700 px-8 py-3 text-sm text-neutral-950 font-bold uppercase tracking-widest">
                {skill}
            </span>
        </div>
    )
}