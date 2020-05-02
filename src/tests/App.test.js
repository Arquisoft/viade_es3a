import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import LoadRoute from "../MainPage/Panel/LoadRoute/LoadRoute";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("ROUTE MANAGER");
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link 2", () => {
  const { getByText } = render(<LoadRoute />);
  const linkElement = getByText("Routes list");
  expect(linkElement).toBeInTheDocument();
});