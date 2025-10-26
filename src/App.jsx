import { useState, useRef } from "react";
import Card from "./components/Card";
import "./App.css";
import vocab from "./data/vocab";
import Input from "./components/Input";

function App() {
	const arrIndex = vocab.length;
	const [index, setIndex] = useState(0);
	const [userInput, setUserInput] = useState("");
	const [isRight, setIsRight] = useState(null);
	const inputRef = useRef(null);

	function checkAns() {
		if (userInput === vocab[index].meaning) {
			setIsRight(true);
		} else {
			setIsRight(false);
		}
	}

	function handleNext() {
		if (index < arrIndex - 1) {
			setIndex((prevIndex) => {
				return prevIndex + 1;
			});
		}
	}

	function handlePrev() {
		if (index >= 0) {
			setIndex((prevIndex) => {
				return prevIndex - 1;
			});
		}
	}

	return (
		<>
			<h1>Chinese Vocabulary</h1>
			<h2>Let's learn new words together!</h2>
			<p>Number of cards: {arrIndex}</p>
			<Card key={index} vocab={vocab[index]} />
			<p className="no-paddling">Guess the English meaning</p>
			<input
				className={`input ${
					isRight !== null && (isRight ? "green-border" : "red-border")
				}`}
				type="text"
				defaultValue="bar"
				inputRef={inputRef}
				onChange={(e) => setUserInput(e.target.value)}
			/>
			<button className="flex next-button" onClick={checkAns}>
				Submit
			</button>
			<button
				disabled={index <= 0}
				className="next-button"
				onClick={handlePrev}
			>
				Previous
			</button>
			<button
				disabled={index >= arrIndex}
				className="next-button"
				onClick={handleNext}
			>
				Next
			</button>
		</>
	);
}

export default App;
