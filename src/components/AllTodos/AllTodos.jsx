import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTodoList } from '../../utils/backend.utils';
import TodoItem from '../TodoItem/TodoItem';
import './AllTodos.css';

function AllTodos() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    getTodoList().then((todoRes) => {
      setTodos(todoRes.reverse());
    }, () => {
      setIsEmpty(true);
    });
  }, []);
  return (
    <div className="todo-page">
      <div className="todo-header">ALL TO-DOS</div>
      <div
        className="todo-container"

      >

        {!isEmpty
          ? todos.map((eachTodo) => (
            <TodoItem key={eachTodo.id} Todo={eachTodo} />
          )) : <div className="empty-todos"> NO TODOS YET</div>}
      </div>
      <button className="add-todo" type="button" onClick={() => { navigate('/add-todo/'); }}>
        <div>
          CREATE NEW
        </div>
      </button>
    </div>
  );
}

export default AllTodos;
