import React from "react";

export class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i){
        //Slice es para crear una copia del array squares para modificarlo en vez de modificar el existente
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }
    
    renderSquare(i){
        //return <Square value={i} />;
        return <Square value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />;
    };
}