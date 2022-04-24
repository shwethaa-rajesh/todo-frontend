import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AllTodos from './AllTodos';
import '@testing-library/jest-dom';

describe('AllTodos ', () => {
  const mockSetListData = jest.fn();
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={<AllTodos />}
        />

      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should render heading ', () => {
    render(component);
    expect(screen.getByText('ALL TO-DOS')).toBeTruthy();
    expect(mockSetListData).not.toHaveBeenCalled();
  });
  it('should display create new ', () => {
    render(component);
    expect(screen.getByText('CREATE NEW')).toBeTruthy();
    expect(mockSetListData).not.toHaveBeenCalled();
  });
});
