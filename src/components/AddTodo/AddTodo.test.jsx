import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AddTodo from './AddTodo';
import '@testing-library/jest-dom';

describe('AddTodo ', () => {
  const mockSetListData = jest.fn(async (email) => new Promise((resolve) => {
    if (email) {
      resolve(email);
    }
  }));
  const component = (
    <MemoryRouter initialEntries={['/add-todo']}>
      <Routes>
        <Route
          path="/add-todo"
          element={<AddTodo />}
        />

      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should show all todos', () => {
    render(component);
    const mockTodoName = 'Test Todo Name';
    expect(screen.getByTestId('testId-listNametextarea')).toHaveAttribute(
      'value',
      '',
    );
    fireEvent.change(screen.getByTestId('testId-listNametextarea'), {
      target: { value: mockTodoName },
    });
    expect(screen.getByTestId('testId-listNametextarea')).toHaveAttribute(
      'value',
      mockTodoName,
    );
    expect(mockSetListData).not.toHaveBeenCalled();
  });
  it('should update character count when input text is changed', () => {
    render(component);
    const mockTodoName = 'Test';
    expect(screen.getByTestId('testId-listNametextarea')).toHaveAttribute(
      'value',
      '',
    );
    fireEvent.change(screen.getByTestId('testId-listNametextarea'), {
      target: { value: mockTodoName },
    });
    expect(screen.getByText('96 characters left')).toBeTruthy();
    expect(mockSetListData).not.toHaveBeenCalled();
  });
});
