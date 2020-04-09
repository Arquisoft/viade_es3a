import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import AddRoute from '../MainPage/Panel/AddRoute/AddRoute';

test('Not crashing component', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<AddRoute></AddRoute>,div);
})