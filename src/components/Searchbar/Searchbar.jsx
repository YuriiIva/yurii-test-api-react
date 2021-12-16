import { useState } from "react";

const Searchbar = ({ input }) => {
  const [searchImg, setSearchImg] = useState("");

  const handleChange = (e) => {
    setSearchImg(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    input(searchImg);
  };
  return (
    <div>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            value={searchImg}
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};

export default Searchbar;
