import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import AllTodos from './components/AllTodos/AllTodos';
import AddTodo from './components/AddTodo/AddTodo';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  const [headerTag, setHeaderTag] = useState('');
  return (
    <div className="App">
      <SideBar headerTag={headerTag} setHeaderTag={setHeaderTag} />
      <Routes>
        <Route path="/" element={<AllTodos />} />
        <Route path="/add-todo/" element={<AddTodo />} />
      </Routes>

    </div>
  );
}

export default App;
