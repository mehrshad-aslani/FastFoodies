import Button from "@/UI/Button";

function JoinOurCommunityBox() {
	return (
		<div className="w-[80%] flex flex-row justify-self-center items-center justify-between px-5 py-3 bg-linear-to-r from-orange-500 to-orange-600 border-orange-500 rounded-2xl">
			<div className="flex flex-row items-center gap-x-10">
				<div className="flex justify-center items-center">Icon</div>
				<div className="flex flex-col items-start gap-y-3 capitalize text-lg">
					<h4>jion our community</h4>
					<p>jksadkjh sahdkjsahd kjas asjdhkjasdh sajk</p>
				</div>
			</div>
			<Button className="">join Now</Button>
		</div>
	);
}

export default JoinOurCommunityBox;
