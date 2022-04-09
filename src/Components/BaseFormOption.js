import React, { Component } from "react";

export default class BaseFormOption extends Component {

    state = {
        isHovered: false,
    }

    handleClick = () => {
        this.props.handleClick(this.props.id);
    }

    getClassNames = () => {
        console.log(this.props.isSelected)
        return this.props.isSelected ? "baseFormOption baseFormOptionSelected" : "baseFormOption";
    }

    getStyle = () => {
        /** @type {CSSStyleDeclaration} */
        const style = Object.assign({}, baseFormOptionStyle);

        if (this.props.isSelected) {
            // style.fill = "teal";
            style.backgroundColor = "#ccc";
        }
        
        if (this.state.isHovered)
            style.backgroundColor = "#aaa";

        return style;
    }

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    }

    render = () => {
        console.log(this.props.src)
        return (
            <this.props.baseForm
                className={this.getClassNames()}
                style={this.getStyle()}
                onClick={this.handleClick}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            />
        );
    }

}

/** @type {CSSStyleDeclaration} */
const baseFormOptionStyle = {
    width: "80px",
    height: "80px",
    marginTop: "15px",
    boxSizing: "border-box",
    borderRadius: "5%",
    padding: "5px",
}
