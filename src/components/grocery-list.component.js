import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ItemTableRow from './ItemTableRow';


export default class GroceryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/grocery/')
      .then(res => {
        this.setState({
          items: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.items.map((res, i) => {
      return <ItemTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}