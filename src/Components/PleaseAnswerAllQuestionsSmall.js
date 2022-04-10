import React, { Component } from "react";

export default class PleaseAnswerAllQuestionsSmall extends Component {

    constructor(props) {
        super(props);
        this.state = {
            labelText: this.props.text === undefined ? "Vänligen svara på alla frågor" : this.props.text,
        }
    }
    
    render = () => {
        return (
            <small style={{ fontSize: "15px", height: "20px", fontStyle: "italic" }}>
                {this.props.isEnabled ? this.state.labelText : ""}
            </small>
        )
    }

}
