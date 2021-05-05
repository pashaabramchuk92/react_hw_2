import { useState, useRef, useEffect } from 'react';

export const TodoItem = ({ title, id, isComplete, handleDelete, handleUpdate }) => {
  const [completeClassName, setCompleteClassName] = useState('');
  const [editClassName, setEditClassName] = useState('');
  const [value, setValue] = useState(title);
  const [editing, setEditing] = useState(false);
  
  // const editRef = useRef();
  // useEffect(() => {
  //   editRef.current.focus();
  // }, [editing]);

  return (
    <li className={`${completeClassName} ${editClassName}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange={(e) => {
            handleUpdate(id, e.target.checked, title);
            setCompleteClassName(e.target.checked ? 'completed' : '');
          }}
        />
        <label
          onDoubleClick={() => {
            setEditClassName('editing');
            setEditing(true);
          }}
        >{title}</label>
        <button
          type='button'
          className="destroy"
          onClick={() => handleDelete(id)}
        ></button>
      </div>
      <input
        type="text"
        className='edit'
        value={value}
        onBlur={() => {
          setEditClassName('');
          setEditing(false);
          handleUpdate(id, isComplete, value);
        }}
        onChange={(e) => setValue(e.target.value)}
      />
    </li>
  );
}
