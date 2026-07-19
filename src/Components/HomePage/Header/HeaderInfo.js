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
        <div className="absolute -bottom-8 left-1/2 flex w-[90%] -translate-x-1/2 -translate-y-1/2 transform flex-row items-center justify-around rounded-2xl px-8 py-6 backdrop-blur-lg">
            {stats.map((stat, index) => (
                <div key={index} className="flex flex-row items-center gap-x-5">
                    {stat.icon}
                    <div className="flex flex-col gap-y-2">
                        <h4 className="text-2xl font-bold">{stat.value}</h4>
                        <p className="capitalize">{stat.label}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HeaderInfo;
