import * as api from '../api/api';

export const readTodos = async () => {
  try {
    const { data } = await api.readTodos();
    return data;
  } catch (error) {
    console.log(error);
    console.log('error en readTodos');
  }
};

export const createTodo = async (todo) => {
  try {
    const { data } = await api.createTodo(todo);
    return data;
  } catch (error) {
    console.log(error);
    console.log('error en createTodo');
  }
};

export const editTodo = async (id, todo) => {
  try {
    const { data } = await api.editTodo(id, todo);
    return data;
  } catch (error) {
    console.log(error);
    console.log('error en editTodo');
  }
};

export const toggleTodo = async (id, todo) => {
  try {
    const { data } = await api.toggleTodo(id, todo);
    return data;
  } catch (error) {
    console.log(error);
    console.log('error en toggleTodo');
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data } = await api.deleteTodo(id);
    return data;
  } catch (error) {
    console.log(error);
    console.log('error en deleteTodo');
  }
};
