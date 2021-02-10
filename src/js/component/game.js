import React from "react";
import Board from "./board.js";
// import React, { Component } from "react";
// import { render } from "sass";

export function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}

	handleClick(i) {
		//Slice es para crear una copia del array squares para modificarlo en vez de modificar el existente
		const squares = this.state.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		//squares[i] = 'X';
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext
		});
	}

	render() {
		//const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
		const winner = calculateWinner(this.state.squares);
		let status;
		if (winner) {
			status = "Winner: " + winner;
		} else {
			status = "Next Player: " + (this.state.xIsNext ? "X" : "O");
		}

		return <div></div>;
	}
}
