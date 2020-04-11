import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Panel from "../MainPage/Panel/Panel";
import { BrowserRouter as Router } from "react-router-dom";

import { cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router><Panel></Panel></Router>, div);
});