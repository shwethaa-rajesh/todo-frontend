import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import TodoItem from './TodoItem';
import '@testing-library/jest-dom';

describe('TodoItem ', () => {
  const mockSetListData = jest.fn();
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={<TodoItem key="1" Todo={{ id: 1, note: 'abd' }} />}
        />

      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });

  it('should show the todo name', () => {
    render(component);

    expect(screen.getByText('abd')).toBeTruthy();
  });
});
