"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";

const TimeRange = () => {
    const min = 10;
    const max = 120;

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const [values, setValues] = useState([min, max]);

    useEffect(() => {
        const minTime = Number(searchParams.get("minTime")) || min;
        const maxTime = Number(searchParams.get("maxTime")) || max;

        setValues([minTime, maxTime]);
    }, [searchParams]);

    function handleTime(value) {
        setValues(value);

        const params = new URLSearchParams(searchParams);

        params.set("minTime", value[0]);
        params.set("maxTime", value[1]);

        router.push(`${pathname}?${params.toString()}`, {
            scroll: false,
        });
    }

    return (
        <div className="my-5 w-full px-3">
            <Range
                values={values}
                step={5}
                min={min}
                max={max}
                onChange={handleTime}
                renderTrack={({ props, children }) => (
                    <div
                        {...props}
                        className="relative h-2 w-full rounded-full bg-zinc-700"
                        style={{
                            ...props.style,
                            background: getTrackBackground({
                                values,
                                colors: ["#3f3f46", "#f97316", "#3f3f46"],
                                min,
                                max,
                            }),
                        }}
                    >
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div
                        {...props}
                        className="h-5 w-5 rounded-full bg-orange-500"
                    />
                )}
            />

            <div className="mt-3 flex justify-between text-sm text-gray-300">
                <span>{values[0]} min</span>
                <span>{values[1]} min</span>
            </div>
        </div>
    );
};

export default TimeRange;
