import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, within } from '@testing-library/react';
import AddRoute from '../MainPage/Panel/AddRoute/AddRoute';

test('Not crashing component', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AddRoute></AddRoute>,div);
})
/*
test('Elements addRoute are present', () => {
    const { getByTestId } = render(<AddRoute></AddRoute>);
    expect(getByTestId("route")).toBeInTheDocument();
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("desc")).toBeInTheDocument();
    expect(getByTestId("img")).toBeInTheDocument();
    expect(getByTestId("vid")).toBeInTheDocument();
    expect(getByTestId("upload")).toBeInTheDocument();
    expect(getByTestId("inputGeo")).toBeInTheDocument();
    expect(getByTestId("inputName")).toBeInTheDocument();
    expect(getByTestId("inputDesc")).toBeInTheDocument();
    expect(getByTestId("inputImg")).toBeInTheDocument();
    expect(getByTestId("inputVid")).toBeInTheDocument();
  });

test('Click on inputs', ()=>{
    const { getByTestId } = render(<AddRoute></AddRoute>);
    getByTestId("inputGeo").click();
    getByTestId("inputName").click();
    getByTestId("inputDesc").click();
    getByTestId("inputImg").click();
    getByTestId("inputVid").click();
});

*/
test("Route load", () => {
    const { getByTestId } = render(<AddRoute />);
    const inputRoute = getByTestId("inputGeo");
  
    const file = new File(["..."], "ruta1.geojson", {
      type: "application/json"
    });
  
   
    Object.defineProperty(inputRoute, "files", {
      value: [file]
    });
  
    fireEvent.change(inputRoute);
  
    const { getByText } = within(getByTestId('labelRoute'));
    expect(getByText('ruta1.geojson')).toBeInTheDocument();
  });

  
  test('', ()=>{
    const { getByTestId } = render(<AddRoute></AddRoute>);

    getByTestId("inputGeo").click();
    getByTestId("inputName").click();
    getByTestId("inputDesc").click();
    getByTestId("inputImg").click();
    getByTestId("inputVid").click();
});
  
  
