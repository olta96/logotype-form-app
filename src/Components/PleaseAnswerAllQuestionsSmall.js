import React, { Component } from "react";

export default class PleaseAnswerAllQuestionsSmall extends Component {

    render = () => {
        return (
            <small style={{ fontSize: "15px", height: "20px", fontStyle: "italic" }}>
                {this.props.isEnabled ? "Vänligen svara på alla frågor" : ""}
            </small>
        )
    }

}
