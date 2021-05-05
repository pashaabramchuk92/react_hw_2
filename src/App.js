import { useState, useEffect } from 'react';
import "./styles.css";
import useFetch from './useFetch';
import { InputTodo } from "./components/InputTodo/InputTodo";
import { ListTodos } from "./components/ListTodos/ListTodos";
import { Footer } from "./components/Footer/Footer";
import { ToggleTodos } from "./components/ToggleTodos/ToggleTodos";

const App = () => {
  const BASE_URL = 'http://localhost:3000/notes';

  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');
  const [count, setCount] = useState(0);

  const getNotes = async () => {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();
    setNotes(data);
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleCreate = async (title) => {
    const note = {
      title,
      isComplete: false
    }

    const resp = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note)
    });
    await resp.json();
    getNotes();
  }

  const handleDelete = async (id) => {
    const resp = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    await resp.json();
    getNotes();
  }

  const handleUpdate = async (id, isComplete, title) => {
    const resp = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, isComplete })
    });
    await resp.json();
    getNotes();
  }

  const handleFilterNotes = async (filter) => {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();

    if(filter === 'all') {
      setFilter('all');
      setNotes(data);
    }

    if(filter === 'active') {
      const active = data.filter(note => note.isComplete === false);
      setFilter('active');
      setNotes(active);
    }

    if(filter === 'completed') {
      const completed = data.filter(note => note.isComplete === true);
      setFilter('completed');
      setNotes(completed);
    }
  }

  const handleActiveNotesCount = async () => {
    const resp = await fetch(BASE_URL);
    const data = await resp.json();

    const activeCount = await data.filter(note => !note.isComplete).length;
    setCount(activeCount);
  }

  const handleAllComplete = async () => {
    console.log('all complete');

    //как? куда делать запрос?
  }

  const handleAllDelete = async (isComplete) => {
    //как? куда делать запрос?
    console.log('all delete');
    // const resp = await fetch(BASE_URL, {
    //   method: "DELETE",
    // });
    // const data = await resp.json();
    // data.filter(note => note.isComplete === isComplete);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <InputTodo handleCreate={handleCreate} />
      </header>
      <section className="main">
        <ToggleTodos />
        {notes && (
          <ListTodos
            notes= {notes}
            url={BASE_URL}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        )}
      </section>
      {notes.length > 0 && (
        <Footer
          handleCount={handleActiveNotesCount}
          filter={filter}
          handleFilterNotes={handleFilterNotes}
          count={count}
          handleAllDelete={handleAllDelete}
        />
      )}
    </section>
  );
}

export default App;
