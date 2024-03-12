import { FC } from 'react';
import './Header.css';
import '../../Styles/Reutilized.css'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

interface HeaderProps {
    setLoginOn: () => void;
}

const Header: FC<HeaderProps> = ({ setLoginOn }) => {
    return (
        <header className="headerContainer">
            <Link to={"/"}>
                <img className='headerLogo' src="../../custech.png" alt="shieldBearLogo" />
            </Link>

            <Navbar setLoginOn={setLoginOn} />
        </header>
    )
}

export default Header;