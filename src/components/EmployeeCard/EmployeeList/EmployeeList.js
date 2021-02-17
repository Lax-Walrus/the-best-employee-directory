import React, { Component } from "react";
import API from "../../../utils/API";

export default class EmployeeList extends Component {
  state = {
    search: "",
    result: {},
  };

  fillEmployees = () => {
    let employees = [];
    for (let i = 0; i < 10; i++) {
      API.getUser()
        .then((res) => employees.push(res.data.results))
        .catch((err) => console.error(err));
    }
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.targe.value;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  searchEmployee = (query) => {
    ApplicationCache.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
