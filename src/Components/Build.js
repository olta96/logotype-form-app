import React, { Component } from "react";
import LogoPreview from "./LogoPreview";

export default class Build extends Component {

    render() {
        return (
            <div style={buildStyle}>
                <h1 style={titleStyle}>Bygg ihop din egen logotyp utifrån sloganen</h1>
                <div style={logoPreviewContainerStyle}>
                    <LogoPreview
                        handleFormSelectionForColoring={this.props.handleFormSelectionForColoring}
                        firstForm={this.props.firstForm}
                        secondForm={this.props.secondForm}
                        thirdForm={this.props.thirdForm}
                        currentFormColors={this.props.currentFormColors}
                    />
                </div>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const logoPreviewContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
}

/** @type {CSSStyleDeclaration} */
const buildStyle = {
    width: "60%",
}

/** @type {CSSStyleDeclaration} */
const titleStyle = {
    textAlign: "center",
}
