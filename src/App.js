import logo from "./logo.svg";
import "./App.css";
import Plant from "./components/plant";
import background from "./assets/photos/back.jpg"

function App() {
	return (
		<body>
			<div class="top" style={{backgroundImage: `url(${background})`}}>
				<div class="jumbotron">
					<div class="title">
						<h1> Water Me!</h1>
						<p>
							Add your plants to your profile page along with the amount
							<br />
							water each pot needs and how often you water it.
						</p>
					</div>

					<div class="add">
						<div class="add__container">
							<input
								type="text"
								placeholder="Plant name."
								class="pName"
								autocomplete="off"
							/>
							<input
								type="text"
								placeholder="How much water?"
								class="aWater"
								autocomplete="off"
							/>
							<input
								type="text"
								placeholder="How often?"
								class="often"
								autocomplete="off"
							/>
							<button class="add___btn" onclick="clickAdd()">
								add
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="bottom">
				<div class="plant__container"><Plant></Plant></div>
			</div>
		</body>
	);
}

export default App;
