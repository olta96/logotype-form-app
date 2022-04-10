import React, { Component } from "react";

export default class SurveyDescription extends Component {

    render = () => {
        return (
            <div style={surveyDescriptionStyle}>
                <p>
                    Hej!
                </p>
                <p>
                    Den här enkäten syftar till att användas i ett kandidatarbete i medieteknik vid Malmö universitet. Syftet med studien är att undersöka huruvida konsumenter föredrar en mer simplifierad och enkel logotyp över en detaljerad och mer komplicerad logotyp. Studien ska även undersöka huruvida konsumenter upplever varumärket och förtroendet för det beroende på om dess logotyp är av en förenklad variant eller en mer detaljerad. Enkäten är anonym!
                </p>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const surveyDescriptionStyle = {
    width: "49%",
}
