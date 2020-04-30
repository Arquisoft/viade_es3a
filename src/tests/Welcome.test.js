import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";

import Welcome from "../MainPage/Panel/Welcome/Welcome";

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Welcome></Welcome>, div);
 });

 test("Check Welcome information", () => {
    const { getByTestId } = render(<Welcome></Welcome>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("label")).toHaveTextContent("Welcome to VIADE");

    expect(getByTestId("introduction")).toBeInTheDocument();
    expect(getByTestId("introduction")).toHaveTextContent("Viade is a decentralized routes management");

    expect(getByTestId("add")).toBeInTheDocument();
    expect(getByTestId("add")).toHaveTextContent("Add route");
    
    expect(getByTestId("load")).toBeInTheDocument();
    expect(getByTestId("load")).toHaveTextContent("My route");

    expect(getByTestId("share")).toBeInTheDocument();
    expect(getByTestId("share")).toHaveTextContent("Share route");

    expect(getByTestId("profile")).toBeInTheDocument();
    expect(getByTestId("profile")).toHaveTextContent("Profile");

    expect(getByTestId("friendsRoutes")).toBeInTheDocument();
    expect(getByTestId("friendsRoutes")).toHaveTextContent("Friend's routes");
   
    expect(getByTestId("friends")).toBeInTheDocument();
    expect(getByTestId("friends")).toHaveTextContent("Friends");

    expect(getByTestId("message")).toBeInTheDocument();
    expect(getByTestId("message")).toHaveTextContent("Enjoy our app ! :)");

});

