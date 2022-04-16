import React, { Component } from "react";
import CircularProgress from '@mui/material/CircularProgress';

export default class StoringResults extends Component {

    render = () => {
        return (
            <div style={storingResultsStyle}>
                <h1>Lagrar resultat, vänligen lämna inte sidan...</h1>
                <CircularProgress />
            </div>
        );
    }

};

/** @type {CSSStyleDeclaration} */
const storingResultsStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};
