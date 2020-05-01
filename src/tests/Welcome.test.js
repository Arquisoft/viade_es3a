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

    expect(getByTestId("addRouteInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("addRouteInfoWelcome")).toHaveTextContent("You can upload a route and it will be saved in your SOLID pod");
    
    expect(getByTestId("load")).toBeInTheDocument();
    expect(getByTestId("load")).toHaveTextContent("My routes");

    expect(getByTestId("loadRouteInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("loadRouteInfoWelcome")).toHaveTextContent("You can choose one route and show it in the map");

    expect(getByTestId("createRouteInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("createRouteInfoWelcome")).toHaveTextContent("You can create your own route and save it");


    expect(getByTestId("share")).toBeInTheDocument();
    expect(getByTestId("share")).toHaveTextContent("Share route");

    expect(getByTestId("shareRouteInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("shareRouteInfoWelcome")).toHaveTextContent("You can share your routes with your friends");

    expect(getByTestId("profile")).toBeInTheDocument();
    expect(getByTestId("profile")).toHaveTextContent("Profile");

    expect(getByTestId("profileInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("profileInfoWelcome")).toHaveTextContent("Your personal data");

    expect(getByTestId("friendsOptions")).toBeInTheDocument();
    expect(getByTestId("friendsOptions")).toHaveTextContent("Friends");

    expect(getByTestId("friends")).toBeInTheDocument();
    expect(getByTestId("friends")).toHaveTextContent("My friends");

    expect(getByTestId("friendsInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("friendsInfoWelcome")).toHaveTextContent("Your friends management");

    expect(getByTestId("friendsRoutes")).toBeInTheDocument();
    expect(getByTestId("friendsRoutes")).toHaveTextContent("Friend's routes");

    expect(getByTestId("friendsRoutesInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("friendsRoutesInfoWelcome")).toHaveTextContent("You can see routes that have been shared to you");

    expect(getByTestId("notifications")).toBeInTheDocument();
    expect(getByTestId("notifications")).toHaveTextContent("Notifications");

    expect(getByTestId("notificationsInfoWelcome")).toBeInTheDocument();
    expect(getByTestId("notificationsInfoWelcome")).toHaveTextContent("You can see notifications related to your profile");

    expect(getByTestId("message")).toBeInTheDocument();
    expect(getByTestId("message")).toHaveTextContent("Enjoy our app !");

});

