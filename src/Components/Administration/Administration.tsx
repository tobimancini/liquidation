import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Administration.css'
import '../../Styles/Reutilized.css'
import Table from "../Table/Table";
import { UserContext } from "../../Context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Administration = () => {
    const [createPath, setCreatePath] = useState("administradores")
    const { adminState, setAdminState } = useContext(UserContext)

    const adminHeaders = ["Usuario", "Email", "Teléfono", "Tipo de Administrador", "Acciones"];

    useEffect(() => {
        let newPath = adminState === "Administrador" ? "administradores" : adminState === "Asesor" ? "asesores" : adminState === "Equipo" ? "equipos" : "clientes"
        setCreatePath(newPath)
    }, [adminState])

    useEffect(()=>{
        setAdminState("Administrador")
    }, [])

    return (
        <section className="container">
            <h2 className="title marginYTitle">Administrar usuarios</h2>
            <div className="adminBtnsContainer marginYBtn">
                <button
                    onClick={() => setAdminState('Administrador')}
                    className={`btn xl btnPurple marginXBtn ${adminState === "Administrador" && "active"}`}>
                    Administradores
                </button>
                <button
                    onClick={() => setAdminState('Asesor')}
                    className={`btn xl btnPurple marginXBtn ${adminState === "Asesor" && "active"}`}>
                    Asesores
                </button>
                <button
                    onClick={() => setAdminState('Equipo')}
                    className={`btn xl btnPurple marginXBtn ${adminState === "Equipo" && "active"}`}>
                    Equipos
                </button>
                <button
                    onClick={() => setAdminState('Cliente')}
                    className={`btn xl btnPurple marginXBtn ${adminState === "Cliente" && "active"}`}>
                    Clientes
                </button>
            </div>
            <Link to={`${createPath}/crear`} className="btnNoBg">
                <FontAwesomeIcon icon={faPlus} className='plus' />
                Crear nuevo {adminState}
            </Link>
            <Table headers={adminHeaders} />
        </section>
    )
}

export default Administration;
