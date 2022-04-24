import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom';

const getDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = today.getMonth(); // January is 0!
  const yyyy = today.getFullYear();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const month = months[mm];
  return `${dd} ${month},${yyyy}`;
};
const getTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
};
describe('Sidebar ', () => {
  const mockSetListData = jest.fn(async (email) => new Promise((resolve) => {
    if (email) {
      resolve(email);
    }
  }));
  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route
          path="/"
          element={<Sidebar />}
        />

      </Routes>
    </MemoryRouter>
  );

  beforeEach(() => {
    mockSetListData.mockClear();
  });
  it('should display the welcome message', () => {
    render(component);
    expect(screen.getByText('HI, SHWETHAA')).toBeTruthy();
  });
  it('should display the date ', () => {
    const date = getDate();
    render(component);
    expect(screen.getByText(date)).toBeTruthy();
  });
  it('should display the time ', () => {
    const time = getTime();
    render(component);
    expect(screen.getByText(time)).toBeTruthy();
  });
});
