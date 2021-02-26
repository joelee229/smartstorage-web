import React, {useEffect, useCallback, useRef, FormEvent} from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import LazyLoad from "react-lazyload";
import { useTranslation} from 'react-i18next';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import './styles.css';
import './responsive.css';
import '../../translate/i18n';
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
import Usa from '../../assets/illustrations/flags/usa.png';
import Br from '../../assets/illustrations/flags/brasil.png';
import Spain from '../../assets/illustrations/flags/spain.png';
import Select from "react-select";
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';


const Home: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const imgRef = useRef<HTMLImageElement>({} as HTMLImageElement);
    const [currentFlag, setCurrentFlag] = React.useState<string>(Br);

    window.onscroll = useCallback(() => scrollFunction(), []);

    function scrollFunction() {
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            imgRef.current.src = LogoShort;
        }else{
            imgRef.current.src = LogoExtended;
        }
    }

    const options = [
        {
            value: "pt",
            label: (
                <img src={Br} alt="Português"/>
            )
        },
        {
            value: "en",
            label: (
                <img src={Usa} alt="Inglês"/>
            )
        },
        {
            value: "es",
            label: (
                <img src={Spain} alt="Espanhol"/>
            )
        }
    ];

    const { t, i18n } = useTranslation();

    const changeLanguage = useCallback((lng?: string) => {
        if(lng){
            i18n.changeLanguage(lng);
        }
    }, [i18n]);

    // useCallBack => Cria funções que não são renderizadas novamente se algum estado mudar ou coisa do tipo
    // São memorizadas
    const handleFormSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});
            // Criar um schema para o data que está vindo
            const schema = Yup.object().shape({
                user: Yup.string()
                    .required(t('validation.name.required')),
                email: Yup.string()
                    .email(t('validation.email.invalid'))
                    .required(t('validation.email.required')),
                password: Yup.string()
                    .min(8, t('validation.password.min'))
                    .matches(
                        /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/,
                        t('validation.password.matches')
                    ),
                confirmPassword: Yup.string()
                    .required(t('validation.confirmPassword.required'))
                    .when("password", {
                        is: (val: string) => (val && val.length > 0 ? true : false),
                        then: Yup
                          .string()
                          .oneOf([Yup.ref("password")], t('validation.confirmPassword.when')),
                    }),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            // Success validation
        } catch(err) {
            if (err instanceof Yup.ValidationError) {
                // Validation failed
                console.log(err.inner);
                const validationErrors = getValidationErrors(err);

                formRef.current?.setErrors(validationErrors);
            }
        }
        // console.log(data);
    }, [t]);

    const handleMessageSubmit = useCallback(async (event: FormEvent) => {
        event.preventDefault();

        alert("Enviado com sucesso!!");
    }, []);

    useEffect(() => {
        const currentLanguage = localStorage.getItem('i18nextLng');
        if(currentLanguage === "en"){
            setCurrentFlag(Usa);
        }else if(currentLanguage === "es"){
            setCurrentFlag(Spain);
        }else {
            setCurrentFlag(Br);
        }
    }, []);
    

    return (
        <div className="container">
            {/* Header start */}
            <header>
                <div className="wrapper">
                    <div className="logoDiv">
                        <a href="#logo">
                            <img id="logo" ref={imgRef} src={LogoExtended} alt="Logo"/>
                        </a>
                    </div>
                    <nav>
                        <ul className="nav-menu">
                            <li>
                                <a href="#features">{t('nav.items.1')}</a>
                            </li>

                            <li>
                                <a href="#about">{t('nav.items.2')}</a>
                            </li>

                            <li>
                                <a href="#contact">{t('nav.items.3')}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* Header end */}

            <div className="hero">
                <section className="field-section">
                    <div className="text">
                        <h1>
                            {t('hero.title.part1')}
                            <span className='yellow'>
                                #1
                            </span>
                            {t('hero.title.part2')}
                        </h1>
                        <p>
                            {t('hero.text.part1')}
                            <span className="yellow">SmartStorage</span>
                            {t('hero.text.part2')}
                        </p>
                        <button className="action">{t('hero.button')}</button>        
                    </div>

                    <div className="images">
                        <img id="homePhoto" src={HomePhoto} alt="Carinha legal"/>
                    </div>
                </section>
            </div>

            <Select
                className="custom-select"
                placeholder={
                    <img src={currentFlag} alt={i18n.language} />
                }
                options={options}
                onChange={(option) => changeLanguage(option?.value)}
            />

            <div id="features">
                <h2 className="title">{t('features.title')}</h2>
                <div className="paragraph">
                    <p>{t('features.text')}</p>
                </div>
            </div>

            <div id="carousel">
                <section className="field-section">
                    <CarouselLib />
                </section>
            </div>

            <div id="register">
                <div className="titulo">
                    <h2 className="title">{t('register.title')}</h2>
                </div>
                <section className="field-section">    
                    <div className="svg images">
                        <img src={Register} alt="Login"/>
                    </div>
                    <div className="form">
                        <Form ref={formRef} onSubmit={handleFormSubmit} >
                            <fieldset>
                                <div className="field">
                                    <label htmlFor="user">{t('register.labels.user')}</label>
                                    {/* <input type="text" name="user" id="user" required placeholder="Ex: Jane Doe"/> */}
                                    <Input type="text" name="user" placeholder="Ex: Jane Doe"/>
                                </div>

                                <div className="field">
                                    <label htmlFor="email">{t('register.labels.email')}</label>
                                    {/* <input type="email" name="email" id="email" required placeholder="Ex: janedoe@email.com"/> */}
                                    <Input type="text" name="email" placeholder="Ex: janedoe@email.com"/>
                                </div>

                                <div className="form-group">
                                    <div className="field mr-2">
                                        <label htmlFor="password">{t('register.labels.password')}</label>
                                        {/* <input type="password" id="password" name="password" required placeholder="*******"/> */}
                                        <Input type="password" name="password" placeholder="*******"/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="confirmPassword">{t('register.labels.confirmPassword')}</label>
                                        {/* <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="*******"/> */}
                                        <Input type="password" name="confirmPassword" placeholder="*******"/>
                                    </div>
                                </div>
                            </fieldset>

                            <button type="submit">
                                {t('register.button')}
                            </button>
                        </Form>
                    </div>
                </section>
            </div>

            <div id="about">
                <div className="titulo">
                    <h2 className="title">{t('about.title')}</h2>
                </div>

                <section className="field-section">
                       <LazyLoad height={300} offset={100}>
                            <div className="card">
                                <div>
                                    <div className="photo">
                                        <img src={Joel} alt="Joel"/>
                                    </div>
                                </div>
                                <div className="description">
                                    <h2>{t('about.card1.name')}</h2>
                                    <p>"{t('about.card1.bio')}"</p>
                                    <p>
                                        {t('about.card1.role.part1')}
                                        <b>{t('about.card1.role.part2')}</b>
                                    </p>
                                    <a href="https://www.linkedin.com/in/joel-sena/" target="_blank" rel="noreferrer">{t('about.button')}</a>
                                </div>
                            </div>
                       </LazyLoad>

                       <LazyLoad height={300}>
                            <div className="card right-card">
                                <div className="description">
                                    <h2>{t('about.card2.name')}</h2>
                                    <p>"{t('about.card2.bio')}"</p>
                                    <p>
                                        {t('about.card2.role.part1')}
                                        <b>{t('about.card2.role.part2')}</b>
                                    </p>
                                    <a href="https://github.com/SnowsToledo" target="_blank" rel="noreferrer">{t('about.button')}</a>
                                </div>

                                <div>
                                    <div className="photo">
                                        <img src={Felipe} alt="Felipe"/>
                                    </div>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height={300}>
                            <div className="card">
                                <div>
                                    <div className="photo">
                                        <img src={Lucas} alt="Lucas"/>
                                    </div>
                                </div>
                                <div className="description">
                                    <h2>{t('about.card3.name')}</h2>
                                    <p>"{t('about.card3.bio')}"</p>
                                    <p>
                                        {t('about.card3.role.part1')}
                                        <b>{t('about.card3.role.part2')}</b>
                                    </p>
                                    <a href="https://github.com/supersarradimn" target="_blank" rel="noreferrer">{t('about.button')}</a>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height={300}>
                            <div className="card right-card">
                                <div className="description">
                                    <h2>{t('about.card4.name')}</h2>
                                    <p>"{t('about.card4.bio')}"</p>
                                    <p>
                                        {t('about.card4.role.part1')}
                                        <b>{t('about.card4.role.part2')}</b>
                                    </p>
                                    <a href="https://www.linkedin.com/in/cristhian-villanova-1a67a3206/" target="_blank" rel="noreferrer">{t('about.button')}</a>
                                </div>

                                <div>
                                    <div className="photo">
                                        <img src={Cris} alt="Cristhian"/>
                                    </div>
                                </div>
                            </div>
                        </LazyLoad>

                        <LazyLoad height={300}>
                            <div className="card">
                                <div>
                                    <div className="photo">
                                        <img src={Isa} alt="Joel"/>
                                    </div>
                                </div>
                                <div className="description">
                                    <h2>{t('about.card5.name')}</h2>
                                    <p>"{t('about.card5.bio')}"</p>
                                    <p>
                                        {t('about.card5.role.part1')}
                                        <b>{t('about.card5.role.part2')}</b>
                                    </p>
                                    <a href="https://www.linkedin.com/in/israel-teles-bandeira-4a331b195/" target="_blank" rel="noreferrer">{t('about.button')}</a>
                                </div>
                            </div>
                        </LazyLoad>
                        
                </section>
            </div>

            <div id="signature">
                <div className="titulo">
                    <h2 className="title">{t('signatures.title')}</h2>
                </div>

                <section className="field-section">
                    <div className="signature-card">
                        <div className="signature-header">
                            <h2>{t('signatures.card.name')}</h2>
                            <p>{t('signatures.card.price')}</p>
                        </div>

                        <span id="line"></span>

                        <div className="signature-body">
                            <div className="signature-quality">
                                <img src={Valid} width={40} alt=":)"/>
                                <p>{t('signatures.card.functions')}</p>
                            </div>
                        </div>

                        <div className="signature-footer">
                            <button>{t('signatures.card.button')}</button>
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
                        <small>{t('footer.credits.part1')}<a href="https://www.jamesdaly.me">James Daly</a></small>
                        <small>
                            <div>
                                {t('footer.credits2.part1')}
                                <a href="https://www.freepik.com" title="Freepik">
                                    Freepik
                                </a>
                                {t('footer.credits2.part2')}
                                <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a>
                                </div>
                        </small>
                    </div>

                    <div className="contact">
                        <h2>{t('footer.contact.title')}</h2>
                        <p><b>Email</b>: smartstorage@gmail.com</p>
                        <form onSubmit={handleMessageSubmit}>
                            <fieldset>
                                <div className="field">
                                    <input type="email" name="emailContact" id="emailContact" required placeholder={t('footer.contact.placeholder.input')}/>
                                </div>

                                <div className="field">
                                    <textarea name="message" id="textArea" cols={30} rows={5} placeholder={t('footer.contact.placeholder.textarea')} ></textarea>
                                </div>
                            </fieldset>

                            <button type="submit">
                                {t('footer.contact.button')}
                            </button>
                        </form>
                    </div>
                </section>
            </footer>

        </div>
    );
}

export default Home;