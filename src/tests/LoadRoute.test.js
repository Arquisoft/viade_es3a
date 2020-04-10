import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { cleanup } from "@testing-library/react";

import LoadRoute from '../MainPage/Panel/LoadRoute/LoadRoute';

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<LoadRoute></LoadRoute>, div);
 });

 test("Check Load Route panel (interface)", () => {
    const { getByTestId } = render(<LoadRoute></LoadRoute>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("label")).toHaveTextContent("Routes list:");

    expect(getByTestId("card")).toBeInTheDocument();
 });