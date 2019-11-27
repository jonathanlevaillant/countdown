import React from 'react';
import { useSelector } from 'react-redux';

const AlertCounter = () => {
  const counter = useSelector(state => state.todos.filter(todo => todo.countdown === 0)).length;

  return counter > 0 && <p>Compteur d'alertes : {counter}</p>;
};

export default AlertCounter;
