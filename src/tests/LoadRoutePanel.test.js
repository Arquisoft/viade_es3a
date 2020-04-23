import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import LoadRoutePanel from "../MainPage/Panel/LoadRoute/LoadRoutePanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoadRoutePanel/>, div);
});

test("Panel contains AddRoute and Map", () => {
    const { getByTestId } = render(<LoadRoutePanel/>);
    expect(getByTestId("loadRoutePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});