import React, { useState } from 'react';
import './Home.css';
import '../../Styles/Reutilized.css'
import Header from '../Header/Header';
import { LoginModal } from '../Login/LoginModal';

const Home = () => {

    return (
        <div className='homeContainer'>
            <div className='homeMainBanner'>
                <div className='homeTextContainer'>
                    <div className='logoAndText'>
                        <img className='lotopng' src="../../../loto.png" alt="" />
                        <div>
                            <h1 className='homeTitle purpleText'>
                                SIMPLE.
                            </h1>
                            <h1 className='homeTitle purpleText'>
                                PRÁCTICA.
                            </h1>
                        </div>
                    </div>
                    <h1 className='homeTitle purpleText'>
                        A <span>TU</span> MEDIDA.
                    </h1>
                    <div className='homeSubtitleContainer'>
                        <p className='homeSubtitle'>Plataforma para gestionar comisiones.
                            {/* <img className='qqLogo' src='../../../custechLogo.png' /> */}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;