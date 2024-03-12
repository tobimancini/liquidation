import React, { FC, useEffect, useState } from "react";
import './Navbar.css'
import '../../Styles/Reutilized.css'
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
    setLoginOn: ()=> void;
}

const Navbar: FC<HeaderProps> = ({ setLoginOn }) => {
    const [actualLocation, setActualLocation] = useState('')
    const location = useLocation();

    useEffect(()=>{
        setActualLocation(location.pathname.split("/")[1]);        
    }, [location.pathname])

    return (
        <div className="navbarContainer flexRow">
            <Link to={"/administracion"} className={`navItem ${actualLocation === "administracion" && "active"}`}>Administración</Link>
            <Link to={"/liquidaciones"} className={`navItem ${actualLocation === "liquidaciones" && "active"}`}>Liquidaciones</Link>
            <Link to={"/periodos"} className={`navItem ${actualLocation === "periodos" && "active"}`}>Períodos</Link>
            <p className="navItem log" onClick={setLoginOn}>Iniciar sesión</p>
        </div>
    )
}

export default Navbar;