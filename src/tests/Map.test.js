import React from "react";
import { render, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";

import Map from "../MainPage/Panel/Map/Map";

afterEach(cleanup);

test("Render component not crashing.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Map></Map>, div);
 });
