import React from 'react';

import './styles.css';
import Logo from '../../assets/logo.png';
import HomePhoto from '../../assets/home.png';
import Register from '../../assets/login.svg';


const Home = () => {
    return (
        <div className="container">
            {/* Header start */}
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav-menu">
                            <li>
                                <a href="#features">Características</a>
                            </li>

                            <li>
                                <a href="#about">Sobre nós</a>
                            </li>

                            <li>
                                <a href="#about">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Header end */}

            <div className="hero">
                <section>
                    <div className="text">
                        <h1>StartUp <span className="yellow">#1</span> no gerenciamento em estoque de alimentos.</h1>
                        <p>O <span className="yellow">SmartStorage</span> é um aplicativo para o controle/organização do armazenamento de produtos alimentícios. Facilitando a rotina dos usuários, por meio de um controle de despensa preciso e simples, uma lista de compra ágil, lembretes para evitar o desperdício de alimentos e até mesmo de dinheiro.</p>
                        <button className="action">Comece já</button>        
                    </div>

                    <div className="foto">
                        <img src={HomePhoto} alt="Carinha legal"/>
                    </div>
                </section>
            </div>

            <div id="features">
                <h2 className="title">Características</h2>
                <div className="paragraph">
                    <p>O aplicativo conta com diversas funcionalidades como: o registro de alimentos, aviso de validades próximas, procura de receitas baseadas nos seus alimentos e ainda um serviço esclusivo para quem possui a assinatura</p>
                </div>
            </div>

            <div className="register">
                <div className="titulo">
                    <h2 className="title">Registrar-se</h2>
                </div>
                <section className="field-section">    
                    <div className="svg">
                        <img src={Register} alt="Login"/>
                    </div>
                    <div className="form">
                        <form >
                            <fieldset>
                                <div className="field">
                                    <label htmlFor="email">Usuário</label>
                                    <input type="text" name="user" id="user" required placeholder="Ex: Jane Doe"/>
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" required placeholder="Ex: janedoe@email.com"/>
                                </div>

                                <div className="form-group">
                                    <div className="field mr-2">
                                        <label htmlFor="password">Senha</label>
                                        <input type="password" id="password" name="password" required placeholder="*******"/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="confirmPassword">Confirmar senha</label>
                                        <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="*******"/>
                                    </div>
                                </div>
                            </fieldset>

                            <button type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;