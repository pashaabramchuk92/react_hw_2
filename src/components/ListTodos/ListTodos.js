import { TodoItem } from "../TodoItem/TodoItem";

export const ListTodos = ({ notes, url, handleDelete, handleUpdate }) => {
  return (
    <ul className="todo-list">
      {
        notes.map(note => (
          <TodoItem
            key={note.id}
            title={note.title}
            id={note.id}
            isComplete={note.isComplete}
            url={url}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      }
    </ul>
  );
}
