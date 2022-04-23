import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodoList } from '../../utils/backend.utils';
import TodoItem from '../TodoItem/TodoItem';
import './AllTodos.css';

function AllTodos() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodoList().then((todoRes) => {
      setTodos(todoRes.reverse());
    });
  }, []);
  return (
    <div className="tweets-page">
      <button className="add-tweet" type="button" onClick={() => { navigate('/add-todo/'); }}>
        <div>
          New Todo
        </div>
      </button>
      <div className="tweets-container">

        {
      todos.map((eachTodo) => (
        <TodoItem key={eachTodo.id} Todo={eachTodo} />
      ))

      }
      </div>

    </div>
  );
}

export default AllTodos;
