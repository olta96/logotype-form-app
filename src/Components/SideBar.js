import React, { Component } from "react";
import ColorOption from "./ColorOption";
import BaseFormOption from "./BaseFormOption";
import Slider from "@mui/material/Slider";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default class SideBar extends Component {

    state = {
        selectedFirstForm: 0,
        selectedSecondForm: this.props.firstForms.length,
        selectedThirdForm: this.props.firstForms.length + this.props.secondForms.length,
        selectedFourthForm: this.props.firstForms.length + this.props.secondForms.length + this.props.thirdForms.length,
    }

    handleBaseFormOptionClick = (id) => {
        if (id < this.props.firstForms.length)
            this.setState({ selectedFirstForm: id });
        else if (id < this.props.firstForms.length + this.props.secondForms.length)
            this.setState({ selectedSecondForm: id });
        else if (id < this.props.firstForms.length + this.props.secondForms.length + this.props.thirdForms.length)
            this.setState({ selectedThirdForm: id });
        else if (id < this.props.firstForms.length + this.props.secondForms.length + this.props.thirdForms.length + this.props.thirdForms.length)
            this.setState({ selectedFourthForm: id });
        this.props.handleFormSelection(id);
    }

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

    buildBaseFormGrid = (baseForms, startId, selectedId) => {
        let baseFormId = startId;
        return (
            <div style={baseFormGridStyle}>
                {baseForms.map(baseForm => {
                    return (
                        <BaseFormOption
                            baseForm={baseForm}
                            isSelected={selectedId === baseFormId}
                            id={baseFormId}
                            key={baseFormId++}
                            handleClick={this.handleBaseFormOptionClick}
                        />
                    )
                })}
            </div>
        )
    }

    buildFirstFormGrid = () => {
        return this.buildBaseFormGrid(
            this.props.firstForms,
            0,
            this.state.selectedFirstForm,
        );
    }

    buildSecondFormGrid = () => {
        return this.buildBaseFormGrid(
            this.props.secondForms,
            this.props.firstForms.length,
            this.state.selectedSecondForm,
        );
    }

    buildThirdFormGrid = () => {
        return this.buildBaseFormGrid(
            this.props.thirdForms,
            this.props.firstForms.length + this.props.secondForms.length,
            this.state.selectedThirdForm,
        );
    }

    buildFourthFormGrid = () => {
        return this.buildBaseFormGrid(
            this.props.thirdForms,
            this.props.firstForms.length + this.props.secondForms.length + this.props.thirdForms.length,
            this.state.selectedFourthForm,
        );
    }

    getPositionSlider = (forForm, axis, initialValue) => {
        return (
            <div>
                <Slider
                    orientation={axis === "top" ? "vertical" : "horizontal"}
                    style={axis === "top" ? { height: "250px", marginTop: "10px", left: "-10px" } : {}}
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

    render = () => {
        return (
            <div style={sideBarStyle}>
                <ol>
                    <li>
                        <div>
                            Välj en basform
                        </div>

                        <div style={formAndColorContainerStyle}>
                            {this.getPositionSlider("firstForm", "top", 200)}
                            <div style={gridStyleContainer}>
                                {this.buildFirstFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("firstForm")}
                            </div>
                        </div>
                        {this.getPositionSlider("firstForm", "left", 100)}
                        {this.getZIndexRadioButtons("firstForm", this.props.currentFormState.firstForm.zIndex)}
                    </li>
                    <li>
                        <div>
                            Välj en sekundärform
                        </div>
                        <div style={formAndColorContainerStyle}>
                            {this.getPositionSlider("secondForm", "top", 100)}
                            <div style={gridStyleContainer}>
                                {this.buildSecondFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("secondForm")}
                            </div>
                        </div>
                        {this.getPositionSlider("secondForm", "left", 100)}
                        {this.getZIndexRadioButtons("secondForm", this.props.currentFormState.secondForm.zIndex)}
                    </li>
                    <li>
                        <div>
                            Välj en detaljform (valfritt)
                        </div>
                        <div style={formAndColorContainerStyle}>
                            {this.getPositionSlider("thirdForm", "top", 100)}
                            <div style={gridStyleContainer}>
                                {this.buildThirdFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("thirdForm")}
                            </div>
                        </div>
                        {this.getPositionSlider("thirdForm", "left", 100)}
                        {this.getZIndexRadioButtons("thirdForm", this.props.currentFormState.thirdForm.zIndex)}
                    </li>
                    <li>
                        <div>
                            Välj en detaljform (valfritt)
                        </div>
                        <div style={formAndColorContainerStyle}>
                            {this.getPositionSlider("fourthForm", "top", 200)}
                            <div style={gridStyleContainer}>
                                {this.buildFourthFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("fourthForm")}
                            </div>
                        </div>
                        {this.getPositionSlider("fourthForm", "left", 200)}
                        {this.getZIndexRadioButtons("fourthForm", this.props.currentFormState.fourthForm.zIndex)}
                    </li>
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
const baseFormGridStyle = {
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
    width: "25%",
    overflowY: "scroll",
    maxHeight: "100vh",
}