import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import NotificationsPanel from "../MainPage/Panel/Notifications/NotificationsPanel";

test("Not crashing component", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NotificationsPanel/>, div);
});

test("Panel contains Welcome and Map", () => {
    const { getByTestId } = render(<NotificationsPanel/>);
    expect(getByTestId("notificationsRoutePart")).toBeInTheDocument();
    expect(getByTestId("mapPart")).toBeInTheDocument();
});