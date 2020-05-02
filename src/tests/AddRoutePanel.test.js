import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import AddRoutePanel from "../MainPage/Panel/AddRoute/AddRoutePanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddRoutePanel></AddRoutePanel>, div);
});

test("Panel contains AddRoute and Map", () => {
    const { getByTestId } = render(<AddRoutePanel></AddRoutePanel>);
    expect(getByTestId("addRoutePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});

