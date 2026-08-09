function Map() {
    return (
        <div className="mx-16 mt-16 overflow-hidden rounded-3xl border border-zinc-700 lg:mt-24">
            <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=New%20York&output=embed"
                loading="lazy"
                className="h-[280px] w-full sm:h-[350px] lg:h-[450px]"
            ></iframe>
        </div>
    );
}

export default Map;
