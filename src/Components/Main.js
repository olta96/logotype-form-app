import React, { Component } from "react";
import LogoBuilderPage from "./LogoBuilderPage";
import WelcomePage from "./WelcomePage";

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

const vattenfallColors = [
    "#F84949",
    "#FA12C7",
    "#F7DF03",
    "#03E8F7",
    "#03DF0C",
    "#9903DF",
    "#3364B0",
    "#FF9900",
];

const vattenfallFirstForms = [
    Top_semicircle,
    Bottom_semicircle,
    Sunrise,
    Circle,
];

const vattenfallSecondForms = [
    Bottom_semicircle,
    Top_semicircle,
    Waves,
    Circle,
];

const vattenfallThirdForms = [
    None,
    Star,
    Waterdrop,
    Sun,
    Tree,
    Leaf,
];

export default class Main extends Component {

    hasAnsweredSurvey = () => {
        return false;
    }

    constructor(props) {
        super(props);
        this.state = {
            hasAnsweredSurvey: this.hasAnsweredSurvey(),
            pageId: "welcome",
            pageState: "welcome",
            personalData: {},
            logoBuilderProps: {
                vattenfallLogoBuilder: {
                    company: "Vattenfall",
                    colors: vattenfallColors,
                    slogan: "Ett fossilfritt liv inom en generation",
                }
            },
            logoBuilderFormStates: {
                vattenfallLogoBuilder: {
                    firstForm: {
                        name: "firstForm",
                        chosenForm: vattenfallFirstForms[0],
                        formId: 0,
                        availableForms: vattenfallFirstForms,
                        colorId: 0,
                        color: vattenfallColors[0],
                        top: 150,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: 0,
                        offsetLeft: -100,
                    },
                    secondForm: {
                        name: "secondForm",
                        chosenForm: vattenfallSecondForms[0],
                        formId: 0,
                        availableForms: vattenfallSecondForms,
                        colorId: 0,
                        color: vattenfallColors[0],
                        top: 50,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: 0,
                        offsetLeft: -100,
                    },
                    thirdForm: {
                        name: "thirdForm",
                        chosenForm: vattenfallThirdForms[0],
                        formId: 0,
                        availableForms: vattenfallThirdForms,
                        colorId: 0,
                        color: vattenfallColors[0],
                        top: 65,
                        left: 65,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                    fourthForm: {
                        name: "fourthForm",
                        chosenForm: vattenfallThirdForms[0],
                        formId: 0,
                        availableForms: vattenfallThirdForms,
                        colorId: 0,
                        color: vattenfallColors[0],
                        top: 135,
                        left: 135,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                },
            }
        };
    }

    handlePersonalQuestionsSubmit = (personalDataState) => {
        this.setState({
            personalData: personalDataState,
            pageState: "logoBuilder",
            pageId: "vattenfallLogoBuilder",
        });
    }

    handleLogoBuilderComplete = (logoBuilderId, formState) => {
        this.setState({ logoBuilderFormStates: { [logoBuilderId]: formState} });
    }

    render = () => {
        const { pageState, pageId, logoBuilderFormStates } = this.state;
        return (
            <div>
                {
                    pageState === "welcome" ? (
                        <WelcomePage
                            handlePersonalQuestionsSubmit={this.handlePersonalQuestionsSubmit}
                        />
                    ) : pageState === "logoBuilder" ? (
                        <LogoBuilderPage
                            logoBuilderProps={this.state.logoBuilderProps[pageId]}
                            currentFormState={logoBuilderFormStates[pageId]}
                            handleLogoBuilderComplete={this.handleLogoBuilderComplete}
                        />
                    ) : ""
                }
            </div>
        );
    }

}