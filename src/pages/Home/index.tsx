import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
// import * as ReactDOM from 'react-dom';

import './styles.css';
import './responsive.css';
import LogoExtended from '../../assets/illustrations/logo/logo-extended.png';
import LogoShort from '../../assets/illustrations/logo/logo-short.png';
import HomePhoto from '../../assets/illustrations/home.png';
import Register from '../../assets/illustrations/login.svg';
import Joel from '../../assets/photos/joel.jpeg';
import Cris from '../../assets/photos/cris.jpeg';
import Felipe from '../../assets/photos/felipe.jpg';
import Isa from '../../assets/photos/isa.jpg';
import Lucas from '../../assets/photos/lucas.jpg';
import Valid from '../../assets/illustrations/Valid.svg';
import CarouselLib from '../../components/Carousel';


const Home: React.FC = () => {
    const [sourceLogo, setSourceLogo] = React.useState<string>(LogoExtended);
    window.onscroll = function(){
        scrollFunction();
    };

    // const imgLogo = document.querySelector("img#logo") as HTMLImageElement;
    // const logo = ReactDOM.findDOMNode("logo") as HTMLImageElement;

    function scrollFunction() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            setSourceLogo(LogoShort);
            // imgLogo.src = LogoShort;
        }else{
            setSourceLogo(LogoExtended);
            // imgLogo.src = LogoExtended;
        }
    }

    return (
        <div className="container">
            {/* Header start */}
            <header>
                <div className="wrapper">
                    <div className="logoDiv">
                        <a href="#">
                            <img id="logo" src={sourceLogo} alt="Logo"/>
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
                                <a href="#contact">Contato</a>
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
                        <img id="homePhoto" src={HomePhoto} alt="Carinha legal"/>
                    </div>
                </section>
            </div>

            <div id="features">
                <h1 className="title">Características</h1>
                <div className="paragraph">
                    <p>O aplicativo conta com diversas funcionalidades como: o registro de alimentos, aviso de validades próximas, procura de receitas baseadas nos seus alimentos e ainda um serviço esclusivo para quem possui a assinatura</p>
                </div>
            </div>

            <div id="carousel">
                <section className="field-section">
                    <CarouselLib />
                </section>
            </div>

            <div id="register">
                <div className="titulo">
                    <h1 className="title">Registrar-se</h1>
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

            <div id="about">
                <div className="titulo">
                    <h1 className="title">Sobre nós</h1>
                </div>

                <section className="field-section">
                        <div className="card">
                            <div>
                                <div className="photo">
                                    <img src={Joel} alt="Joel"/>
                                </div>
                            </div>
                            <div className="description">
                                <h2>Joel Sena</h2>
                                <p>"Desde que adentrei o  mundo da programação venho descobrindo e explorando muitas tecnologias que estão revolucionando o mundo e espero arrecadar muito mais experiência nessa área e em outras mais."</p>
                                <p>Cargo: <b>Gerente geral da equipe de desenvolvimento</b></p>
                                <a href="https://joelee229.github.io/joel-sena" target="_blank" rel="noreferrer">Ver currículo</a>
                            </div>
                        </div>

                        <div className="card right-card">
                            <div className="description">
                                <h2>Felipe Toledo</h2>
                                <p>"Está tendo problemas com o aplicativo, eis a sua solução, procure-me e tudo estará solucionado, sempre prezo pela a educação."</p>
                                <p>Cargo: <b>Líder na organização da equipe, back-end, suporte, gestão da empresa.</b></p>
                                <a href="https://joelee229.github.io/joel-sena" target="_blank" rel="noreferrer">Ver currículo</a>
                            </div>

                            <div>
                                <div className="photo">
                                    <img src={Felipe} alt="Joel"/>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="photo">
                                    <img src={Lucas} alt="Joel"/>
                                </div>
                            </div>
                            <div className="description">
                                <h2>Lucas de Araújo</h2>
                                <p>"Vou dizer uma coisa, não digo nada, e digo mais, só digo isso: Em busca dos meus sonhos"</p>
                                <p>Cargo: <b>Desenvolvedor front-end</b></p>
                                <a href="https://joelee229.github.io/joel-sena" target="_blank" rel="noreferrer">Ver currículo</a>
                            </div>
                        </div>

                        <div className="card right-card">
                            <div className="description">
                                <h2>Cristhian de Azambuja</h2>
                                <p>"Estou sempre a disposição e de bom humor para te entregar a melhor experiência possível com meu trabalho."</p>
                                <p>Cargo: <b>Recursos humanos</b></p>
                                <a href="https://joelee229.github.io/joel-sena" target="_blank" rel="noreferrer">Ver currículo</a>
                            </div>

                            <div>
                                <div className="photo">
                                    <img src={Cris} alt="Joel"/>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div>
                                <div className="photo">
                                    <img src={Isa} alt="Joel"/>
                                </div>
                            </div>
                            <div className="description">
                                <h2>Israel Teles</h2>
                                <p>"Não tenho experiência em empregos a tempo inteiro, mas tenho algumas experiências como programador freelancer . "</p>
                                <p>Cargo: <b>Desenvolvedor back-end</b></p>
                                <a href="https://www.linkedin.com/in/israel-teles-bandeira-4a331b195/" target="_blank" rel="noreferrer">Ver currículo</a>
                            </div>
                        </div>
                        
                </section>
            </div>

            <div id="signature">
                <div className="titulo">
                    <h1 className="title">Assinaturas</h1>
                </div>

                <section className="field-section">
                    <div className="signature-card">
                        <div className="signature-header">
                            <h2>Plano básico</h2>
                            <p>BRL5,67/mês</p>
                        </div>

                        <span id="line"></span>

                        <div className="signature-body">
                            <div className="signature-quality">
                                <img src={Valid} width={40} alt=":)"/>
                                <p>Todas as funcionalidades com uso ilimitado.</p>
                            </div>
                        </div>

                        <div className="signature-footer">
                            <button>Começar</button>
                        </div>
                    </div>
                </section>
            </div>

            <footer id="contact">
                <section className="field-section">
                    <div className="social-medias">
                        <div className="logo">
                            <img src={LogoExtended} alt="SmartStorage"/>
                        </div>
                        <p id="copy">SmartStorage&copy;2020</p>
                        <div className="button-group">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                        </div>
                        <small>Illustrações por <a href="https://www.jamesdaly.me">James Daly</a></small>
                    </div>

                    <div className="contact">
                        <h2>Contato</h2>
                        <p><b>Email</b>: smartstock@gmail.com</p>
                        <form >
                            <fieldset>
                                <div className="field">
                                    <input type="email" name="emailContact" id="emailContact" required placeholder="Seu email"/>
                                </div>

                                <div className="field">
                                    <textarea name="message" id="textArea" cols={30} rows={5} placeholder="Mensagem" ></textarea>
                                </div>
                            </fieldset>

                            <button type="submit">
                                Enviar
                            </button>
                        </form>
                    </div>
                </section>
            </footer>

        </div>
    );
}

export default Home;