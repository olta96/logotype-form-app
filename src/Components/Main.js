import React, { Component } from "react";
import SideBar from "./SideBar";
import Build from "./Build";

import { ReactComponent as Bottom_semicircle } from "../svgs/Bottom_semicircle.svg";
import { ReactComponent as Circle } from "../svgs/Circle.svg";
import { ReactComponent as Sunrise } from "../svgs/Sunrise.svg";
import { ReactComponent as Top_semicircle } from "../svgs/Top_semicircle.svg";
import { ReactComponent as Waves } from "../svgs/Waves.svg";
import { ReactComponent as Star } from "../svgs/Star.svg";
import { ReactComponent as Waterdrop } from "../svgs/Waterdrop.svg";
import { ReactComponent as Sun } from "../svgs/Sun.svg";
import { ReactComponent as Tree } from "../svgs/Tree.svg";

export default class Main extends Component {

    state = {
        firstForm: Bottom_semicircle,
        secondForm: Waves,
        thirdForm: Star,
        currentFormColors: {
            firstForm: {
                id: 0,
                color: colors[0],
            },
            secondForm: {
                id: 0,
                color: colors[0],
            },
            thirdForm: {
                id: 0,
                color: colors[0],
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
    }

    handleColorOptionClick = (forForm, id) => {
        this.setState({
            currentFormColors: {
                ...this.state.currentFormColors,
                [forForm]: {
                    id: id,
                    color: colors[id],
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
                    currentFormColors={this.state.currentFormColors}
                />
                <Build
                    firstForm={this.state.firstForm}
                    secondForm={this.state.secondForm}
                    thirdForm={this.state.thirdForm}
                    currentFormColors={this.state.currentFormColors}
                />
            </main>
        );
    }

}

const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
];

const firstForms = [
    Bottom_semicircle,
    Sunrise,
    Top_semicircle,
    Circle,
];

const secondForms = [
    Waves,
    Circle,
    Bottom_semicircle,
    Top_semicircle,
];

const thirdForms = [
    Star,
    Waterdrop,
    Sun,
    Tree,
];

/** @type {CSSStyleDeclaration} */
const mainStyle = {
    display: "flex",
}
