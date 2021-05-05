import { useState, useEffect } from 'react';

export const Footer = ({ handleCount, filter, handleFilterNotes, count, handleAllDelete }) => {
  
  useEffect(() => {
    handleCount();
  });

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a 
            href="/"
            className={filter === 'all' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleFilterNotes('all');
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/active"
            className={filter === 'active' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleFilterNotes('active');
            }}
          >Active</a>
        </li>
        <li>
          <a
            href="/completed"
            className={filter === 'completed' ? 'selected' : ''}
            onClick={(e) => {
              e.preventDefault();
              handleFilterNotes('completed');
            }}
          >Completed</a>
        </li>
      </ul>
        <button
          className="clear-completed"
          onClick={() => handleAllDelete(true)}
        >Clear completed</button>
    </footer>
  );
}
