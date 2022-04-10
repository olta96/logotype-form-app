import React, { Component } from "react";



export default class LogoPreview extends Component {

    shouldFill = (form) => {
        return !this.props.noFill.includes(form.chosenForm)
    }

    render = () => {
        return (
            <div style={logoPreviewStyle}>
                {
                    Object.values(this.props.currentFormState).map(form =>
                        <form.chosenForm
                            className={this.shouldFill(form) ? "logoPreviewFormNoStroke": "logoPreviewFormWithStroke"}
                            style={Object.assign({},
                                formStyle,
                                formStyles[form.name],
                                {
                                    fill: this.shouldFill(form) ? form.color : "none",
                                    stroke: this.shouldFill(form) ? "none" : "black",
                                    bottom: (form.offsetBottom + form.top) + "px",
                                    left: (form.offsetLeft + form.left) + "px",
                                    zIndex: form.zIndex,
                                },
                            )}
                        />
                    )
                }
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const formStyle = {
    position: "absolute",
}

const formStyles = {
    firstForm: {

    },
    secondForm: {
        width: "200px"
    },
    thirdForm: {
        width: "50px",
        height: "50px",
    },
    fourthForm: {
        width: "50px",
        height: "50px",
    },
}

/** @type {CSSStyleDeclaration} */
const logoPreviewStyle = {
    width: "200px",
    height: "200px",
    position: "relative",
}
