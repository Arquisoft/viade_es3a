import React from "react";
import App from "../App";
import ReactDOM from "react-dom";
jest.mock('react-dom', ()=> ({render: jest.fn()}))

test("renders learn react link", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App></App>, div);
    global.document.getElementById = (id) => id ==='root';
  });