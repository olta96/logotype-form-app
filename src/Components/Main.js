import React, { Component } from "react";
import LogoBuilderPage from "./LogoBuilderPage";
import WelcomePage from "./WelcomePage";
import Survey from "./Survey";
import DonePage from "./DonePage";

import { ReactComponent as Bottom_semicircle } from "../svgs/Bottom_semicircle.svg";
import { ReactComponent as Top_semicircle } from "../svgs/Top_semicircle.svg";
import { ReactComponent as None } from "../svgs/None.svg";
import { ReactComponent as Box } from "../svgs/Box.svg";
import { ReactComponent as Circle } from "../svgs/Circle.svg";

import { ReactComponent as Sunrise } from "../svgs/vattenfall/Sunrise.svg";
import { ReactComponent as Waves } from "../svgs/vattenfall/Waves.svg";
import { ReactComponent as Star } from "../svgs/vattenfall/Star.svg";
import { ReactComponent as Waterdrop } from "../svgs/vattenfall/Waterdrop.svg";
import { ReactComponent as Sun } from "../svgs/vattenfall/Sun.svg";
import { ReactComponent as Tree } from "../svgs/vattenfall/Tree.svg";
import { ReactComponent as Leaf } from "../svgs/vattenfall/Leaf.svg";

import { ReactComponent as Right_arrow } from "../svgs/volvo/Right_arrow.svg";
import { ReactComponent as Scooter } from "../svgs/volvo/Scooter.svg";
import { ReactComponent as Wheel } from "../svgs/volvo/Wheel.svg";
import { ReactComponent as Wings } from "../svgs/volvo/Wings.svg";
import { ReactComponent as C_circle } from "../svgs/volvo/C_circle.svg";
import { ReactComponent as Diamond } from "../svgs/volvo/Diamond.svg";
import { ReactComponent as Signboard } from "../svgs/volvo/Signboard.svg";

import { ReactComponent as Hard_radio_waves } from "../svgs/spotify/Hard_radio_waves.svg";
import { ReactComponent as Play } from "../svgs/spotify/Play.svg";
import { ReactComponent as Soft_radio_waves } from "../svgs/spotify/Soft_radio_waves.svg";
import { ReactComponent as Tone } from "../svgs/spotify/Tone.svg";
import { ReactComponent as Headphones } from "../svgs/spotify/Headphones.svg";

import { ReactComponent as vattenfallLogo } from "../svgs/vattenfall/Vattenfall.svg";
import { ReactComponent as vattenfallLogoOld } from "../svgs/vattenfall/VattenfallOld.svg";

import { ReactComponent as volvoLogoNoName } from "../svgs/volvo/VolvoNoName.svg";
import { ReactComponent as volvoLogo } from "../svgs/volvo/Volvo.svg";
import { ReactComponent as volvoLogoOld } from "../svgs/volvo/VolvoOld.svg";

import { ReactComponent as spotifyLogo } from "../svgs/spotify/Spotify.svg";
import { ReactComponent as spotifyLogoOld } from "../svgs/spotify/SpotifyOld.svg";



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
    None,
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



const volvoColors = [
    "#FF9900",
    "#FA12C7",
    "#03DF0C",
    "#113783",
    "#F7DF03",
    "#DCDBDD",
    "#000000",
    "#F84949",
];


const volvoFirstForms = [
    Top_semicircle,
    C_circle,
    Bottom_semicircle,
    Diamond,
];

const volvoSecondForms = [
    None,
    Signboard,
    Box,
    Bottom_semicircle,
    Top_semicircle,
];

const volvoThirdForms = [
    None,
    Right_arrow,
    Scooter,
    Wheel,
    Wings,
];



const spotifyColors = [
    "#9D61B9",
    "#103000",
    "#1ED760",
    "#FF9900",
    "#12C2FA",
    "#76A80F",
    "#F84949",
    "#EEEEEE",
];

const spotifyFirstForms = [
    Box,
    Circle,
];

const spotifySecondForms = [
    None,
    Play,
    Bottom_semicircle,
    Top_semicircle,
];

const spotifyThirdForms = [
    None,
    Hard_radio_waves,
    Tone,
    Soft_radio_waves,
    Headphones,
    Play,
];



const noFill = [
    C_circle,
    Wheel,
    Signboard,
]



export default class Main extends Component {

    getLocalStorageData = () => {
        if (localStorage.getItem("surveyData")) {
            return JSON.parse(localStorage.getItem("surveyData"));
        } else {
            localStorage.setItem("surveyData", JSON.stringify({pageId: "welcome", pageState: "welcome"}));
            return {
                pageId: "welcome",
                pageState: "welcome",
            };
        }
    }

