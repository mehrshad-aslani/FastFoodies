const steps = [
    {
        year: "2021",
        title: "The Beginning",
        desc: "Our journey started with a simple kitchen, a passion for cooking, and a dream to share delicious recipes.",
        icon: "🌱",
    },
    {
        year: "2022",
        title: "100+ Recipes",
        desc: "We published over 100 carefully tested recipes loved by home cooks around the world.",
        icon: "👨‍🍳",
    },
    {
        year: "2023",
        title: "Growing Community",
        desc: "Thousands of food lovers joined us, creating a vibrant community built around great meals.",
        icon: "👥",
    },
    {
        year: "2024",
        title: "Today",
        desc: "We continue inspiring people every day with new recipes, fresh ideas, and unforgettable food experiences.",
        icon: "🔥",
    },
];
export default function Timeline() {
    return (
        <section className="mx-auto w-[90%] bg-transparent px-4 py-16 text-center sm:px-5 lg:w-[80%]">
            {/* Timeline Icons */}
            <div className="mb-10 hidden items-center justify-center lg:flex">
                {steps.map((step, i) => (
                    <div key={i} className="flex items-center">
                        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-orange-600 bg-neutral-950 text-2xl shadow-[0_0_20px_4px_rgba(255,77,0,0.5)]">
                            {step.icon}
                        </div>

                        {i !== steps.length - 1 && (
                            <div className="h-0.5 w-52 bg-orange-600 shadow-[0_0_10px_2px_rgba(255,77,0,0.6)]"></div>
                        )}
                    </div>
                ))}
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-5">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="w-full max-w-[250px] cursor-pointer rounded-xl border border-neutral-800 bg-neutral-900 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.12)]"
                    >
                        <div className="mb-2 text-sm text-orange-500">
                            {step.year}
                        </div>

                        <h3 className="mb-3 text-lg font-semibold">
                            {step.title}
                        </h3>

                        <p className="text-xs leading-7 text-gray-400">
                            {step.desc}
                        </p>

                        <div className="mx-auto mt-4 h-0.5 w-8 bg-orange-600"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
