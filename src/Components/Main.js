import React, { Component } from "react";
import SideBar from "./SideBar";
import Build from "./Build";

import { ReactComponent as Bottom_semicircle } from "../svgs/Bottom_semicircle.svg";
import { ReactComponent as Circle } from "../svgs/Circle.svg";
import { ReactComponent as Sunrise } from "../svgs/Sunrise.svg";
import { ReactComponent as Top_semicircle } from "../svgs/Top_semicircle.svg";
import { ReactComponent as Waves } from "../svgs/Waves.svg";
import { ReactComponent as None } from "../svgs/None.svg";
import { ReactComponent as Star } from "../svgs/Star.svg";
import { ReactComponent as Waterdrop } from "../svgs/Waterdrop.svg";
import { ReactComponent as Sun } from "../svgs/Sun.svg";
import { ReactComponent as Tree } from "../svgs/Tree.svg";
import { ReactComponent as Leaf } from "../svgs/Leaf.svg";

const colors = [
    "#F84949",
    "#FA12C7",
    "#F7DF03",
    "#03E8F7",
    "#03DF0C",
    "#9903DF",
    "#3364B0",
    "#FF9900",
];

const firstForms = [
    Top_semicircle,
    Bottom_semicircle,
    Sunrise,
    Circle,
];

const secondForms = [
    Bottom_semicircle,
    Top_semicircle,
    Waves,
    Circle,
];

const thirdForms = [
    None,
    Star,
    Waterdrop,
    Sun,
    Tree,
    Leaf,
];

export default class Main extends Component {

    state = {
        firstForm: firstForms[0],
        secondForm: secondForms[0],
        thirdForm: thirdForms[0],
        fourthForm: thirdForms[0],
        currentFormState: {
            firstForm: {
                colorId: 0,
                color: colors[0],
                top: 200,
                left: 100,
                zIndex: 1,
            },
            secondForm: {
                colorId: 0,
                color: colors[0],
                top: 100,
                left: 100,
                zIndex: 1,
            },
            thirdForm: {
                colorId: 0,
                color: colors[0],
                top: 100,
                left: 100,
                zIndex: 1,
            },
            fourthForm: {
                colorId: 0,
                color: colors[0],
                top: 200,
                left: 200,
                zIndex: 1,
            },
        },
    }

    handleFormSelection = (formId) => {
        if (formId < firstForms.length)
            this.setState({ firstForm: firstForms[formId] });
        else if (formId < firstForms.length + secondForms.length)
            this.setState({ secondForm: secondForms[formId - firstForms.length] });
        else if (formId < firstForms.length + secondForms.length + thirdForms.length)
            this.setState({ thirdForm: thirdForms[formId - firstForms.length - secondForms.length] });
        else if (formId < firstForms.length + secondForms.length + thirdForms.length + thirdForms.length)
            this.setState({ fourthForm: thirdForms[formId - firstForms.length - secondForms.length - thirdForms.length] });
    }

    handleColorOptionClick = (forForm, id) => {
        this.setState({
            currentFormState: {
                ...this.state.currentFormState,
                [forForm]: {
                    ...this.state.currentFormState[forForm],
                    colorId: id,
                    color: colors[id],
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
                    colors={colors}
                    firstForms={firstForms}
                    secondForms={secondForms}
                    thirdForms={thirdForms}
                    handleFormSelection={this.handleFormSelection}
                    handleColorOptionClick={this.handleColorOptionClick}
                    currentFormState={this.state.currentFormState}
                    positionSliderChange={this.positionSliderChange}
                    zIndexRadioChange={this.zIndexRadioChange}
                />
                <Build
                    firstForm={this.state.firstForm}
                    secondForm={this.state.secondForm}
                    thirdForm={this.state.thirdForm}
                    fourthForm={this.state.fourthForm}
                    currentFormState={this.state.currentFormState}
                />
            </main>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const mainStyle = {
    display: "flex",
}
