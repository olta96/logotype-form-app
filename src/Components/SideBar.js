import React, { Component } from "react";
import ColorOption from "./ColorOption";
import BaseFormOption from "./BaseFormOption";



export default class SideBar extends Component {

    state = {
        selectedFirstForm: 0,
        selectedSecondForm: 4,
        selectedThirdForm: 8,
    }

    handleBaseFormOptionClick = (id) => {
        if (id < this.props.firstForms.length)
            this.setState({ selectedFirstForm: id });
        else if (id < this.props.firstForms.length + this.props.secondForms.length)
            this.setState({ selectedSecondForm: id });
        else if (id < this.props.firstForms.length + this.props.secondForms.length + this.props.thirdForms.length)
            this.setState({ selectedThirdForm: id });
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
                            isSelected={this.props.currentFormColors[forForm].id === colorId}
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
        return this.buildBaseFormGrid(this.props.firstForms, 0, this.state.selectedFirstForm);
    }

    buildSecondFormGrid = () => {
        return this.buildBaseFormGrid(this.props.secondForms, 4, this.state.selectedSecondForm);
    }

    buildThirdFormGrid = () => {
        return this.buildBaseFormGrid(this.props.thirdForms, 8, this.state.selectedThirdForm);
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
                            <div style={gridStyleContainer}>
                                {this.buildFirstFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("firstForm")}
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            Välj en sekundärform
                        </div>
                        <div style={formAndColorContainerStyle}>
                            <div style={gridStyleContainer}>
                                {this.buildSecondFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("secondForm")}
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            Välj en eller flera detaljformer
                        </div>
                        <div style={formAndColorContainerStyle}>
                            <div style={gridStyleContainer}>
                                {this.buildThirdFormGrid()}
                            </div>
                            <div style={gridStyleContainer}>
                                {this.buildColorGrid("thirdForm")}
                            </div>
                        </div>
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
    alignItems: "center",
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