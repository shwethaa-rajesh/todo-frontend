/* eslint-disable no-unused-vars */
import makeRequest from './makeRequest';
import {
  getTodos, addTodo,
} from '../constants/apiEndpoints';

const getTodoList = async () => {
  const todos = await makeRequest(getTodos());
  return todos;
};

const newTodo = async (tweetContent) => {
  const addedTodo = await makeRequest(addTodo(tweetContent));

  return addedTodo;
};
export {
  newTodo, getTodoList,
};
