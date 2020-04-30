import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import Notifications from "../MainPage/Panel/Notifications/Notifications";

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Notifications></Notifications>, div);
 });

 test("Elements notifications are present", () => {
    const { getByTestId } = render(<Notifications></Notifications>);
    expect(getByTestId("welcome")).toBeInTheDocument();
    getByTestId("welcome").click();
  });