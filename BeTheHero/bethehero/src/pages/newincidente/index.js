import React from 'react';
import './styles.css';
import '../../global.css';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';

export default function NewIncidente (){
    return(
        <div className="NewIncidente-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facere quas similique dicta, magni libero nam</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder ="Título do caso"/>                 
                    <textarea placeholder ="Descrição"/>
                    <input placeholder ="Valor em reais"/>     
                    <div>
                        <button className="button btn-cadastrar" type="submit">Cadastrar</button>
                        <button className="button btn-cancelar" type="submit">Cancelar</button>
                    </div>               
                </form>
            </div>
        </div>
    );
}