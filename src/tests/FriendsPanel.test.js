import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import FriendsPanel from "../MainPage/Panel/Friends/FriendsPanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FriendsPanel/>, div);
});

test("Panel contains FriendsPanel and Map", () => {
    const { getByTestId } = render(<FriendsPanel/>);
    expect(getByTestId("friendsPart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});