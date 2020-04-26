import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import Profile from "../MainPage/Panel/Profile/Profile";
import { BrowserRouter as Router } from "react-router-dom";

import { Link as LinkSolid } from "@solid/react";
const solid = { auth:require('solid-auth-cli') }

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <Router><Profile></Profile></Router>, div);
});

test("Profile elements are present", () => {
    const { getByTestId } = render(<Router><Profile></Profile></Router>);
    expect(getByTestId("titleProfile")).toBeInTheDocument();
    expect(getByTestId("photoProfile")).toBeInTheDocument();
    // expect(getByTestId("viewerProfile")).toBeInTheDocument();
    // expect(getByTestId("logoProfile")).toBeInTheDocument();
    expect(getByTestId("userProfile")).toBeInTheDocument();
    expect(getByTestId("dividerProfile")).toBeInTheDocument();
    expect(screen.getByText("Go to SOLID profile")).toBeInTheDocument();
    expect(getByTestId("myFriendsProfile")).toBeInTheDocument();
    expect(getByTestId("friendsLengthProfile")).toBeInTheDocument();
    expect(getByTestId("buttonFriendsProfile")).toBeInTheDocument();
    expect(getByTestId("myRoutesProfile")).toBeInTheDocument();
    expect(getByTestId("routesLengthProfile")).toBeInTheDocument();
    expect(getByTestId("buttonRoutesProfile")).toBeInTheDocument();
});

test("Buttons with correct links", () => {
    const profile = render(<Router><Profile></Profile></Router>);

    /* const enlaceSolid = profile.getByText("Go to SOLID profile");
    expect(enlaceSolid.getAttribute("href")).toMatch("solid.community/profile/card#me"); */

    const linkFriends = profile.getByText("Show friends");
    expect(linkFriends.getAttribute("href")).toEqual("/viade_es3a/friends");

    const linkRoutes = profile.getByText("Show routes");
    expect(linkRoutes.getAttribute("href")).toEqual("/viade_es3a/loadRoute");

});

test("Profile show correct info", () => {
    const { getByTestId } = render(<Router><Profile></Profile></Router>);

    login().then(session => {
        const goToSolidProfile = getByText("Go to SOLID profile");
        expect(goToSolidProfile.getAttribute("href")).toEqual(`<${session.webId}>`);
    })
});


async function login() {
    var session = await solid.auth.currentSession();
    if (!session) 
        session = await solid.auth.login({ idp:"https://solid.community", username:"viadeEs3a", password:"viadeEs3a" });
    return session;
}