import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, within } from "@testing-library/react";
import CreateRoute from "../MainPage/Panel/CreateRoute/CreateRoute";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CreateRoute></CreateRoute>,div);
});

test("Elements createRoute are present", () => {
    const { getByTestId } = render(<CreateRoute></CreateRoute>);
    expect(getByTestId("tittle")).toBeInTheDocument();
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("desc")).toBeInTheDocument();
    expect(getByTestId("img")).toBeInTheDocument();
    expect(getByTestId("vid")).toBeInTheDocument();
    expect(getByTestId("save")).toBeInTheDocument();
    expect(getByTestId("clear")).toBeInTheDocument();
    expect(getByTestId("inputName")).toBeInTheDocument();
    expect(getByTestId("inputDesc")).toBeInTheDocument();
    expect(getByTestId("inputImg")).toBeInTheDocument();
    expect(getByTestId("inputVid")).toBeInTheDocument();
  });

  test("Click on inputs", () => {
    const { getByTestId } = render(<CreateRoute></CreateRoute>);
    getByTestId("inputName").click();
    getByTestId("inputDesc").click();
    getByTestId("inputImg").click();
    getByTestId("inputVid").click();
});

