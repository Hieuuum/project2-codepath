import { useRef } from "react";
import "../App.css";

function Input(props) {
	const inputRef = useRef(null);
	return (
		<>
			<p className="no-paddling">Guess the English meaning</p>
			<input
				className="input"
				type="text"
				defaultValue="bar"
				inputRef={inputRef}
			/>
		</>
	);
}

export default Input;
