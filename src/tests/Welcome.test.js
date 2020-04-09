import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

import Welcome from '../MainPage/Panel/Welcome/Welcome'

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Welcome></Welcome>, div);
 });

 test("Check Welcome information", () => {
    const { getByTestId } = render(<Welcome></Welcome>);
    expect(getByTestId("label")).toBeInTheDocument();
    expect(getByTestId("introduction")).toBeInTheDocument();
    expect(getByTestId("add")).toBeInTheDocument();
    expect(getByTestId("load")).toBeInTheDocument();
    expect(getByTestId("share")).toBeInTheDocument();
    expect(getByTestId("profile")).toBeInTheDocument();
    expect(getByTestId("friends")).toBeInTheDocument();
    expect(getByTestId("message")).toBeInTheDocument();

});

