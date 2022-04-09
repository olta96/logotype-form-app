import React, { Component } from "react";
import LogoPreview from "./LogoPreview";

export default class Build extends Component {

    render() {
        return (
            <div style={buildStyle}>
                <h1 style={titleStyle}>Bygg ihop din egen logotyp utifrån sloganen</h1>
                <LogoPreview
                    firstForm={this.props.firstForm}
                    secondForm={this.props.secondForm}
                    thirdForm={this.props.thirdForm}
                />
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const buildStyle = {
    width: "75%",
}

/** @type {CSSStyleDeclaration} */
const titleStyle = {
    textAlign: "center",
}
