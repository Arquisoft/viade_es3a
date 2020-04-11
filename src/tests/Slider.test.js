import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { cleanup } from "@testing-library/react";

import App from "../App";

import Slider from "../MainPage/Panel/LoadRoute/Slider";
import img from "./media/img.png";
import img2 from "./media/img2.jpg"
import vi from "./media/video.mp4";
import vi2 from "./media/video2.mp4";

afterEach(cleanup);

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("ROUTE MANAGER");
  expect(linkElement).toBeInTheDocument();
});

test("Render component not crashing.", () => {
  const div = document.createElement("div");

  const images = [];
  const videos = [];

  // Sin imágenes ni vídeos 
  ReactDOM.render(<Slider images={images} videos={videos}></Slider>, div);

  // Con una o más imágenes
  images.push(img);
  ReactDOM.render(<Slider images={images} videos={videos}></Slider>, div);
  images.push(img2)
  ReactDOM.render(<Slider images={images} videos={videos}></Slider>, div);

  // Con uno o más vídeos
  videos.push(vi);
  ReactDOM.render(<Slider images={images} videos={videos}></Slider>, div);
  videos.push(vi2);
  ReactDOM.render(<Slider images={images} videos={videos}></Slider>, div);
});
