import axios from 'axios';


const url = 'http://localhost:4000/productos';





export const readTodos = () => axios.get(url);

 


export const createTodo = (todo) => axios.post(url, todo);




export const editTodo = (id, todo) => axios.patch(`${url}/${id}`, todo);

 


export const toggleTodo = (id, todo) => axios.patch(`${url}/${id}`, todo);
/*export const toggleTodo = (id) => axios.put(`${url}/${id}`); */



export const deleteTodo = (id) => axios.delete(`${url}/${id}`);
