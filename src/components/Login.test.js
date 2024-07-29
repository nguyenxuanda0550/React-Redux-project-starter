import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import reducer from '../reducers';

// Configure the Redux store with the provided reducer
const store = configureStore({ reducer });

describe('Login Component', () => {
  test('should render the component', () => {
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    // Check if the component is rendered and matches the snapshot
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  test('should display all elements', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    // Select elements by their test IDs
    const existingUserLabelElement = screen.getByTestId('existing-user-label');
    const usernameLabelElement = screen.getByTestId('username-label');
    const usernameInputElement = screen.getByTestId('username-input');
    const passwordLabelElement = screen.getByTestId('password-label');
    const passwordInputElement = screen.getByTestId('password-input');
    const submitButtonElement = screen.getByTestId('submit-login');

    // Assert that the text content of the elements is correct
    expect(usernameLabelElement.textContent).toBe('Username');
    expect(passwordLabelElement.textContent).toBe('Password');
    expect(submitButtonElement.textContent).toBe('Login');
    expect(existingUserLabelElement.textContent).toBe('Existing User');

    // Simulate user input
    fireEvent.change(usernameInputElement, { target: { value: 'user' } });
    fireEvent.change(passwordInputElement, { target: { value: 'password' } });

    // Assert that the input values are updated
    expect(usernameInputElement.value).toBe('user');
    expect(passwordInputElement.value).toBe('password');
  });

  test('should display error message when username or password is incorrect', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>
    );

    // Select elements for interaction
    const usernameInputElement = screen.getByTestId('username-input');
    const passwordInputElement = screen.getByTestId('password-input');
    const submitButtonElement = screen.getByTestId('submit-login');

    // Simulate user input and click on submit button
    fireEvent.change(usernameInputElement, { target: { value: 'user' } });
    fireEvent.change(passwordInputElement, { target: { value: 'password' } });
    fireEvent.click(submitButtonElement);

    // Assert that the error message is displayed
    const errorMessageElement = screen.getByTestId('error-message');
    expect(errorMessageElement.textContent).toBe('Username or password is incorrect');
  });
});
