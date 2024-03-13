import React from 'react';
import './Home.css';
import '../../Styles/Reutilized.css'

const Home = () => {

    return (
        <div className='homeContainer'>
            <div className='homeMainBanner'>
                <div className='homeTextContainer'>
                    <div>
                        <h1 className='homeTitle'>
                            SIMPLE.
                        </h1>
                        <h1 className='homeTitle'>
                            PRÁCTICA.
                        </h1>
                        <h1 className='homeTitle'>
                            A <span className='purpleText'>TU</span> MEDIDA.
                        </h1>
                        <div className='homeSubtitleContainer'>
                            <p className='homeSubtitle'>Plataforma para gestionar comisiones.</p>

                        </div>
                    </div>
                    <img className='lotopng' src="../../../silueta.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;