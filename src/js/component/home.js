import React, { Component } from "react";
import { render } from "sass";
import Game from "./game.js";
import Square from "./square.js";
import board from "./board.js";
import { Component } from "react";

//create your first component
export class Home extends Component {
	render() {
		return (
			<div id="accordion" role="tablist">
				<div className="card">
					<div className="card-header" role="tab" id="headingOne">
						<h5 className="mb-0">TIC TAC TOE</h5>
					</div>

					<div
						id="collapseOne"
						className="collapse show"
						role="tabpanel"
						aria-labelledby="headingOne">
						<div className="card-body">
							<Game />
						</div>
					</div>
					<div className="card-footer" role="tab" id="headingTwo">
						<h5 className="mb-0">Turnos</h5>
					</div>
				</div>
			</div>
		);
	}
}
