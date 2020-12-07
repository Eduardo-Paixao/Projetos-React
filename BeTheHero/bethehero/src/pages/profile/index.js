import React from 'react';
import './styles.css';
import '../../global.css';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile (){
    return(
        <div className="profile-container">
            <div className="profile-header">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h2>Bem vindo a APAD</h2>
                    <Link to="/newincidente">
                        <button className="button button-cadastro">Cadastrar novo caso</button>
                    </Link>
                    <button className="button-power">
                        <FiPower size={18} color="#e02041"/>
                    </button>
                    {/* <Link className="button" to="/incidentes/new">Cadastrar novo caso</Link> */}
                </section>
            
                <h1>Casos cadastrados</h1>
                <ul className="cards-prifile">
                    <li>
                        <strong>Caso:</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni voluptatum ipsam vitae natus distinctio doloribus accusamus obcaecati sequi vero aperiam voluptates quas, fugit corporis repellendus. Consequatur eius sunt veritatis.</p>
                       
                        <strong>Valor:</strong>
                        <p>R$120,00 reais</p>
                       
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>                        
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni voluptatum ipsam vitae natus distinctio doloribus accusamus obcaecati sequi vero aperiam voluptates quas, fugit corporis repellendus. Consequatur eius sunt veritatis.</p>
                       
                        <strong>Valor:</strong>
                        <p>R$120,00 reais</p>
                       
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>                        
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni voluptatum ipsam vitae natus distinctio doloribus accusamus obcaecati sequi vero aperiam voluptates quas, fugit corporis repellendus. Consequatur eius sunt veritatis.</p>
                       
                        <strong>Valor:</strong>
                        <p>R$120,00 reais</p>
                       
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>                        
                    </li>
                    <li>
                        <strong>Caso:</strong>
                        <p>Cadelinha atropelada</p>

                        <strong>Descrição</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea magni voluptatum ipsam vitae natus distinctio doloribus accusamus obcaecati sequi vero aperiam voluptates quas, fugit corporis repellendus. Consequatur eius sunt veritatis.</p>
                       
                        <strong>Valor:</strong>
                        <p>R$120,00 reais</p>
                       
                        <button>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>                        
                    </li>
                </ul>
                
            </div>
        </div>
    );
}
