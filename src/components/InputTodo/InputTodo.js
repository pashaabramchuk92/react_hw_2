import { useState } from 'react';

export const InputTodo = ({ handleCreate }) => {
  const [title, setTitle] = useState('');

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === 'Enter') {
          if(e.target.value.trim()) {
            handleCreate(e.target.value);
          }
          setTitle('');
        }
      }}
    />
  );
}
