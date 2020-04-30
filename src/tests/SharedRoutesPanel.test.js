import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import SharedRoutesPanel from "../MainPage/Panel/SharedRoutes/SharedRoutesPanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SharedRoutesPanel/>, div);
});

test("Panel contains SharedRoute and Map", () => {
    const { getByTestId } = render(<SharedRoutesPanel/>);
    expect(getByTestId("sharedRoutePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});