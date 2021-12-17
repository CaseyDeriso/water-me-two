import "./App.css";
import { Hero, Dashboard } from "./components";
import React from "react";
import { UserProvider } from "./utils/user.context";

function App() {
	return (
		<React.Fragment>
			<UserProvider>
				<Hero />
				<Dashboard />
			</UserProvider>
		</React.Fragment>
	);
}

export default App;
