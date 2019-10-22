import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (
        //className == Class n0 HTML
    <div className="mx-auto my-auto bg-danger">

        <div className="text-center container-fluid mx-auto rounded">
            <div className="card-body">
                <p className="card-text text-light my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque eius earum suscipit, tenetur nam reiciendis blanditiis quae. Quia cumque nostrum dignissimos, quod eius similique vel sed tempora. Natus, delectus. </p>
            </div>
        </div>
    
        <div className="container-fluid mx-auto my-auto my-5 py-5 bg-danger row">
            <div className="card text-center col-md-6 ml-5 bg-light mx-auto my-1 rounded">
                <div className="card-body">
                    <h5 className="card-title">Titulo de Exemplo </h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque eius earum suscipit, tenetur nam reiciendis blanditiis quae. Quia cumque nostrum dignissimos, quod eius similique vel sed tempora. Natus, delectus. </p>
                    <img src="http://www.amanha.com.br/img/uploads/posts/c792df99-4a8f-4fed-910a-27240fc34c4d-vida_pessoal_trabalho_equilibrio_empreendedor.jpg" class="img-fluid" alt="Imagem responsiva"></img>
                </div>
            </div>
            <form className="col-md-4 mr-5 container-fluid mx-auto my-1 bg-light rounded">
                <div className="form-row mt-3">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"></input>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Endereço 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc."></input>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" className="form-control">
                            <option selected>Escolher...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputCEP">CEP</label>
                        <input type="text" className="form-control" id="inputCEP"></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label className="form-check-label" for="gridCheck">
                            Clique em mim
                        </label>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center my-3">
                    <button type="button" className="btn btn-danger ">Entrar</button>
                </div>
            </form>
        </div>
    </div>
    );
  }
}

export default LandingPage;
