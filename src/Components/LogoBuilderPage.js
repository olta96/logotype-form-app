import React, { Component } from "react";
import SideBar from "./SideBar";
import Build from "./Build";

export default class LogoBuilderPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentFormState: this.props.currentFormState,
            colors: this.props.logoBuilderProps.colors,
        }
    }

    handleFormSelection = (forForm, formId, chosenForm) => {
        this.setState({
            currentFormState: {
                ...this.state.currentFormState,
                [forForm]: {
                    ...this.state.currentFormState[forForm],
                    chosenForm: chosenForm,
                    formId: formId,
                }
            }
        });
    }

    handleColorOptionClick = (forForm, id) => {
        this.setState({
            currentFormState: {
                ...this.state.currentFormState,
                [forForm]: {
                    ...this.state.currentFormState[forForm],
                    colorId: id,
                    color: this.state.colors[id],
                }
            }
        });
    }

    positionSliderChange = (value, forForm, axis) => {
        this.setState({
            currentFormState: {
                ...this.state.currentFormState,
                [forForm]: {
                    ...this.state.currentFormState[forForm],
                    [axis]: value,
                }
            }
        });
    }

    zIndexRadioChange = (value, forForm) => {
        this.setState({
            currentFormState: {
                ...this.state.currentFormState,
                [forForm]: {
                    ...this.state.currentFormState[forForm],
                    zIndex: value,
                }
            }
        });
    }

    render() {
        return (
            <main style={mainStyle}>
                <SideBar
                    colors={this.state.colors}
                    handleFormSelection={this.handleFormSelection}
                    handleColorOptionClick={this.handleColorOptionClick}
                    currentFormState={this.state.currentFormState}
                    positionSliderChange={this.positionSliderChange}
                    zIndexRadioChange={this.zIndexRadioChange}
                />
                <Build
                    handleLogoBuilderComplete={() => this.props.handleLogoBuilderComplete("vattenfallLogoBuilder", this.state.currentFormState)}
                    currentFormState={this.state.currentFormState}
                    slogan={this.props.logoBuilderProps.slogan}
                />
            </main>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const mainStyle = {
    display: "flex",
}
