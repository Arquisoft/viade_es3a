import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { cleanup } from "@testing-library/react";
import ShareRoute from "../MainPage/Panel/ShareRoute/ShareRoute";

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShareRoute></ShareRoute>, div);
 });

 test("Check ShareRoute panel (interface)", () => {
    const { getByTestId } = render(<ShareRoute></ShareRoute>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("label")).toHaveTextContent("Share a route with your friends:");
    expect(getByTestId("card")).toBeInTheDocument();
 });