import React from "react";
import { useUserContext } from "../utils/user.context";

export default function plant({ plantName, quantity, frequency }) {
	// const [state, dispatch] = useUserContext();

	// do stuff with plant data.
	const handleRemovePlant = (e) => {
		console.log("i was removed");
	};

	// const handleWaterTimeStamp = (plant) => {
	// 	dispatch({type: UPDATE_PLANT}, {plant: plantData})
	// }

	const waterMe = (frequencyWater, ID) => {
		// perform dom manipulation to reset watering indicator
		console.log(`%{ID} has been watered!`);
	};
	return (
		<div className="plant__clearfix" id={1}>
			<button className="water" onClick={() => waterMe()}>
				water
			</button>
			<button onClick={(e) => handleRemovePlant(e)}>X</button>
			<div> {plantName} </div>
			<div> {quantity} cups </div>
			<img src="https://picsum.photos/100/50" />
		</div>
	);
}
