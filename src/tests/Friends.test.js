import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";

import Friends from "../MainPage/Panel/Friends/Friends";

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Friends></Friends>, div);
 });

 test("Check label Friends", () => {
    const { getByTestId } = render(<Friends></Friends>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("label")).toHaveTextContent("Your friends,");

    expect(getByTestId("addFriend")).toBeInTheDocument();
    expect(getByTestId("addFriend")).toHaveTextContent("Add friends by webId");
});



