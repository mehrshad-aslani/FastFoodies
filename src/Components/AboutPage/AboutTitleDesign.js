function AboutTitleDesign({ children }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-base tracking-[5px] text-orange-500/60 uppercase">
                {children}
            </p>

            <div className="relative h-8 w-36">
                <div className="absolute top-4 left-0 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                <div className="absolute top-[18px] left-1 h-0.5 w-10 bg-orange-500"></div>
                <div className="absolute top-[13px] left-11 h-3 w-3 rotate-45 border border-orange-500"></div>
                <div className="absolute top-[9px] left-[62px] h-5 w-5 rotate-45 border border-orange-500"></div>
                <div className="absolute top-[13px] right-11 h-3 w-3 rotate-45 border border-orange-500"></div>
                <div className="absolute top-[18px] right-1 h-0.5 w-10 bg-orange-500"></div>
                <div className="absolute top-4 right-0 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
            </div>
        </div>
    );
}

export default AboutTitleDesign;
