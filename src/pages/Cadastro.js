import React, { Component } from 'react';

import Alert from '../components/Alert';


export default class extends Component {


    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            pass: '',
            alert: false,
            msg: '',
            typeMsg: ''
        }

        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setsenha = this.setsenha.bind(this);
        this.inserirDados = this.inserirDados.bind(this);
    }

    componentWillMount() {

    }

    setNome(e) {
        this.setState({ nome: e.target.value });
    }

    setEmail(e) {

        this.setState({ email: e.target.value });
    }
    setsenha(e) {

        this.setState({ pass: e.target.value });
    }

    inserirDados() {

        fetch("http://localhost:8080/api/users/insert", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoxMjMsIm5vbWUiOiJGYWduZXIgSGVucmlxdWUifQ.hLC7dTxp19xo202SWuBzEeNxh7fAAphvCNlUTUMRgJU',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                email: this.state.email,
                pass: this.state.pass
            })
        })
            .then(res => res.json())
            .then((result) => {

                debugger;


                if (result.error == '') {

                    this.setState({ alert: true, msg: 'Inserido com sucesso', typeMsg: true });

                    this.setState({
                        nome: '',
                        email: '',
                        pass: ''
                    });

                } else {
                    this.setState({ alert: true, msg: result.error, typeMsg: false })
                }

                // this.props.editUsers(result)

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
            <div >
                <div className="jumbotron">
                    <h1 className="text-center">Tela de Cadastro</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            {this.state.alert && <Alert success={this.state.typeMsg} msg={this.state.msg} />}


                            {/* <form> */}
                            <div className="form-group">
                                <label >Nome</label>
                                <input type="text" className="form-control" id="nome" onChange={this.setNome} value={this.state.nome} placeholder="Digite seu nome" />
                                {/* <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> */}
                            </div>
                            <div className="form-group">
                                <label >E-mail</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.setEmail} value={this.state.email} aria-describedby="emailHelp" placeholder="Seu email" />
                                {/* <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small> */}
                            </div>
                            {/* <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Clique em mim</label>
                                </div> */}
                            <div className="form-group">
                                <label >Senha</label>
                                <input type="password" className="form-control" onChange={this.setsenha} value={this.state.pass} id="exampleInputPassword1" placeholder="Senha" />
                            </div>
                            <button type="buttom" className="btn btn-primary" onClick={this.inserirDados}>Enviar</button>
                            {/* </form> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}