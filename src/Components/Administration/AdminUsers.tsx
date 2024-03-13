import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import './Administration.css'
import '../../Styles/Reutilized.css'
import Table from "../Table/Table";
import { UserContext } from "../../Context/UserContext";

const AdminUsers = () => {

    const [createPath, setCreatePath] = useState("administradores")
    const { adminUsersState, setAdminUsersState } = useContext(UserContext)

    const adminHeaders = ["Usuario", "Email", "Teléfono", "Tipo de Administrador", "Acciones"];

    useEffect(() => {
        let newPath = adminUsersState === "Administrador" ? "administradores" : adminUsersState === "Asesor" ? "asesores" : adminUsersState === "Equipo" ? "equipos" : "clientes"
        setCreatePath(newPath)
    }, [adminUsersState])

    useEffect(() => {
        setAdminUsersState("Asesor")
    }, [])

    return (
        <>
            <h2 className="subtitle marginYTitle">Seleccione un tipo de usuario:</h2>
            <div className="btnsContainer marginYBtn">
                <button
                    onClick={() => setAdminUsersState('Asesor')}
                    className={`btn xl btnWhite marginXBtn ${adminUsersState === "Asesor" && "active"}`}>
                    Asesores
                </button>
                <button
                    onClick={() => setAdminUsersState('Equipo')}
                    className={`btn xl btnWhite marginXBtn ${adminUsersState === "Equipo" && "active"}`}>
                    Equipos
                </button>
                <button
                    onClick={() => setAdminUsersState('Cliente')}
                    className={`btn xl btnWhite marginXBtn ${adminUsersState === "Cliente" && "active"}`}>
                    Clientes
                </button>
                <button
                    onClick={() => setAdminUsersState('Administrador')}
                    className={`btn xl btnWhite marginXBtn ${adminUsersState === "Administrador" && "active"}`}>
                    Administradores
                </button>
            </div>
            <Link to={`${createPath}/crear`} className="btnNoBg">
                <FontAwesomeIcon icon={faPlus} className='plus' />
                Crear nuevo {adminUsersState}
            </Link>
            <Table headers={adminHeaders} />
        </>
    )
}

export default AdminUsers;