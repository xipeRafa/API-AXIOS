import React, { useState, useEffect } from 'react';
import {createTodo,deleteTodo,readTodos,toggleTodo,editTodo} from './crud/crud';


const App = () => {
  const [todo, setTodo] = useState({ nombre: '', precio: '' });
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(null);

  const [refresh, setRefresh]=useState(false)


    const fetchData = async () => {
      const result = await readTodos();
        setTodos(result)
        console.log(result)
    }

  const handleEdit = (todo) => {
    setTodo(todo);
    setEditMode(todo.id);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (todo.nombre.trim() === '' || todo.precio.trim() === '') {
      alert('Campo Vacio');
      return;
    }

    if (!editMode) {
      todo.toggle=false
      todo.id=Date.now()
      const result = await createTodo(todo);
      setTodos([...todos, result]);
    } else {
      await editTodo(editMode, todo);
      setEditMode(null);
    }
    setTodo({ nombre: '', precio: '' });
    setRefresh(!refresh)
  };

  const removeTodo = (id) => {
    deleteTodo(id);
    setRefresh(!refresh)
  };

  const togglesTodo = (id, todo) => {
    toggleTodo(id, {nombre:todo.nombre, precio:todo.precio, toggle:!todo.toggle}); 
    setRefresh(!refresh)
  };


  const {nombre, precio}=todo
  useEffect(()=>{    fetchData() },[refresh])
  return (
    <div className="container">
      <div className="row">

        <form className="form" onSubmit={onSubmitHandler}>

          <div className="row">
            <div>
              <input type="text" id="f" className="validate" value={nombre} onChange={(e) => setTodo({ ...todo, nombre: e.target.value })} />
              <label htmlFor="f">nombre</label>
            </div>

            <div>
              <input type="number" id="c" className="validate" value={precio} onChange={(e) => setTodo({ ...todo, precio: e.target.value})} />
              <label htmlFor="c">precio</label>
            </div>
          </div>

          <div className="row">
            <button className="add">{editMode ? 'UPDATE' : 'ADD'}</button>
          </div>

        </form>

        {todos.map(({nombre,precio,toggle,id}) => (
          <div key={id} className="collection-item">
            <div className="name">{nombre}</div>
            <div className="content"> {precio}</div>

            <div className="btns">
              <button className={toggle ? 'btn btnt' : 'btn btnf'} onClick={() => togglesTodo(id, {nombre,precio,toggle,id})}>
                {toggle ? 'Done!' : 'Active'}
              </button>

              <button className="btn" onClick={() => removeTodo(id)}>
                Delete
              </button>

              <button className="btn" onClick={() => handleEdit({nombre,precio,toggle,id})}>
                Edit
              </button>
            </div>
          </div>
        ))}



      </div>
    </div>
  );
};

export default App;

