import logo from "./logo.svg";
import "./App.css";
import { Plant, Hero } from "./components"
import React, { useContext } from "react";

export const PlantContext = React.createContext(undefined);

export const usePlantContext = () => {
	const plantData = useContext(PlantContext)
	return plantData;
}



function App() {
  return (
    <React.Fragment>
			<PlantContext.Provider value={{name: null, frequency: null, amount: null}}>
				<Hero />
				<div className="bottom">
					<div className="plant__container">
						<Plant />
					</div>
				</div>
			</PlantContext.Provider>
    </React.Fragment>
  );
}

export default App;
