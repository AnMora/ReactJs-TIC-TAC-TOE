import React from "react";

export class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
    }

    render(){
        return (
            //Esto es para rellenar el componente de Square con una "X" cuando le damos click en él
            // <button className="square" onClick={function() {alert('click'); }}>
            //     {this.props.value}
            // </button>
            //Se cambia el function por un arrow(funcion flecha)
            // <button className="square" onClick={() => {alert('click'); }}>
            //     {this.state.value}
            // </button>
            <button 
                className="square" 
                onClick={() => this.setState({value: 'X'})}
            >
                {this.state.value}
            </button>
        );
    }
}