import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {SetErrors} from './setErrors'

export default class CreateItem extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemQuantity = this.onChangeItemQuantity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      quantity:'',
      errors:{}
    }
  }

  validate = (name, quantity) =>{
    const errors = SetErrors(name,quantity);
    this.setState({errors:errors});
    return Object.values(errors).every((err) => err === "");
}

  onChangeItemName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeItemQuantity(e) {
    this.setState({ quantity: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()
    const {name , quantity} = this.state;
    if(this.validate(name , quantity)){
      const listObject = {
        name: this.state.name,
        quantity: this.state.quantity
      };
  
      axios.post('http://localhost:4000/grocery/create-list', listObject)
        .then(res => console.log(res.data));
      alert("Added to list")
      this.setState({
        name: '',
        quantity:''
      });
    }

  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeItemName} />
          {this.state.errors.name &&(
                            <div className="text-danger">{this.state.errors.name}</div>
                        )}
        </Form.Group>

        <Form.Group controlId="Quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="text" value={this.state.quantity} onChange={this.onChangeItemQuantity} />
          {this.state.errors.quantity &&(
                            <div className="text-danger">{this.state.errors.quantity}</div>
                        )}
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Add to cart
        </Button>
      </Form>
    </div>);
  }
}
