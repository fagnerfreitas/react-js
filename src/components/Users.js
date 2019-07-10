import React, { Component } from 'react';
export default class Users extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                {this.props.users.map((u) => <h3>{u.nome} - {u.email}</h3>)}

            </div>
        )
    }

}