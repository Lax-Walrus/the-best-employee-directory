import React, { Component } from "react";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import API from "../../utils/API";

export default class EmployeeList extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
  };

  componentDidMount() {
    API.getUser()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.error(err));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const jason = this.state.employees.filter((employees) => {
      const fullName = `${employees.name.first} ${employees.name.last}`;
      return fullName.toLowerCase().includes(this.state.search.toLowerCase());
    });
    this.setState({ filteredEmployees: jason });
  };

  nameSearch = (event) => {
    event.preventDefault();
    const filtered = this.state.employees.filter(
      (obj) => obj.name.first === this.state.search
    );
    this.setState({ employees: filtered });
  };

  handleNameFilter = () => {
    console.log("Click");
    const sorted = this.state.filteredEmployees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    this.setState({ filteredEmployees: sorted });
  };

  render() {
    return (
      <div className="list-container">
        <form
          className="form-inline submit"
          id="form-center"
          onSubmit={this.handleFormSubmit}
        >
          <div className="form-group mb-2">
            <label htmlFor="emp-search" className="sr-only">
              Search Employees:
            </label>
            <input
              type="text"
              name="search"
              onChange={this.handleInputChange}
              placeholder="Search Employees"
            />

            <button
              onClick={
                (this.nameSearch,
                console.log("this console log can be ignored"))
              }
              type="submit"
              className="btn btn-primary mb-2"
            >
              Search!
            </button>
          </div>
        </form>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Picture</th>
              <th
                scope="col"
                // onClick={this.handleNameFilter}
                className="name.first"
                onClick={this.handleNameFilter}
              >
                Sort by First Name
                <i className="fas fa-user-alt center-icon"></i>
                <i className="fas fa-caret-down"></i>
              </th>
              <th scope="col" className="center-icon">
                {" "}
                Email
                <i className="far fa-envelope center-icon"></i>
              </th>
              <th scope="col" className="center-icon">
                {" "}
                Phone
                <i className="far fa-envelope center-icon"></i>
              </th>
              <th scope="col" className="center-icon">
                {" "}
                Age
                <i className="far fa-envelope center-icon"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredEmployees.map((employee, index) => (
              <EmployeeCard
                firstName={employee.name.first}
                lastName={employee.name.last}
                DOB={employee.dob.age}
                email={employee.email}
                phone={employee.cell}
                picture={employee.picture.large}
                key={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
