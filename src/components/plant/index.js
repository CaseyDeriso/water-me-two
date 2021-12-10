import React from "react";

export default function plant({plantName, plantId, frequencyWater, amountWater}) {
  // do stuff with plant data. 
  function waterMe(frequencyWater, ID) {

    // perform dom manipulation to reset watering indicator
    console.log(`%{ID} has been watered!`)
};
	return (
		<div class="plant__clearfix" id={`plant${plantId}`}>
			<button class="water" onClick={waterMe(frequencyWater , plantId)}>
				water
			</button>
			<button class={`delete${plantId}`} onClick="Controller.removePlant(%id%)">
				X
			</button>
			<div class={plantName}> plantName </div>
			<div class={amountWater}> {amountWater} Cups </div>
			<img src="https://picsum.photos/100/50" />
		</div>
	);
}
