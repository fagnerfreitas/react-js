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

       

       // https://www.imoview.com.br/api/Imovel/RetornarImoveisDisponiveis?parametros={"finalidade":"0"}
  

     fetch('https://www.imoview.com.br/api/Imovel/RetornarImoveisDisponiveis?parametros={"finalidade":"1","numeroPagina":"1","numeroRegistros":"20"}', {
            method: 'GET',
            headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
        
                Chave:'s71hZU+NeG628HSV9IpUaWMYg4X0qHw864RVUGPEexI=',
                //'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoxMjMsIm5vbWUiOiJGYWduZXIgSGVucmlxdWUifQ.hLC7dTxp19xo202SWuBzEeNxh7fAAphvCNlUTUMRgJU',
                //  'Content-Type':'application/x-www-form-urlencoded',
            },
            
              mode:'cors',
            // cache: 'default' ,
        })
            .then(res => res.json())
            .then((result) => {

                console.log(result);

                debugger;

                // let state = this.state;
                //  state.list = result;
                // this.setState({list:result});

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
            ).catch(function(error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="jumbotron">
                        <h1 className="text-center">Tel Inicial</h1>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" style={{ height: 500 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuoASEr4DroRUkBopD4dDLj3jz7a82fdoRfzFFV-8eds8-OwUY" alt="Primeiro Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" style={{ height: 500 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuoASEr4DroRUkBopD4dDLj3jz7a82fdoRfzFFV-8eds8-OwUY" alt="Segundo Slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" style={{ height: 500 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuoASEr4DroRUkBopD4dDLj3jz7a82fdoRfzFFV-8eds8-OwUY" alt="Terceiro Slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Anterior</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Próximo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-md-center" >
                        <div className="col-8">
                            <input value={this.props.email} onChange={this.email} />

                            <select value={this.props.cidade} onChange={this.cidade}>
                                <option value="Belo Horizonte">Belo Horizonte</option>
                                <option value="Nova Lima">Nova Lima</option>
                                <option value="Ibirite">Ibirite</option>
                                <option value="Santa Luzia">Santa Luzia</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Users users={this.props.users} />
                        </div>
                    </div>
                </div>





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
