import { Component } from "react";

class Searchbar extends Component {
  state = {
    searchImg: "",
  };

  handleChange = (e) => {
    this.setState({ searchImg: e.target.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.input(this.state.searchImg);
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              value={this.state.searchImg}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
