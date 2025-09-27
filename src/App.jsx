import { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import vocab from "./data/vocab";

function App() {
	const arrIndex = vocab.length;
	const [index, setIndex] = useState(Math.floor(Math.random() * arrIndex));

	function randomize() {
		setIndex(Math.floor(Math.random() * arrIndex));
	}

	return (
		<>
			<h1>Chinese Vocabulary</h1>
			<h2>Let's learn new words together!</h2>
			<p>Number of cards: {arrIndex}</p>
			<Card key={index} vocab={vocab[index]} />
			<button className="next-button" onClick={randomize}>
				Next
			</button>
		</>
	);
}

export default App;
