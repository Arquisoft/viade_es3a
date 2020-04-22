import React from "react";
import { render, fireEvent, waitForElement, cleanup} from "@testing-library/react";
import { queryByTestId, waitFor} from '@testing-library/dom';
import ReactDOM from "react-dom";
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

  test("Check NavBar Options", async() => {
    const { getByTestId } = render(<Router><NavBar></NavBar></Router>);
    expect(getByTestId("logo")).toBeInTheDocument();
    getByTestId("logo").click();

    expect(getByTestId("add")).toBeInTheDocument();
    getByTestId("add").click();

    // const wrapper = render(<Router><NavBar></NavBar></Router>);
    // wrapper.find(".open-menu-button-class").simulate("click");
    // expect(wrapper.state("active")).toBeTruthy();

    //waitForElement(() => expect(queryByTestId(document.documentElement, "load")).not.toBeInTheDocument());
    // getByTestId("dropdownItemRoutes").click();
    // await waitForElement(() => getByTestId("load"));

    expect(getByTestId("share")).toBeInTheDocument();
    getByTestId("share").click();

    // expect(getByTestId("friendsRoutes")).toBeInTheDocument();
    // getByTestId("friendsRoutes").click();

    expect(getByTestId("profile")).toBeInTheDocument();
    getByTestId("profile").click();

    // expect(getByTestId("friends")).toBeInTheDocument();
    // getByTestId("friends").click();

  });