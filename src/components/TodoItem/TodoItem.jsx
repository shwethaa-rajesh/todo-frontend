import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem({ Todo }) {
  return (
    <div className="todo-item">

      {Todo.note}
      <br />
    </div>
  );
}
TodoItem.propTypes = {
  Todo: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,

  }),
};
TodoItem.defaultProps = {
  Todo: {},
};
export default TodoItem;
