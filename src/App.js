import { useState } from "react";
import { CompA } from "./Comp-A";
import { CompB } from "./comp-B";

function App() {
	// Define the state value
	const [clickCount, setClickCount] = useState(0);
	return (
		<div className="App">
			{/* control the state value with setClickCount function */}
			<button onClick={() => setClickCount(currentCount => currentCount + 1)}>
				Click to Count
			</button>

			{/* pass down the state value as a prop to both components */}
			<CompA countA={clickCount} />
			<CompB countB={clickCount} />
		</div>
	);
}

export default App;
