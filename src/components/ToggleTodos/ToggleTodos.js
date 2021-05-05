import { useEffect, useState } from 'react';

export const ToggleTodos = () => {
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
