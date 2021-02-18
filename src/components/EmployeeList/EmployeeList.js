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
          employees: res.data.result,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => console.error(err));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  searchByName = (event) => {
    event.preventDefault();
    const filtered = this.state.filteredEmployees.filter(
      (obj) => obj.name.first === this.state.getUser
    );
    this.setState({ employees: filtered });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const jason = this.state.employees.filter((employee) => {
      const fullName = `${employee.name.first} ${employee.name.last}`;
      return fullName.toLowerCase().includes(this.state.search.toLowerCase());
    });
    this.searchEmployee(this.state.search);
  };

  handleNameFilter = () => {
    const sorted = this.state.filteredEmployees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    this.setState({ filteredEmployees: sorted });
  };

  render() {
    return (
      <div>
        <div className="list-container">
          <form
            className="form-inline"
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
            </div>
            <button
              onClick={(this.searchByName}
              type="submit"
              className="btn btn-primary mb-2"
            >
              Search!
            </button>
          </form>

          <table className="table table-striped">
            <thead>
              <tr>
                <th></th>
                <th
                  scope="col"
                  onClick={this.handleNameFilter}
                  className="name.first"
                >
                  <i className="fas fa-user-alt center-icon"></i>
                  <i className="fas fa-caret-down"></i>
                </th>
                <th scope="col" className="center-icon">
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
      </div>
    );
  }
}
