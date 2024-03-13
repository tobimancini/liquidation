import React, { useContext, useEffect } from "react";

import './Administration.css'
import '../../Styles/Reutilized.css'
import { UserContext } from "../../Context/UserContext";
import AdminUsers from "./AdminUsers";
import AdminComissions from "./AdminComissions";

const Administration = () => {

    const { setAdminState, adminState } = useContext(UserContext);

    useEffect(() => {
        setAdminState('Usuarios')
    }, [])

    return (
        <section className="container">
            <h1 className="title marginYTitle">Administración</h1>
            <div className="btnsContainer marginYTitle">
                <button
                    onClick={() => setAdminState('Usuarios')}
                    className={`btn btnWhite marginXBtn ${adminState === "Usuarios" && "active"}`}>
                    Usuarios</button>
                <button
                    onClick={() => setAdminState('Comisiones')}
                    className={`btn btnWhite marginXBtn ${adminState === "Comisiones" && "active"}`}>
                    Comisiones</button>
            </div>
            {
                adminState === "Usuarios" ?
                    <AdminUsers />
                    :
                    <AdminComissions />
            }
        </section>
    )
}

export default Administration;
