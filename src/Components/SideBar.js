import React, { Component } from "react";
import ColorOption from "./ColorOption";
import FormOption from "./FormOption";
import Slider from "@mui/material/Slider";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default class SideBar extends Component {

    buildColorGrid = (forForm) => {
        let colorId = 0;
        return (
            <div style={colorGridStyle}>
                {this.props.colors.map(color => {
                    return (
                        <ColorOption
                            color={color}
                            isSelected={this.props.currentFormState[forForm].colorId === colorId}
                            handleColorOptionClick={this.props.handleColorOptionClick}
                            id={colorId}
                            forForm={forForm}
                            key={colorId++}
                        />
                    )
                })}
            </div>
        )
    }

    buildFormGrid = (forms, forForm) => {
        let formId = 0;
        return (
            <div style={formGridStyle}>
                {forms.map(formOption => {
                    return (
                        <FormOption
                            formOption={formOption}
                            isSelected={this.props.currentFormState[forForm].formId === formId}
                            handleClick={(id) => this.props.handleFormSelection(forForm, id, formOption)}
                            id={formId}
                            key={formId++}
                        />
                    )
                })}
            </div>
        )
    }

    getPositionSlider = (forForm, axis, initialValue) => {
        return (
            <div>
                <Slider
                    orientation={axis === "top" ? "vertical" : "horizontal"}
                    style={axis === "top" ? { height: "250px", marginTop: "10px", left: "-10px" } : { width: "300px"}}
                    max={200}
                    defaultValue={initialValue}
                    valueLabelDisplay="auto"
                    onChange={(_e, value) => this.props.positionSliderChange(value, forForm, axis)}
                    step={5}
                    marks
                />
            </div>
        )
    }

    getZIndexRadioButtons = (forForm, initialValue) => {
        return (
            <FormControl>
                <FormLabel id="chose-z-index">Z-index</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="chose-z-index"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="1" control={<Radio />} label="1" checked={initialValue === 1}
                        onClick={() => this.props.zIndexRadioChange(1, forForm)}
                    />
                    <FormControlLabel value="2" control={<Radio />} label="2" checked={initialValue === 2}
                        onClick={() => this.props.zIndexRadioChange(2, forForm)}
                    />
                    <FormControlLabel value="3" control={<Radio />} label="3" checked={initialValue === 3}
                        onClick={() => this.props.zIndexRadioChange(3, forForm)}
                    />
                    <FormControlLabel value="4" control={<Radio />} label="4" checked={initialValue === 4}
                        onClick={() => this.props.zIndexRadioChange(4, forForm)}
                    />
                </RadioGroup>
            </FormControl>
        )
    }

    getFormProps = () => {
        return [
            {
                title: "Välj en basform",
                name: "firstForm",
            },
            {
                title: "Välj en sekundärform",
                name: "secondForm",
            },
            {
                title: "Välj en detaljform (valfritt)",
                name: "thirdForm",
            },
            {
                title: "Välj en detaljform (valfritt)",
                name: "fourthForm",
            },
        ];
    }

    render = () => {
        return (
            <div style={sideBarStyle}>
                <ol>
                    {this.getFormProps().map(({ title, name }) =>
                        <li>
                            <div>
                                {title}
                            </div>

                            <div style={formAndColorContainerStyle}>
                                {this.getPositionSlider(name, "top", this.props.currentFormState[name].top)}
                                <div style={gridStyleContainer}>
                                    {
                                        this.buildFormGrid(
                                            this.props.currentFormState[name].availableForms,
                                            name,
                                        )
                                    }
                                </div>
                                <div style={gridStyleContainer}>
                                    {this.buildColorGrid(name)}
                                </div>
                            </div>
                            {this.getPositionSlider(name, "left", this.props.currentFormState[name].left)}
                            {this.getZIndexRadioButtons(name, this.props.currentFormState[name].zIndex)}
                        </li>
                    )}
                </ol>
            </div>
        )
    }

}

/** @type {CSSStyleDeclaration} */
const formAndColorContainerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
}

/** @type {CSSStyleDeclaration} */
const colorGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
}

/** @type {CSSStyleDeclaration} */
const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
}

/** @type {CSSStyleDeclaration} */
const gridStyleContainer = {
    padding: "5px",
}

/** @type {CSSStyleDeclaration} */
const sideBarStyle = {
    borderRight: "1px solid black",
    width: "30%",
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: "100vh",
}
