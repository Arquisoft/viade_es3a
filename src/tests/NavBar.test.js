import React from "react";
import { render, fireEvent, waitForElement, cleanup} from "@testing-library/react";
import { queryByTestId, waitFor} from "@testing-library/dom";
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

    expect(getByTestId("dropdownItemRoutes")).toBeInTheDocument();
    getByTestId("dropdownItemRoutes").click(); 
    // await expect(getByTestId("load")).toBeInTheDocument(); 

    expect(getByTestId("share")).toBeInTheDocument();
    getByTestId("share").click();

    // expect(getByTestId("friendsRoutes")).toBeInTheDocument();
    // getByTestId("friendsRoutes").click();

    expect(getByTestId("profile")).toBeInTheDocument();
    getByTestId("profile").click();

    expect(getByTestId("dropdownItemFriends")).toBeInTheDocument();
    getByTestId("dropdownItemFriends").click();

    // expect(getByTestId("friends")).toBeInTheDocument();
    // getByTestId("friends").click();

    // Iconos
    expect(getByTestId("iconAddRoute")).toBeInTheDocument();
    expect(getByTestId("iconRoutes")).toBeInTheDocument();
    // expect(getByTestId("iconMyRoutes")).toBeInTheDocument();
    // expect(getByTestId("iconCreateRoute")).toBeInTheDocument();
    expect(getByTestId("iconShareRoutes")).toBeInTheDocument();
    expect(getByTestId("iconProfile")).toBeInTheDocument();
    expect(getByTestId("iconFriends")).toBeInTheDocument();
    // expect(getByTestId("iconMyFriends")).toBeInTheDocument();
    // expect(getByTestId("iconFriendsRoutes")).toBeInTheDocument();
    expect(getByTestId("iconLogout")).toBeInTheDocument();
  });