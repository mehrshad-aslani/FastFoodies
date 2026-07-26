function ChooseSectionBox({ feature }) {
    const Icon = feature.icon;

    return (
        <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.12)] sm:p-8">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white sm:h-16 sm:w-16">
                <Icon className="text-3xl sm:text-4xl" />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-bold text-white sm:mt-8 sm:text-2xl">
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
