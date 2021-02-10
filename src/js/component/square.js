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
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
        );
    }
}