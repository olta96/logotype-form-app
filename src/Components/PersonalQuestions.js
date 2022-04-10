import React, { Component } from "react";
import PleaseAnswerAllQuestionsSmall from "./PleaseAnswerAllQuestionsSmall";

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

export default class PersonalQuestions extends Component {

    state = {
        age: "",
        gender: "",
        city: "",
    }

    handleAgeChange = (e) => {
        const onlyNums = e.target.value.replace(/[^0-9]/g, '');
        if (onlyNums.length > 3) {
            this.setState({ age: onlyNums.substr(0, 3) });
        } else {
            this.setState({ age: onlyNums });
        }
    }

    handleGenderChange = (e) => {
        this.setState({ gender: e.target.value });
    }

    handleCityChange = (e) => {
        this.setState({ city: e.target.value });
    }

    getSubmitEnabled = () => {
        return this.state.age !== "" && this.state.gender !== "" && this.state.city !== "";
    }

    render = () => {
        return (
            <div style={personalQuestionsStyle}>
                <div style={inputsContainerStyle}>
                    <div>
                        <TextField style={{ marginRight: "40px" }} label="Hur gammal är du?" variant="standard" onChange={this.handleAgeChange} value={this.state.age} />
                        <FormControl>
                            <FormLabel id="gender-label">Vad identifierar du dig som?</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="gender-label"
                                name="row-radio-buttons-group"
                                onChange={this.handleGenderChange}
                                value={this.state.gender}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Kvinna" />
                                <FormControlLabel value="male" control={<Radio />} label="Man" />
                                <FormControlLabel value="other" control={<Radio />} label="Annat" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <TextField label="Var i Sverige bor du (stad/ort)?" variant="standard" onChange={this.handleCityChange}/>
                    <PleaseAnswerAllQuestionsSmall isEnabled={!this.getSubmitEnabled()}/>
                    <div>
                        <Button disabled={!this.getSubmitEnabled()} variant="contained" onClick={() => this.props.handlePersonalQuestionsSubmit(this.state)}>Börja testet</Button>
                    </div>
                </div>
            </div>
        )
    }

}

/** @type {CSSStyleDeclaration} */
const personalQuestionsStyle = {
    width: "49%",
}

/** @type {CSSStyleDeclaration} */
const inputsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    paddingLeft: "50px",
}
