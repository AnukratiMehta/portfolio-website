import React, { useState } from "react";
import "./Jigsaw.css";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../assets/Me.jpeg";

function Jigsaw() {
	const [text, setText] = useState("Unpuzzle the pieces!");
	
	const set = () => {
		setText("Congratulations!");
	};
	
	return (
		<div className="jigsaw-container">
			<h2 className={`tag ${text === "Congratulations!" ? "congrats" : ""}`}>{text}</h2>
			<JigsawPuzzle
				imageSrc={img}
				rows={3}
				columns={3}
				onSolved={set}
				className="jigsaw-puzzle"
			/>
		</div>
	);
}

export default Jigsaw;
