import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "../MainPage/NavBar/NavBar";
import App from "../App";

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router><NavBar></NavBar></Router>, div);
 });

 test("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("ROUTE MANAGER");
    expect(linkElement).toBeInTheDocument();
  });

  test("Check NavBar Options", () => {
    const { getByTestId } = render(<Router><NavBar></NavBar></Router>);
    expect(getByTestId("logo")).toBeInTheDocument();
    getByTestId("logo").click();

    expect(getByTestId("add")).toBeInTheDocument();
    getByTestId("add").click();

    expect(getByTestId("load")).toBeInTheDocument();
    getByTestId("load").click();

    expect(getByTestId("share")).toBeInTheDocument();
    getByTestId("share").click();

    expect(getByTestId("friendsRoutes")).toBeInTheDocument();
    getByTestId("friendsRoutes").click();

    expect(getByTestId("profile")).toBeInTheDocument();
    getByTestId("profile").click();

    expect(getByTestId("friends")).toBeInTheDocument();
    getByTestId("friends").click();

  });