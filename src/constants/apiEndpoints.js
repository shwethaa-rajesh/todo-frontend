export const BACKEND_URL = 'http://localhost:9000';
export const getTodos = () => ({ method: 'get', url: `${BACKEND_URL}/all-todos` });
export const addTodo = (tweet) => ({ method: 'post', url: `${BACKEND_URL}/add-todo`, data: tweet });
