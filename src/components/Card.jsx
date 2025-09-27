import { useState } from "react";
import "../App.css";

function Card(props) {
	const [isClicked, setIsClicked] = useState(false);

	function handleClick() {
		setIsClicked(!isClicked);
	}

	return (
		<div onClick={handleClick} className="card">
			<p className="no-paddling">
				{!isClicked ? props.vocab.word : props.vocab.pinyin}
			</p>
			<p className="no-paddling">{isClicked && props.vocab.meaning}</p>
		</div>
	);
}

export default Card;
