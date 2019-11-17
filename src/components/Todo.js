import React from 'react';
import PropTypes from 'prop-types';

const Todo = props => {
  const { text } = props;

  return (
    <>
      <td>{text}</td>
    </>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Todo;
