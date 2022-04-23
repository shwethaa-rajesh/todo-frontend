import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTodo.css';
import { newTodo } from '../../utils/backend.utils';

function AddTodo() {
  const [text, setText] = useState('Enter Todo');
  const navigate = useNavigate();
  const textChangeHandler = (event) => {
    setText(event.target.value);
  };
  const newTodoHandler = (event) => {
    event.preventDefault();
    const todoObject = {
      todocontent: text,
    };
    newTodo(todoObject).then(() => {
      navigate('/');
    });
  };
  return (
    <div className="add-tweet-page">
      <br />
      <br />

      <form onSubmit={newTodoHandler}>
        <div>
          <input
            value={text}
            onFocus={
              (e) => {
                e.target.value = '';
              }
            }
            onChange={textChangeHandler}
            type="text"
            data-testid="testId-listNameTextInput"
          />

        </div>
        <br />
        <br />
        <button className="tweet-button" type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodo;
