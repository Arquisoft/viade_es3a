import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Profile from '../MainPage/Panel/Profile/Profile';
import { BrowserRouter as Router} from 'react-router-dom';

test('Not crashing component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><Profile></Profile></Router>, div);
})