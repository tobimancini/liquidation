import { FC, useState } from 'react';
import './Login.css'
import '../../Styles/Reutilized.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons';

interface LoginModalProps {
    onVisible: boolean;
    closeModal: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({ onVisible, closeModal }) => {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [modalStatus, setModalStatus] = useState('login');

    const empresas = [
        "Loyal Investments",
    ]

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {
                onVisible &&
                <div className='loginModalOverlay'>
                    <div className='loginModalContainer'>
                        <FontAwesomeIcon icon={faXmark} className='exitIcon' onClick={closeModal} />
                        <div className='loginTitleSection'>
                            <div className='loginTitles'>
                                <h2 className='loginModalSubtitle purpleText'>Bienvenido/a!</h2>
                            </div>
                            <img className='loginLogo' src="../../custechLogo.png" alt="qqLogin" />
                        </div>

                        <form action="" className='loginForm'>
                            {
                                modalStatus === 'register' &&
                                <>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="name">Nombre</label>
                                        <input className="input" type="text" name="name" id="name" />
                                    </div>
                                    <div className="inputContainer">
                                        <label className="label" htmlFor="surname">Contraseña</label>
                                        <input className="input" type="text" name="surname" id="surname" />
                                    </div>
                                    <div className='inputContainer'>
                                        <select className='input' name="empresas" id="selectEmpresas">
                                            <option value="">Seleccione su empresa</option>
                                            {
                                                empresas.map((empresa, index) => {
                                                    return <option key={empresa + index}>{empresa}</option>
                                                })
                                            }
                                        </select>
                                    </div>
                                </>
                            }
                            <div className="inputContainer">
                                <label className="label" htmlFor="email">Email</label>
                                <input className="input" type="email" name="email" id="email" />
                            </div>
                            <div className="inputContainer">
                                <label className="label" htmlFor="password">Contraseña</label>
                                <input className="input" type={showPassword ? 'text' : 'password'} name="password" id="password" />
                            </div>

                            <div className='loginPassActions'>
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='loginShowPass' onClick={handleTogglePassword} />
                                {
                                    modalStatus === 'login' &&
                                    <p className='loginPassForget grayText'>¿Has olvidado tu contraseña?</p>
                                }
                            </div>
                            <div className='logRegisterBtns'>
                                <button className='btn btnPurple marginXSmall' onClick={() => setModalStatus('login')} type='button'>Inicia sesión</button>
                                <button className='btn btnPurple marginXSmall' onClick={() => setModalStatus('register')} type='button'>Crea tu cuenta</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}