import React, { Component } from "react";

export default class FormOption extends Component {

    state = {
        isHovered: false,
    }

    getClassNames = () => {
        return this.props.isSelected ? "baseFormOption baseFormOptionSelected" : "baseFormOption";
    }

    getStyle = () => {
        /** @type {CSSStyleDeclaration} */
        const style = Object.assign({}, formOptionStyle);
        
        if (this.props.isSelected) {
            style.backgroundColor = "#ccc";
        }
        
        if (this.state.isHovered) {
            style.backgroundColor = "#aaa";
        }

        return style;
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render = () => {
        return (
            <this.props.formOption
                className={this.getClassNames()}
                style={this.getStyle()}
                onClick={() => this.props.handleClick(this.props.id)}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }

}

/** @type {CSSStyleDeclaration} */
const formOptionStyle = {
    width: "80px",
    height: "80px",
    marginTop: "15px",
    boxSizing: "border-box",
    borderRadius: "5%",
    padding: "5px",
}
