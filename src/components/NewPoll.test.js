import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NewPoll from './NewPoll';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

// Configure Redux store with the provided reducer
const store = configureStore({ reducer });

describe('NewPoll Component', () => {
  // Test to check if the NewPoll component renders correctly
  test('should render the component', () => {
    // Render NewPoll component wrapped with Redux Provider and React Router
    const view = render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    // Assert that the component is defined and matches the snapshot
    expect(view).toBeDefined();
    expect(view).toMatchSnapshot();
  });

  // Test to check if all elements in the NewPoll component are displayed correctly
  test('should display all elements', () => {
    // Render NewPoll component wrapped with Redux Provider and React Router
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NewPoll />
        </BrowserRouter>
      </Provider>
    );

    // Select elements by their test IDs
    const firstOptionLabelElement = screen.getByTestId("firstOptionLabel");
    const firstOptionInputElement = screen.getByTestId('firstOption');
    const secondOptionLabelElement = screen.getByTestId('secondOptionLabel');
    const secondOptionInputElement = screen.getByTestId('secondOption');
    const submitButtonElement = screen.getByTestId('submit-poll');

    // Assert that the text content of labels and button is correct
    expect(firstOptionLabelElement.textContent).toBe('First Option');
    expect(secondOptionLabelElement.textContent).toBe('Second Option');
    expect(submitButtonElement.textContent).toBe('Add Poll');

    // Simulate user input and assert that input values are updated correctly
    fireEvent.change(firstOptionInputElement, { target: { value: 'Texas' } });
    fireEvent.change(secondOptionInputElement, { target: { value: 'New Hampshire' } });
    expect(firstOptionInputElement.value).toBe('Texas');
    expect(secondOptionInputElement.value).toBe('New Hampshire');
  });
});
