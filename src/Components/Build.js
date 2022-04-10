import React, { Component } from "react";
import LogoPreview from "./LogoPreview";
import Button from "@mui/material/Button";

export default class Build extends Component {

    render() {
        return (
            <div style={buildStyle}>
                <h1 style={titleStyle}>Bygg ihop din egen logotyp utifrån varumärkets slogan</h1>
                <h2 style={Object.assign({ fontStyle: "italic" }, titleStyle)}>"{this.props.slogan}"</h2>
                <div style={logoPreviewContainerStyle}>
                    <LogoPreview
                        currentFormState={this.props.currentFormState}
                    />
                </div>
                <div style={buttonContainerStyle}>                    
                    <Button
                        variant="contained"
                        color="success"
                        size="large"
                        onClick={this.props.handleLogoBuilderComplete}
                    >
                        Klar
                    </Button>
                </div>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const buttonContainerStyle = {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center",
}

/** @type {CSSStyleDeclaration} */
const logoPreviewContainerStyle = {
    marginTop: "25px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
}

/** @type {CSSStyleDeclaration} */
const buildStyle = {
    width: "70%",
}

/** @type {CSSStyleDeclaration} */
const titleStyle = {
    textAlign: "center",
    fontWeight: "normal",
}
