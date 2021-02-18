import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    search: "",
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };
}

return (
  <form className="form-inline" id="form-center">
    <div className="form-group mb-2">
      <label htmlFor="emp-search" className="sr-only">
        Search Employees:
      </label>
      <input
        type="text"
        name="search"
        onChange={this.handleInputChange}
        placeholder="Search by Name"
      />
    </div>
    <button type="submit" className="btn btn-primary mb-2">
      Search!
    </button>
  </form>
);
