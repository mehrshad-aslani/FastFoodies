function ChooseSectionBox({ feature }) {
    const Icon = feature.icon;

    return (
        <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.12)]">
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white">
                <Icon className="text-4xl" />
            </div>

            {/* Title */}
            <h3 className="mt-8 text-2xl font-bold text-white">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-4 leading-7 text-zinc-400">
                {feature.description}
            </p>
        </div>
    );
}

export default ChooseSectionBox;
