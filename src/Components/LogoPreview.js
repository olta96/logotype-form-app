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
                            bottom: (100 + this.props.currentFormState.firstForm.top) + "px",
                            left: this.props.currentFormState.firstForm.left + "px",
                            zIndex: this.props.currentFormState.firstForm.zIndex,
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
                            bottom: (100 + this.props.currentFormState.secondForm.top) + "px",
                            left: this.props.currentFormState.secondForm.left + "px",
                            zIndex: this.props.currentFormState.secondForm.zIndex,
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
                            bottom: (125 + this.props.currentFormState.thirdForm.top) + "px",
                            left: (75 + this.props.currentFormState.thirdForm.left) + "px",
                            zIndex: this.props.currentFormState.thirdForm.zIndex,
                        }
                    )}
                />
                <this.props.fourthForm
                    className="logoPreviewForm"
                    style={Object.assign({},
                        baseFormStyle,
                        thirdFormStyle,
                        {
                            fill: this.props.currentFormState.fourthForm.color,
                            bottom: (125 + this.props.currentFormState.fourthForm.top) + "px",
                            left: (75 + this.props.currentFormState.fourthForm.left) + "px",
                            zIndex: this.props.currentFormState.fourthForm.zIndex,
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
