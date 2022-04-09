import React, { Component } from "react";
import SideBar from "./SideBar";
import Build from "./Build";

import { ReactComponent as Bottom_semicircle } from "../svgs/Bottom_semicircle.svg";
import { ReactComponent as Circle } from "../svgs/Circle.svg";
import { ReactComponent as Sunrise } from "../svgs/Sunrise.svg";
import { ReactComponent as Top_semicircle } from "../svgs/Top_semicircle.svg";
import { ReactComponent as Line } from "../svgs/Line.svg";
import { ReactComponent as Waves } from "../svgs/Waves.svg";
import { ReactComponent as Star } from "../svgs/Star.svg";
import { ReactComponent as Waterdrop } from "../svgs/Waterdrop.svg";

export default class Main extends Component {

    state = {
        firstForm: Bottom_semicircle,
        secondForm: Waves,
        thirdForm: Star,
    }

    handleFormSelection = (formId) => {
        if (formId < firstForms.length)
            this.setState({ firstForm: firstForms[formId] });
        else if (formId < firstForms.length + secondForms.length)
            this.setState({ secondForm: secondForms[formId - firstForms.length] });
        else if (formId < firstForms.length + secondForms.length + thirdForms.length)
            this.setState({ thirdForm: thirdForms[formId - firstForms.length - secondForms.length] });
    }

    render() {
        return (
            <main style={mainStyle}>
                <SideBar
                    firstForms={firstForms}
                    secondForms={secondForms}
                    thirdForms={thirdForms}
                    handleFormSelection={this.handleFormSelection}
                />
                <Build
                    firstForm={this.state.firstForm}
                    secondForm={this.state.secondForm}
                    thirdForm={this.state.thirdForm}
                />
            </main>
        );
    }

}

const firstForms = [
    Bottom_semicircle,
    Sunrise,
    Top_semicircle,
    Circle,
];

const secondForms = [
    Waves,
    Line,
    Bottom_semicircle,
    Top_semicircle,
];

const thirdForms = [
    Star,
    Waterdrop,
];

/** @type {CSSStyleDeclaration} */
const mainStyle = {
    display: "flex",
}
