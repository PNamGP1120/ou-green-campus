import { useEffect, useRef } from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ showSearch, setShowSearch }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="d-flex align-items-center gap-2" ref={searchRef}>
      <button
        className="bg-transparent border-0 p-2 position-relative"
        onClick={() => setShowSearch((prev) => !prev)}
      >
        <i className="bi bi-search fs-5 text-success"></i>
      </button>

      {showSearch && (
        <Form.Control
          type="search"
          placeholder="Tìm kiếm..."
          autoFocus
          className="rounded-pill py-2 ps-4 border border-success"
          style={{
            backgroundColor: '#f8f9fa',
            minWidth: '250px',
            transition: 'all 0.3s',
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
