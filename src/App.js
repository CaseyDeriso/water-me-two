import logo from "./logo.svg";
import "./App.css";
import { Plant, Hero, Dashboard } from "./components"
import React, { useContext, useState, useEffect } from "react";
import {UserProvider} from "./utils/user.context";

function App() {
  return (
    <React.Fragment>
			<UserProvider>
				<Hero/>
				<Dashboard/>
			</UserProvider>
    </React.Fragment>
  );
}

export default App;
