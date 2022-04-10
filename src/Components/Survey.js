import React, { Component } from "react";
import LogoPreview from "./LogoPreview";
import PleaseAnswerAllQuestionsSmall from "./PleaseAnswerAllQuestionsSmall";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


export default class Survey extends Component {

    state = {
        question: 0,
        guessCompanyAnswer: "",
        didRecognizeSlogan: "",
        didRecognizeLogo: "",
        whyTheseLogoColors: "",
        whyTheseLogoSymbols: "",
        preferredLogoOldVSNew: "",
        whyPreferredThisLogo: "",
        whichLogoIsMostLikeYourOwn: "",
        whyThisLogoIsMostLikeYourOwn: "",
        newLogoRating: "",
        oldLogoRating: "",
        yourOwnLogoRating: "",
    }

    nextQuestion = () => {
        this.setState({
            question: this.state.question + 1,
        });
    }

    getContinueButton = (disabled) => {
        return (
            <div style={buttonContainerStyle}>
                <PleaseAnswerAllQuestionsSmall isEnabled={disabled}/>
                <Button
                    style={{ marginTop: "10px" }}
                    variant="contained"
                    size="large"
                    onClick={this.nextQuestion}
                    disabled={disabled}
                >
                    Gå Vidare
                </Button>
            </div>
        )
    }

    getDoneButton = (disabled) => {
        return (
            <div style={buttonContainerStyle}>
                <PleaseAnswerAllQuestionsSmall isEnabled={disabled}/>
                <Button
                    style={{ marginTop: "10px" }}
                    variant="contained"
                    size="large"
                    onClick={this.nextQuestion}
                    disabled={disabled}
                >
                    Gå Vidare Till Nästa Varumärke
                </Button>
            </div>
        )
    }

    getTextBox = (label, propToChange, innerLabel) => {
        return (
            <div style={Object.assign({flexDirection: innerLabel ? "row" : "column"}, textFieldContainerStyle)}>
                {!innerLabel ? <label>{label}</label> : ""}
                <TextField
                    label={innerLabel ? label : ""}
                    variant="standard"
                    onChange={(e) => this.setState({ [propToChange]: e.target.value })}
                    value={this.state[propToChange]}
                />
            </div>
        )
    }

    getRadioButtons = (label, propToChange, options, extraStyle={}) => {
        return (
            <FormControl style={extraStyle}>
                <FormLabel id={propToChange + "-label"}>{label}</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby={propToChange + "-label"}
                    onChange={(e) => this.setState({ [propToChange]: e.target.value })}
                    value={this.state[propToChange]}
                >
                    {options.map(option =>
                        <FormControlLabel value={option} control={<Radio />} label={option} />
                    )}
                </RadioGroup>
            </FormControl>
        )
    }

    getRatingButtons = (propToChange) => {
        return (
            <FormControl>
                <RadioGroup
                    row
                    onChange={(e) => this.setState({ [propToChange]: e.target.value })}
                    value={this.state[propToChange]}
                >
                    <FormControlLabel value={1} control={<Radio />} label={1} labelPlacement="top" style={{ margin: "0" }} />
                    <FormControlLabel value={2} control={<Radio />} label={2} labelPlacement="top" style={{ margin: "0" }} />
                    <FormControlLabel value={3} control={<Radio />} label={3} labelPlacement="top" style={{ margin: "0" }} />
                    <FormControlLabel value={4} control={<Radio />} label={4} labelPlacement="top" style={{ margin: "0" }} />
                    <FormControlLabel value={5} control={<Radio />} label={5} labelPlacement="top" style={{ margin: "0" }} />
                </RadioGroup>
            </FormControl>
        )
    }

