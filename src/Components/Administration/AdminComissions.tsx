import React, { useContext, useEffect } from "react";
import '../../Styles/Reutilized.css'
import './Administration.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../Context/UserContext";

const AdminComissions = () => {

    const { adminComState, setAdminComState } = useContext(UserContext);

    const changeAdminComState = (type: string, value: string) => {
        setAdminComState((prevState) => {
            return {
                ...prevState,
                [type]: value,
            };
        });
    }

    useEffect(() => {
        setAdminComState({
            compañía: "arpartners",
            equipo: "",
            vendedor: "manager",
        })
    }, [])

    return (
        <>
            <h2 className="subtitle marginYTitle">Seleccione una compañía:</h2>
            <div className="btnsContainer marginYBtn">
                <button
                    onClick={() => changeAdminComState('compañía', 'arpartners')}
                    className={`btn btnWhite marginXBtn ${adminComState.compañía === "arpartners" && "active"}`}>
                    AR Partners
                </button>

                <button
                    onClick={() => changeAdminComState('compañía', 'grupoieb')}
                    className={`btn btnWhite marginXBtn ${adminComState.compañía === "grupoieb" && "active"}`}>
                    Grupo IEB
                </button>
                <button
                    onClick={() => changeAdminComState('compañía', 'inviu')}
                    className={`btn btnWhite marginXBtn ${adminComState.compañía === "inviu" && "active"}`}>
                    Inviu
                </button>
                <button
                    onClick={() => changeAdminComState('compañía', 'otro')}
                    className={`btn btnWhite marginXBtn ${adminComState.compañía === "otro" && "active"}`}>
                    Otro
                </button>
            </div>

            <h2 className="subtitle marginYRegular">Seleccione un equipo:</h2>
            <div className="inputContainer lg">
                <label className="label" htmlFor="teamComission">Equipo</label>
                <select className="input" name="teamComission" id="teamComission">
                    <option value="">Seleccione un equipo</option>
                    <option value="">Tobias Mancini</option>
                </select>
            </div>

            <h2 className="subtitle marginYTitle">Si el rol del vendedor fuera:</h2>

            <div className="btnsContainer marginYBtn">
                <button
                    onClick={() => changeAdminComState('vendedor', 'manager')}
                    className={`btn btnWhite marginXBtn ${adminComState.vendedor === "manager" && "active"}`}>
                    Manager
                </button>
                <button
                    onClick={() => changeAdminComState('vendedor', 'coordinador')}
                    className={`btn btnWhite marginXBtn ${adminComState.vendedor === "coordinador" && "active"}`}>
                    Coordinador
                </button>
                <button
                    onClick={() => changeAdminComState('vendedor', 'asesor')}
                    className={`btn btnWhite marginXBtn ${adminComState.vendedor === "asesor" && "active"}`}>
                    Asesor
                </button>
            </div>

            <div className="flexRow centerCenter">
                <div className="inputContainer sm">
                    <label className="label" htmlFor="managerComission">Comisión Manager(%)</label>
                    <input className="input sm" type="number" name="managerComission" id="managerComission" />
                </div>
                <p className="btnNoBg forInput">
                    <FontAwesomeIcon icon={faPen} className='plus' />
                    Editar
                </p>
            </div>

            <div className="flexRow centerCenter">
                <div className="inputContainer sm">
                    <label className="label" htmlFor="managerComission">Comisión Coordinador(%)</label>
                    <input className="input sm" type="number" name="managerComission" id="managerComission" />
                </div>
                <p className="btnNoBg forInput">
                    <FontAwesomeIcon icon={faPen} className='plus' />
                    Editar
                </p>
            </div>

            <div className="flexRow centerCenter">
                <div className="inputContainer sm">
                    <label className="label" htmlFor="managerComission">Comisión Asesor(%)</label>
                    <input className="input sm" type="number" name="managerComission" id="managerComission" />
                </div>
                <p className="btnNoBg forInput">
                    <FontAwesomeIcon icon={faPen} className='plus' />
                    Editar
                </p>
            </div>
        </>
    )
}

export default AdminComissions;