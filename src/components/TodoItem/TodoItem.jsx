import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ Todo }) {
  return (
    <div className="tweet-item">

      <div className="tweet-content">
        {Todo.note}
      </div>
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
