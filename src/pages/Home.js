import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from '../components/Users';

import { editEmail, editCidade, editUsers } from '../actions/authActions'

class Home extends Component {

    constructor(props) {
        super(props);

        this.email = this.email.bind(this);
        this.cidade = this.cidade.bind(this);
    }

    email(event) {
        this.props.editEmail(event.target.value)
    }

    cidade(event) {

        this.props.editCidade(event.target.value);
    }

    componentDidMount() {

        fetch("http://localhost:8080/api/users/getAll/", {
            headers: {
                // 'Accept': 'application/json',
                //   'Content-Type': 'application/json',
                'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoxMjMsIm5vbWUiOiJGYWduZXIgSGVucmlxdWUifQ.hLC7dTxp19xo202SWuBzEeNxh7fAAphvCNlUTUMRgJU',
                // 'Content-Type':'application/x-www-form-urlencoded'
            }
        })
            .then(res => res.json())
            .then((result) => {

                // let state = this.state;
                //  state.list = result;
                // this.setState({list:result});

                this.props.editUsers(result)



                //  state.list = result;
                //  state.setState();
            },
                // Nota: É importante lidar com os erros aqui
                // em vez de um bloco catch() para não recebermos
                // exceções de erros dos componentes.ssss
                (error) => {
                    console.log(error);
                }
            )
    }


    render() {
        return (
            <div>
                <h1>{this.props.email}</h1>
                <h1>{this.props.senha}</h1>
                <h1>{this.props.cidade}</h1>

                <input value={this.props.email} onChange={this.email} />
                <select value={this.props.cidade} onChange={this.cidade}>
                    <option value="Belo Horizonte">Belo Horizonte</option>
                    <option value="Nova Lima">Nova Lima</option>
                    <option value="Ibirite">Ibirite</option>
                    <option value="Santa Luzia">Santa Luzia</option>
                </select>


                <Users users={this.props.users} />
  

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.auth.users,
        email: state.auth.email,
        senha: state.auth.senha,
        cidade: state.auth.cidade
    }
}

const HomeConnect = connect(mapStateToProps, { editEmail, editCidade, editUsers })(Home);
export default HomeConnect;