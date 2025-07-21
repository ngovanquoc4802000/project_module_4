import React from 'react';

function Header() {
  return (
    <nav className="navbar bg-light px-4">
      <form className="d-flex w-100" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Tìm kiếm món ăn..."
        />
        <button className="btn btn-outline-success" type="submit">
          Tìm
        </button>
      </form>
    </nav>
  );
}

export default Header;
