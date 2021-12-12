import React from "react";

export default function plant({plantName, plantId, frequencyWater, amountWater}) {
  // do stuff with plant data. 
	const handleRemovePlant = (e) => {
		console.log("i was removed")
	}
  const waterMe = (frequencyWater, ID) => {
    // perform dom manipulation to reset watering indicator
    console.log(`%{ID} has been watered!`)
};
	return (
		<div className="plant__clearfix" id={`plant${plantId}`}>
			<button className="water" onClick={() => waterMe(frequencyWater , plantId)}>
				water
			</button>
			<button className={`delete${plantId}`} onClick={(e) => handleRemovePlant(e)}>
				X
			</button>
			<div className={plantName}> plantName </div>
			<div className={amountWater}> {amountWater} Cups </div>
			<img src="https://picsum.photos/100/50" />
		</div>
	);
}
