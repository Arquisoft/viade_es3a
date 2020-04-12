import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import MainPage from "../MainPage/Main-page";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Not crashing component", () => {
    const div = document.createElement("div");
    // ReactDOM.render(
    //     <Router><Switch><MainPage></MainPage></Switch></Router>, div);
});