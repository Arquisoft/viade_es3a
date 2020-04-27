import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import ProfilePanel from "../MainPage/Panel/Profile/ProfilePanel";
import { BrowserRouter as Router } from "react-router-dom";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><ProfilePanel/></Router>, div);
});

test("Panel contains ProfilePanel and Map", () => {
    const { getByTestId } = render(<Router><ProfilePanel/></Router>);
    expect(getByTestId("profilePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});