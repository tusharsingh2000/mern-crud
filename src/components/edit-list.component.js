import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditList extends Component {

  constructor(props) {
    super(props)

    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      quantity: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/grocery/edit-list/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          quantity: res.data.quantity,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeItemName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeItemQuantity(e) {
    this.setState({ quantity: e.target.value })
  }

  

  onSubmit(e) {
    e.preventDefault()

    const listObject = {
      name: this.state.name,
      quantity: this.state.quantity
    };

    axios.put('http://localhost:4000/grocery/update-list/' + this.props.match.params.id, listObject)
      .then((res) => {
        console.log(res.data)
        console.log('List successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Grocery List 
    this.props.history.push('/grocery-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeItemName} />
        </Form.Group>

        <Form.Group controlId="Quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeItemQuantity} />
        </Form.Group>

  
        <Button variant="danger" size="lg" block="block" type="submit">
          Update Item
        </Button>
      </Form>
    </div>);
  }
}
