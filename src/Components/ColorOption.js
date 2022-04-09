import React, { Component } from "react";

export default class ColorOption extends Component {


    getClassNames = () => {
        return this.props.isSelected ? "colorOption colorOptionSelected" : "colorOption";
    }

    render = () => {
        return (
            <div
                className={this.getClassNames()}
                onClick={() => this.props.handleColorOptionClick(this.props.forForm, this.props.id)}
                style={Object.assign({backgroundColor: this.props.color}, colorOptionStyle)}
            />
        );
    }

}

/** @type {CSSStyleDeclaration} */
const colorOptionStyle = {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    boxSizing: "border-box",
    margin: "5px",
}
