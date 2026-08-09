function JustBeginningCard() {
    return (
        <div className="mx-auto mt-16 w-full max-w-lg rounded-2xl border border-orange-600 p-6 shadow-[0_0_25px_rgba(255,77,0,0.35)] sm:p-10">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-orange-600 text-xl text-orange-500 shadow-[0_0_15px_3px_rgba(255,77,0,0.5)]">
                ❤️
            </div>

            <h2 className="mb-3 text-center text-xl font-semibold">
                And This Is Just the Beginning
            </h2>

            <p className="text-center text-sm leading-7 text-gray-400">
                Every recipe tells a story, and we're excited to keep creating
                unforgettable food experiences with you. Thank you for being
                part of our journey.
            </p>
        </div>
    );
}

export default JustBeginningCard;
