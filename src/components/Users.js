import React, { Component } from 'react';
export default class Users extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Primeiro</th>
                            <th scope="col">Último</th>
                            <th scope="col">Nickname</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.users.map((u,i) => 
                        <tr>
                            <th scope="row">{i}</th>
                            <td>{u.nome} </td>
                            <td>{u.email}</td>
                        </tr>
                    )}
                        
                    </tbody>
                </table>

            </div>
        )
    }

}