    constructor(props) {
        super(props);
        const { pageId="welcome", pageState="welcome" } = this.getLocalStorageData();
        this.state = {
            pageId: pageId,
            pageState: pageState,
            personalData: {},
            surveyAnswers: {},
            pageProps: {
                vattenfall: {
                    company: "Vattenfall",
                    colors: vattenfallColors,
                    slogan: "Ett fossilfritt liv inom en generation",
                    actualLogoNoName: vattenfallLogo,
                    actualLogo: vattenfallLogo,
                    oldLogo: vattenfallLogoOld,
                },
                volvo: {
                    company: "Volvo",
                    colors: volvoColors,
                    slogan: "För en bättre framtid. Vi ger dig friheten att resa på ett personligt, hållbart och säkert sätt.",
                    actualLogoNoName: volvoLogoNoName,
                    actualLogo: volvoLogo,
                    oldLogo: volvoLogoOld,
                },
                spotify: {
                    company: "Spotify",
                    colors: spotifyColors,
                    slogan: "Listening is everything",
                    actualLogoNoName: spotifyLogo,
                    actualLogo: spotifyLogo,
                    oldLogo: spotifyLogoOld,
                },
            },
            logoBuilderFormStates: {
                vattenfall: {
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
                        colorId: 1,
                        color: vattenfallColors[1],
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
                        colorId: 2,
                        color: vattenfallColors[2],
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
                        colorId: 3,
                        color: vattenfallColors[3],
                        top: 135,
                        left: 135,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                },
                volvo: {
                    firstForm: {
                        name: "firstForm",
                        chosenForm: volvoFirstForms[0],
                        formId: 0,
                        availableForms: volvoFirstForms,
                        colorId: 0,
                        color: volvoColors[0],
                        top: 150,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: -25,
                        offsetLeft: -100,
                    },
                    secondForm: {
                        name: "secondForm",
                        chosenForm: volvoSecondForms[0],
                        formId: 0,
                        availableForms: volvoSecondForms,
                        colorId: 1,
                        color: volvoColors[1],
                        top: 50,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: 0,
                        offsetLeft: -100,
                    },
                    thirdForm: {
                        name: "thirdForm",
                        chosenForm: volvoThirdForms[0],
                        formId: 0,
                        availableForms: volvoThirdForms,
                        colorId: 2,
                        color: volvoColors[2],
                        top: 65,
                        left: 65,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                    fourthForm: {
                        name: "fourthForm",
                        chosenForm: volvoThirdForms[0],
                        formId: 0,
                        availableForms: volvoThirdForms,
                        colorId: 3,
                        color: volvoColors[3],
                        top: 135,
                        left: 135,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                },
                spotify: {
                    firstForm: {
                        name: "firstForm",
                        chosenForm: spotifyFirstForms[0],
                        formId: 0,
                        availableForms: spotifyFirstForms,
                        colorId: 0,
                        color: spotifyColors[0],
                        top: 150,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: 0,
                        offsetLeft: -100,
                    },
                    secondForm: {
                        name: "secondForm",
                        chosenForm: spotifySecondForms[0],
                        formId: 0,
                        availableForms: spotifySecondForms,
                        colorId: 1,
                        color: spotifyColors[1],
                        top: 50,
                        left: 100,
                        zIndex: 1,
                        offsetBottom: 0,
                        offsetLeft: -100,
                    },
                    thirdForm: {
                        name: "thirdForm",
                        chosenForm: spotifyThirdForms[0],
                        formId: 0,
                        availableForms: spotifyThirdForms,
                        colorId: 2,
                        color: spotifyColors[2],
                        top: 65,
                        left: 65,
                        zIndex: 1,
                        offsetBottom: 25,
                        offsetLeft: -25,
                    },
                    fourthForm: {
                        name: "fourthForm",
                        chosenForm: spotifyThirdForms[0],
                        formId: 0,
                        availableForms: spotifyThirdForms,
                        colorId: 3,
                        color: spotifyColors[3],
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

    savePersonalData = (personalDataState) => {
        localStorage.setItem(
            "surveyData",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("surveyData")),
                personalDataState: personalDataState,
            }),
        );
    }

    saveSurveyData = (surveyPageId, surveyData, newPageId) => {
        localStorage.setItem(
            "surveyData",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("surveyData")),
                [surveyPageId]: surveyData,
                pageState: "logoBuilder",
                pageId: newPageId,
            }),
        );
    }

    storeSurveyDone = () => {
        localStorage.setItem(
            "surveyData",
            JSON.stringify({
                ...JSON.parse(localStorage.getItem("surveyData")),
                pageState: "done",
                pageId: "done",
            }),
        );
    }

    handlePersonalQuestionsSubmit = (personalDataState) => {
        this.savePersonalData(personalDataState);
        this.setState({
            personalData: personalDataState,
            pageState: "logoBuilder",
            pageId: "vattenfall",
        });
    }

    handleLogoBuilderComplete = (logoBuilderId, formState) => {
        this.setState({
            pageState: "survey",
            logoBuilderFormStates: { ...this.state.logoBuilderFormStates, [logoBuilderId]: formState},
        });
    }

    handleSurveyComplete = (surveyPageId, surveyAnswers) => {
        const newPageId =
            surveyPageId === "vattenfall" ?
                "volvo"
                :
            surveyPageId === "volvo" ?
                "spotify"
                :
                "done"
        
        this.saveSurveyData(surveyPageId, surveyAnswers, newPageId);

        if (newPageId === "done") {
            this.storeSurveyDone();
            this.setState({
                pageState: "done",
                pageId: "done",
            });
        } else {
            this.setState({
                pageState: "logoBuilder",
                surveyAnswers: { ...this.state.surveyAnswers, [surveyPageId]: surveyAnswers},
                pageId: newPageId,
            });
        }
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
                            logoBuilderProps={this.state.pageProps[pageId]}
                            currentFormState={logoBuilderFormStates[pageId]}
                            handleLogoBuilderComplete={this.handleLogoBuilderComplete}
                            noFill={noFill}
                            logoBuilderId={pageId}
                        />
                    ) : pageState === "survey" ? (
                        <Survey
                            surveyProps={this.state.pageProps[pageId]}
                            logoFormState={logoBuilderFormStates[pageId]}
                            handleSurveyComplete={this.handleSurveyComplete}
                            noFill={noFill}
                            surveyPageId={pageId}
                        />
                    ) : <DonePage />
                }
            </div>
        );
    }

}
