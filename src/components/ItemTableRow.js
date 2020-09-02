import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ItemTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        axios.delete('http://localhost:4000/grocery/delete-list/' + this.props.obj._id)
            .then((res) => {
                console.log('Item successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.quantity}</td>
                <td>
                    <Link className="edit-link" to={"/edit-list/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteItem} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}