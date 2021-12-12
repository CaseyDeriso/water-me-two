import React from "react";

export default function plant(props) {
  // do stuff with plant data. 
	const handleRemovePlant = (e) => {
		console.log("i was removed")
	}
  const waterMe = (frequencyWater, ID) => {
    // perform dom manipulation to reset watering indicator
    console.log(`%{ID} has been watered!`)
};
	return (
		<div className="plant__clearfix" id={1}>
			<button className="water" onClick={() => waterMe()}>
				water
			</button>
			<button onClick={(e) => handleRemovePlant(e)}>
				X
			</button>
			<div> plantName </div>
			<div> yo mama Cups </div>
			<img src="https://picsum.photos/100/50" />
		</div>
	);
}
