import React from "react";
import background from "../assets/photos/back.jpg";
import NewPlantForm from "./NewPlantForm";

function Hero() {
	return (
		<div className="top" style={{ backgroundImage: `url(${background})` }}>
			<div className="jumbotron">
				<div className="title">
					<h1> Water Me!</h1>
					<p>
						Add your plants to your profile page along with the amount
						<br />
						water each pot needs and how often you water it.
					</p>
				</div>
			<NewPlantForm />
			</div>
		</div>
	);
}

export default Hero;
