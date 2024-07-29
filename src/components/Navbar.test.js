import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';
import { authenticateUser } from '../actions/authedUser';

// Configure Redux store with the provided reducer
const store = configureStore({ reducer });

describe('Navbar Component', () => {
  // Test to check if the Navbar component renders correctly
  test('should render the component', () => {
    // Dispatch action to set authenticated user
    store.dispatch(
      authenticateUser({
        username: 'tylermcginnis',
        password: '',
      })
    );

    // Render Navbar component wrapped with Redux Provider and React Router
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Assert that the component is defined and matches the snapshot
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  // Test to check if Navbar displays all elements correctly
  test('should display all elements', () => {
    // Dispatch action to set authenticated user
    store.dispatch(
      authenticateUser({
        username: 'tylermcginnis',
        password: '',
      })
    );

    // Render Navbar component wrapped with Redux Provider and React Router
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    // Select elements by their test IDs
    const homeLinkElement = screen.getByTestId('home-link');
    const newPollLinkElement = screen.getByTestId('new-poll-link');
    const leaderboardLinkElement = screen.getByTestId('leaderboard-link');
    const logoutLinkElement = screen.getByTestId('logout-link');

    // Assert that the text content of the elements is correct
    expect(homeLinkElement.textContent).toBe('Home');
    expect(newPollLinkElement.textContent).toBe('New Poll');
    expect(leaderboardLinkElement.textContent).toBe('Leaderboard');
    expect(logoutLinkElement.textContent).toBe('Logout');
  });
});
