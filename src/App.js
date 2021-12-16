import logo from "./logo.svg";
import "./App.css";
import { Plant, Hero } from "./components"
import React, { useContext, useState, useEffect } from "react";
import {UserProvider} from "./utils/user.context";

function App() {
  return (
    <React.Fragment>
			<UserProvider>
				<Hero/>
				<div className="bottom">
					<div className="plant__container">
					</div>
				</div>
			</UserProvider>
    </React.Fragment>
  );
}

export default App;
