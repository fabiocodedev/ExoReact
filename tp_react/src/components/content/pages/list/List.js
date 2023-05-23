import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export class List extends Component {
    render() {
      const data = [
          {firstname: "Boris", lastname:"Jonson", moyenne:13} ,
          {firstname: "Abert", lastname:"Souza", moyenne:12},
          {firstname: "Gonzalo", lastname:"Hugo", moyenne:18},
          {firstname: "Antoine", lastname:"Leboutellier", moyenne:8},
          {firstname: "Victor", lastname:"Sanchez", moyenne:15},
          {firstname: "Nuno", lastname:"Bata", moyenne:13},
          {firstname: "Antonio", lastname:"Conte", moyenne:11},
          {firstname: "Philip", lastname:"Auguste", moyenne:17},
          {firstname: "Ricardo", lastname:"Braz", moyenne:19}
      ]
    return (
    <div>
        <h2>LISTE DE TOUS LES ETUDIANTS</h2>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody >
      {data.map(element => <tr >
          <td>{element.firstname}</td>
          <td>{element.lastname}</td>
          <td>{element.moyenne} / 20</td>
        </tr>)}
      </tbody>
      </Table>
    </div>
    )
  }
}

export default List



