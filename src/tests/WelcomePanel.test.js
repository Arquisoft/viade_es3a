import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import WelcomePanel from "../MainPage/Panel/Welcome/WelcomePanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<WelcomePanel/>, div);
});

test("Panel contains Welcome and Map", () => {
    const { getByTestId } = render(<WelcomePanel/>);
    expect(getByTestId("welcomePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});