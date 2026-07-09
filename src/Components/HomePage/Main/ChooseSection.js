import ChooseSectionBox from "./ChooseSectionBox";
import TitleSections from "../TitleSections";

function ChooseSection() {
	return (
		<div className="p-12">
			<TitleSections>why foodies choose us</TitleSections>
			<div className="flex flex-row flex-wrap gap-10">
				<ChooseSectionBox />
				<ChooseSectionBox />
				<ChooseSectionBox />
			</div>
		</div>
	);
}

export default ChooseSection;
