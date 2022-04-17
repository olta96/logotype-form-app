import React, { Component } from "react";
import PersonalQuestions from "./PersonalQuestions";
import SurveyDescription from "./SurveyDescription";

import Divider from '@mui/material/Divider';

export default class WelcomePage extends Component {

    render = () => {
        return (
            <div style={welcomePageStyle}>
                <h1 style={{ textAlign: "center", marginBottom: "50px" }}>Interaktiv enkät om logotyper</h1>
                <main style={mainStyle}>
                    <SurveyDescription />
                    <Divider orientation="vertical" style={{ width: "2%" }} flexItem/>
                    <PersonalQuestions
                        handlePersonalQuestionsSubmit={this.props.handlePersonalQuestionsSubmit}
                    />
                </main>
            </div>
        )
    }

}

/** @type {CSSStyleDeclaration} */
const welcomePageStyle = {
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
}

/** @type {CSSStyleDeclaration} */
const mainStyle = {
    display: "flex",
    fontSize: "1.3em",
}
