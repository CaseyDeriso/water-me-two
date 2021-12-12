import logo from "./logo.svg";
import "./App.css";
import { Plant, Hero } from "./components"
import React from "react";

function App() {
  return (
    <React.Fragment>
			<Hero />
      <div className="bottom">
        <div className="plant__container">
          <Plant />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
