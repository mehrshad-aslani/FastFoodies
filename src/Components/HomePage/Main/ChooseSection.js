import ChooseSectionBox from "./ChooseSectionBox";
import TitleSections from "../TitleSections";

import {
    HiOutlineLightningBolt,
    HiOutlineShieldCheck,
    HiOutlineClock,
} from "react-icons/hi";

export const features = [
    {
        id: 1,
        icon: HiOutlineLightningBolt,
        title: "Fast Delivery",
        description:
            "Get your favorite meals delivered quickly while they're still fresh and delicious.",
    },
    {
        id: 2,
        icon: HiOutlineShieldCheck,
        title: "Premium Quality",
        description:
            "Every recipe is carefully selected to ensure the best taste and highest quality.",
    },
    {
        id: 3,
        icon: HiOutlineClock,
        title: "Easy to Cook",
        description:
            "Simple step-by-step recipes that anyone can prepare in just a few minutes.",
    },
];

function ChooseSection() {
    return (
        <section className="mx-auto my-24 w-[80%]">
            <TitleSections>Why Foodies Choose Us</TitleSections>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
                {features.map((feature) => (
                    <ChooseSectionBox key={feature.id} feature={feature} />
                ))}
            </div>
        </section>
    );
}

export default ChooseSection;
