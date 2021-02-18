import React, { Component, useState } from "react";

function Card(props) {
  return (
    <tr key={props.id}>
      <td>
        <img alt="Thumbnail" src={props.picture} />
      </td>
      <td>{`${props.firstName} ${props.lastName}`}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.DOB}</td>
    </tr>
  );
}

export default Card;
