import React, { Component } from "react";

export default class ColorOption extends Component {

    handleClick = () => {
        this.props.handleClick(this.props.id);
    }

    getClassNames = () => {
        console.log(this.props.isSelected)
        return this.props.isSelected ? "colorOption colorOptionSelected" : "colorOption";
    }

    render = () => {
        return (
            <div
                className={this.getClassNames()}
                style={Object.assign({backgroundColor: this.props.color}, colorOptionStyle)}
                onClick={this.handleClick}>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const colorOptionStyle = {
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    marginTop: "15px",
    boxSizing: "border-box",
}
