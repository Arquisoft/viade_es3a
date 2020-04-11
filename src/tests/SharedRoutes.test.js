import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { cleanup } from "@testing-library/react";
import ShareRoute from '../MainPage/Panel/ShareRoute/ShareRoute';

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ShareRoute></ShareRoute>, div);
 });

 test("Check Load Route panel (interface)", () => {
    const { getByTestId } = render(<SharedRoutes></SharedRoutes>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("label")).toHaveTextContent("Routes from your friends:");
    expect(getByTestId("card")).toBeInTheDocument();
 });