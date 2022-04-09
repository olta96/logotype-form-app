import React, { Component } from "react";



export default class LogoPreview extends Component {

    render = () => {
        return (
            <div style={logoPreviewStyle}>
                <this.props.firstForm
                    className="logoPreviewForm"
                    style={Object.assign({}, baseFormStyle, firstFormStyle, { fill: this.props.currentFormColors.firstForm.color })}
                />
                <this.props.secondForm
                    className="logoPreviewForm"
                    style={Object.assign({}, baseFormStyle, secondFormStyle, { fill: this.props.currentFormColors.secondForm.color })}
                />
                <this.props.thirdForm
                    className="logoPreviewForm"
                    style={Object.assign({}, baseFormStyle, thirdFormStyle, { fill: this.props.currentFormColors.thirdForm.color })}
                />
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const baseFormStyle = {
    position: "absolute",
    stroke: "none",
}

const firstFormStyle = {

}

const secondFormStyle = {
    top: "100px",
}

const thirdFormStyle = {
    width: "50px",
    height: "50px",
}

/** @type {CSSStyleDeclaration} */
const logoPreviewStyle = {
    width: "200px",
    height: "400px",
    position: "relative",
}
