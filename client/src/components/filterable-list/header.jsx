import React from 'react';

function Header({ keyword, onValueChange, onSubmit }) {
  return (
    <div className="filterable-list_header">
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter keyword..."
          value={keyword}
          onChange={event => onValueChange('keyword', event.target.value)}
        />

        <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  );
}

export default Header;
