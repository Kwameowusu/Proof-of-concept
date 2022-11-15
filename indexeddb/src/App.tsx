import { useState } from "react";
import HomePage from "./page/home/HomePage";

import "./style/global/App.css";

function App() {
	return (
		<>
			<div className="indexdb-container">
				<HomePage />
			</div>
		</>
	);
}

export default App;
