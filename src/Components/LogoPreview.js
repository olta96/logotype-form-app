import React, { Component } from "react";



export default class LogoPreview extends Component {

    render = () => {
        return (
            <div>
                <this.props.firstForm />
                <this.props.secondForm />
                <this.props.thirdForm />
            </div>
        );
    }

}