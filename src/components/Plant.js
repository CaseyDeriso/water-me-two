import React, { useEffect } from "react";
import { useUserContext } from "../utils/user.context";

import { isPast } from "date-fns";

import { DELETE_PLANT } from "../utils/actions";


export default function Plant({ plantName, quantity, timestamp }) {
	const [state, dispatch] = useUserContext();
	const {plants} = state;
	const currentPlant = plants.filter(plant => plant.plantName === plantName)[0];

	useEffect(() => {
		if (isPast(timestamp)) {
			console.log('time to water', timestamp)
		}
	}, [])

	// do stuff with plant data.
	const handleRemovePlant = (e) => {
		dispatch({type: DELETE_PLANT, plant: currentPlant});
	};

	// const handleWaterTimeStamp = (plant) => {
	// 	dispatch({type: UPDATE_PLANT}, {plant: plantData})
	// }

	const waterMe = (frequencyWater, ID) => {
		// perform dom manipulation to reset watering indicator
		console.log(`plant has been watered!`);
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
