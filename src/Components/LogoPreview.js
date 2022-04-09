import React, { Component } from "react";



export default class LogoPreview extends Component {



    render = () => {
        return (
            <div style={logoPreviewStyle}>
                <this.props.firstForm
                    className="logoPreviewForm"
                    style={Object.assign({},
                        baseFormStyle,
                        firstFormStyle,
                        {
                            fill: this.props.currentFormState.firstForm.color,
                            top: this.props.currentFormState.firstForm.top + "px",
                            left: this.props.currentFormState.firstForm.left + "px",
                        }
                    )}
                />
                <this.props.secondForm
                    className="logoPreviewForm"
                    style={Object.assign({},
                        baseFormStyle,
                        secondFormStyle,
                        {
                            fill: this.props.currentFormState.secondForm.color,
                            top: this.props.currentFormState.secondForm.top + "px",
                            left: this.props.currentFormState.secondForm.left + "px",
                        }
                    )}
                />
                <this.props.thirdForm
                    className="logoPreviewForm"
                    style={Object.assign({},
                        baseFormStyle,
                        thirdFormStyle,
                        {
                            fill: this.props.currentFormState.thirdForm.color,
                            top: this.props.currentFormState.thirdForm.top + "px",
                            left: this.props.currentFormState.thirdForm.left + "px",
                        }
                    )}
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
    width: "200px"
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
