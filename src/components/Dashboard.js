import React from "react";
import { Plant } from ".";
import { useUserContext } from "../utils/user.context";

export default function Dashboard() {
	const [state, dispatch] = useUserContext();
	const { plants } = state;

	return (
		<div className="bottom">
			<div className="plant__container">
				{plants.length
					? plants.map((plant, idx) => <Plant {...plant} key={idx} />)
					: ""}
			</div>
		</div>
	);
}