    render = () => {
        return (
            <div style={containerStyle}>
                {
                    this.state.question === 0 ?
                        <div>
                            <h1 style={questionStyle}>Den vänstra logotypen är resultatet av dina val. Den högra logotypen är varumärkets egentliga logotyp. Kan du gissa vilket varumärke som ligger bakom den högra logotypen och dess slogan ovan?</h1>
                            <div style={logosContainerStyle}>
                                <div style={logoPreviewStyle}>
                                    <LogoPreview
                                        currentFormState={this.props.logoFormState}
                                    />
                                </div>
                                <this.props.surveyProps.actualLogo
                                    style={actualLogoStyle}
                                />
                            </div>
                            {this.getTextBox(
                                "Svar",
                                "guessCompanyAnswer",
                                true,
                            )}
                            {this.getContinueButton(
                                this.state.guessCompanyAnswer === "",
                            )}
                        </div>
                        :
                    this.state.question === 1 ?
                        <div>
                            <h1 style={questionStyle}><i>"{this.props.surveyProps.slogan}"</i><br />är {this.props.surveyProps.company}s slogan.</h1>
                            <div style={logosContainerStyle}>
                                <div style={questionSetStyle}>
                                    {this.getRadioButtons(
                                        `Kände du igen ${this.props.surveyProps.company}s slogan?`,
                                        "didRecognizeSlogan",
                                        ["Ja", "Nej"],
                                    )}
                                    {this.getRadioButtons(
                                        "Kände du igen logotypen innan varumärket avslöjades?",
                                        "didRecognizeLogo",
                                        ["Ja", "Nej"],
                                    )}
                                </div>
                                <this.props.surveyProps.actualLogo
                                    style={actualLogoStyle}
                                />
                            </div>
                            {this.getContinueButton(
                                this.state.didRecognizeSlogan === "" ||
                                this.state.didRecognizeLogo === "",
                            )}
                        </div>
                        :
                    this.state.question === 2 ?
                        <div>
                            <h1 style={questionStyle}><i>"{this.props.surveyProps.slogan}"</i></h1>
                            <div style={logosContainerStyle}>
                                <div style={logoPreviewStyle}>
                                    <LogoPreview
                                        currentFormState={this.props.logoFormState}
                                    />
                                </div>
                                <div style={questionSetStyle}>
                                {this.getTextBox(
                                    "Vad ligger till grund för dina val av färger till logotypen baserat på slogan ovan?",
                                    "whyTheseLogoColors",
                                    false,
                                )}
                                {this.getTextBox(
                                    "Vad ligger till grund för dina val av symboler till logotypen baserat på slogan ovan?",
                                    "whyTheseLogoSymbols",
                                    false,
                                )}
                                </div>
                            </div>
                            {this.getContinueButton(
                                this.state.whyTheseLogoColors === "" ||
                                this.state.whyTheseLogoSymbols === "",
                            )}
                        </div>
                        :
                    this.state.question === 3 ?
                        <div>
                            <h1 style={questionStyle}>Den vänstra logotypen är {this.props.surveyProps.company}s tidigare logga.<br />Den högra logotypen är {this.props.surveyProps.company}s nuvarande logga.</h1>
                            <div style={logosContainerStyle}>
                                <this.props.surveyProps.oldLogo
                                    style={actualLogoStyle}
                                />
                                <this.props.surveyProps.actualLogo
                                    style={actualLogoStyle}
                                />
                            </div>
                            <div style={questionSetStyleFlipped}>
                                {this.getRadioButtons(
                                    "Vilken logotyp föredrar du? Den gamla eller den nya logotypen?",
                                    "preferredLogoOldVSNew",
                                    ["Gamla", "Nya"],
                                    { margin: "35px", width: "25%" },
                                )}
                                {this.getTextBox(
                                    "Varför föredrar du denna logotyp?",
                                    "whyPreferredThisLogo",
                                    false,
                                )}
                            </div>
                            {this.getContinueButton(
                                this.state.preferredLogoOldVSNew === "" ||
                                this.state.whyPreferredThisLogo === "",
                            )}
                        </div>
                        :
                    this.state.question === 4 ?
                        <div>
                            <h1 style={questionStyle}>Den vänstra logotypen är {this.props.surveyProps.company}s tidigare logga. Logotypen i mitten är {this.props.surveyProps.company}s nuvarande logga. Den högra logotypen är din egen design på {this.props.surveyProps.company}s logga.</h1>
                            <div style={logosContainerStyle}>
                                <this.props.surveyProps.oldLogo
                                    style={actualLogoStyle}
                                />
                                <this.props.surveyProps.actualLogo
                                    style={actualLogoStyle}
                                />
                                <div style={logoPreviewStyle}>
                                    <LogoPreview
                                        currentFormState={this.props.logoFormState}
                                    />
                                </div>
                            </div>
                            <div style={questionSetStyleFlipped}>
                                {this.getRadioButtons(
                                    "Vilken logotyp (den gamla eller den nya) anser du är mest lik din egen logotyp?",
                                    "whichLogoIsMostLikeYourOwn",
                                    ["Gamla", "Nya"],
                                    { margin: "35px", width: "45%" },
                                )}
                                {this.getTextBox(
                                    "Varför anser du att just denna logotyp är mest lik din egen?",
                                    "whyThisLogoIsMostLikeYourOwn",
                                    false,
                                )}
                            </div>
                            {this.getContinueButton(
                                this.state.whichLogoIsMostLikeYourOwn === "" ||
                                this.state.whyThisLogoIsMostLikeYourOwn === "",
                            )}
                        </div>
                        :
                    this.state.question === 5 ?
                        <div>
                            <h1 style={questionStyle}>På en skala 1-5 (1 = svagt, 5 = starkt), hur starkt förtroende känner du för varumärket baserat på logotypen?</h1>
                            <div style={logosContainerStyle}>
                                <this.props.surveyProps.oldLogo
                                    style={actualLogoStyle}
                                />
                                <this.props.surveyProps.actualLogo
                                    style={actualLogoStyle}
                                />
                                <div style={logoPreviewStyle}>
                                    <LogoPreview
                                        currentFormState={this.props.logoFormState}
                                    />
                                </div>
                            </div>
                            <div style={questionSetStyleFlipped}>
                                {this.getRatingButtons("newLogoRating")}
                                <Divider orientation="vertical" flexItem/>
                                {this.getRatingButtons("oldLogoRating")}
                                <Divider orientation="vertical" flexItem/>
                                {this.getRatingButtons("yourOwnLogoRating")}
                            </div>
                            <Divider flexItem/>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <p style={{ width: "75%" }}>
                                    Den vänstra logotypen är {this.props.surveyProps.company}s tidigare logga. Logotypen i mitten är {this.props.surveyProps.company}s nuvarande logga. Den högra logotypen är din egen design på {this.props.surveyProps.company}s logga.
                                </p>
                            </div>
                            {this.getDoneButton(
                                this.state.newLogoRating === "" ||
                                this.state.oldLogoRating === "" ||
                                this.state.yourOwnLogoRating === "",
                            )}
                        </div>
                        :
                        ""
                }
            </div>
        )
    }

}

/** @type {CSSStyleDeclaration} */
const questionSetStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
}

/** @type {CSSStyleDeclaration} */
const questionSetStyleFlipped = {
    display: "flex",
    justifyContent: "space-evenly",
}

/** @type {CSSStyleDeclaration} */
const textFieldContainerStyle = {
    margin: "35px",
    display: "flex",
    justifyContent: "center",
}

/** @type {CSSStyleDeclaration} */
const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
}

/** @type {CSSStyleDeclaration} */
const actualLogoStyle = {
    width: "200px",
    height: "200px",
}

/** @type {CSSStyleDeclaration} */
const logoPreviewStyle = {
    paddingTop: "50px",
}

/** @type {CSSStyleDeclaration} */
const logosContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "75px",
    marginBottom: "30px",
}

/** @type {CSSStyleDeclaration} */
const questionStyle = {
    fontWeight: "normal",
    fontSize: "24px",
    marginTop: "50px",
    textAlign: "center",
}

/** @type {CSSStyleDeclaration} */
const containerStyle = {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
}
