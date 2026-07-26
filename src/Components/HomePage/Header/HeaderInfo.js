import { HiUserGroup, HiStar, HiShoppingCart } from "react-icons/hi";

function HeaderInfo() {
    const stats = [
        {
            icon: <HiUserGroup className="text-3xl text-orange-500" />,
            value: 500,
            label: "Happy Customers",
        },
        {
            icon: <HiStar className="text-3xl text-orange-500" />,
            value: 4.9,
            label: "Average Rating",
        },
        {
            icon: <HiShoppingCart className="text-3xl text-orange-500" />,
            value: 1500,
            label: "Orders Placed",
        },
        {
            icon: <HiShoppingCart className="text-3xl text-orange-500" />,
            value: 1500,
            label: "Orders Placed",
        },
    ];

    return (
        <div className="absolute -bottom-2 left-1/2 w-[95%] -translate-x-1/2 rounded-2xl px-4 py-5 backdrop-blur-lg sm:w-[90%] sm:px-6 sm:py-6 lg:-bottom-8 lg:-translate-y-1/2 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:items-center lg:justify-around">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-row items-center justify-center gap-x-3 lg:gap-x-5"
                    >
                        {stat.icon}

                        <div className="flex flex-col gap-y-1 lg:gap-y-2">
                            <h4 className="text-lg font-bold lg:text-2xl">
                                {stat.value}
                            </h4>

                            <p className="text-xs capitalize lg:text-base">
                                {stat.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeaderInfo;
