/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTodo.css';
import { newTodo } from '../../utils/backend.utils';

function AddTodo() {
  const maxCount = 10;
  const [text, setText] = useState('');
  const [extraText, setExtraText] = useState('');
  const [count, setCount] = useState(maxCount);
  const navigate = useNavigate();

  const textChangeHandler = (event) => {
    setText(event.target.value);
    setCount(maxCount - event.target.value.length);
  };
  const extraTextChangeHandler = (event) => {
    // console.log(event.target.value.slice(text.length));
    setCount(maxCount - event.target.value.length);
    if (event.target.value.length < text.length) {
      setText(text.slice(0, event.target.value.length));
    } else if ((event.target.value.length - text.length) < extraText.length) {
      setExtraText(extraText.slice(0, event.target.value.length - text.length));
    } else {
      event.target.style.color = 'red';
      setExtraText(((prevExtra) => prevExtra
       + (event.target.value.slice(text.length + extraText.length)
       )));
    }
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
      <form onSubmit={newTodoHandler}>

        <textarea
          value={text + extraText}
          style={{ color: count < 0 ? 'red' : '' }}
          onFocus={
              (e) => {
                e.target.style.outline = 'none';
                e.target.value = '';
              }
            }
          onChange={(e) => {
            count > 0 ? textChangeHandler(e) : extraTextChangeHandler(e);
          }}
          type="text"
          data-testid="testId-listNametextarea"
        />

        <div className="character-count">
          {count}
          {' '}
          characters left
          {}
        </div>
        <button className="add-new-todo-button" type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default AddTodo;
