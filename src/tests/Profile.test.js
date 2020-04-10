import React from 'react';
import { render, screen} from '@testing-library/react';
import ReactDOM from 'react-dom';
import Profile from '../MainPage/Panel/Profile/Profile';
import { BrowserRouter as Router } from 'react-router-dom';

test('Not crashing component', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Router><Profile></Profile></Router>, div);
});

test('Profile elements are present', () => {
    const { getByTestId } = render(<Router><Profile></Profile></Router>);
    expect(getByTestId("titleProfile")).toBeInTheDocument();
    expect(getByTestId("photoProfile")).toBeInTheDocument();
    // expect(getByTestId("viewerProfile")).toBeInTheDocument();
    // expect(getByTestId("logoProfile")).toBeInTheDocument();
    expect(getByTestId("userProfile")).toBeInTheDocument();
    expect(getByTestId("dividerProfile")).toBeInTheDocument();
    expect(screen.getByText("Go to SOLID profile")).toBeInTheDocument()
    expect(getByTestId("myFriendsProfile")).toBeInTheDocument();
    expect(getByTestId("friendsLengthProfile")).toBeInTheDocument();
    expect(getByTestId("buttonFriendsProfile")).toBeInTheDocument();
    expect(getByTestId("myRoutesProfile")).toBeInTheDocument();
    expect(getByTestId("routesLengthProfile")).toBeInTheDocument();
    expect(getByTestId("buttonRoutesProfile")).toBeInTheDocument();
});
