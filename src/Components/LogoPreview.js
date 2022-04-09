import React, { Component } from "react";



export default class LogoPreview extends Component {

    render = () => {
        return (
            <div style={logoPreviewStyle}>
                <this.props.firstForm style={Object.assign({}, baseFormStyle, firstFormStyle)}/>
                <this.props.secondForm style={Object.assign({}, baseFormStyle, secondFormStyle)}/>
                <this.props.thirdForm style={Object.assign({}, baseFormStyle, thirdFormStyle)}/>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const baseFormStyle = {
    position: "absolute",
    width: "200px",
    height: "200px",
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
