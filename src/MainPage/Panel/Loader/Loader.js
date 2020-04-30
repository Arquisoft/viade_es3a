import React, { Component } from "react";
import "./Loader.css";
import { useState } from "react";
import { render } from "@testing-library/react";

class Loader extends Component {
    constructor(props) {
        this.state ={
            visible: false
        }
        this.setVisible = this.setVisible.bind(this);
    }

    setVisible(newState) {
        this.setState = ({
            visibility: newState
        })
    }

    render() {
        return (
            <div class="lds-roller"><div></div><div></div><div></div></div>
        );
    }
};

export default Loader;