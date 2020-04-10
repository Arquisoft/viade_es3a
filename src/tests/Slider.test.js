import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { cleanup } from "@testing-library/react";

import App from '../App';

import Slider from '../MainPage/Panel/LoadRoute/Slider';
import img from './media/img.png';
// import vi from './media/video.mp4';

afterEach(cleanup);

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("ROUTE MANAGER");
    expect(linkElement).toBeInTheDocument();
  });

// test("Render component not crashing.", () => {
//     const div = document.createElement("div");
//     const imagen = img;
//     const video = vi;
//     ReactDOM.render(<Slider images={imagen} video={video}></Slider>, div);
//  });