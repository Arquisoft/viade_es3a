import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import ShareRoutePanel from "../MainPage/Panel/ShareRoute/ShareRoutePanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShareRoutePanel/>, div);
});

test("Panel contains ShareRoute and Map", () => {
    const { getByTestId } = render(<ShareRoutePanel/>);
    expect(getByTestId("shareRoutePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});