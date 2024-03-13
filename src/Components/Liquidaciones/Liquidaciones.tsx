import React, { useContext } from "react";
import '../../Styles/Reutilized.css'
import { UserContext } from "../../Context/UserContext";
import Table from "../Table/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Liquidaciones = () => {

    const { liquidationState, setLiquidationState } = useContext(UserContext);

    return (
        <section className="container">
            <h1 className="title marginYTitle">Listado de Liquidaciones</h1>
            <div className="btnsContainer marginYBtn">
                <button
                    onClick={() => setLiquidationState('arpartners')}
                    className={`btn btnWhite marginXBtn ${liquidationState === "arpartners" && "active"}`}>
                    AR Partners</button>
                <button
                    onClick={() => setLiquidationState('grupoieb')}
                    className={`btn btnWhite marginXBtn ${liquidationState === "grupoieb" && "active"}`}>
                    Grupo IEB</button>
                <button
                    onClick={() => setLiquidationState('inviu')}
                    className={`btn btnWhite marginXBtn ${liquidationState === "inviu" && "active"}`}>
                    Inviu</button>
            </div>

            <div className="flexRow centerCenter">
                <div className="inputContainer sm">
                    <label htmlFor="search" className="label">Buscar por período</label>
                    <select className="input sm">
                        <option value="">19/09/1995</option>
                    </select>
                </div>
                <p className="btnNoBg forInput">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='plus' />
                    Buscar
                </p>
            </div>
            <Table headers={["", "Productor", "Período", "Estado", "Fecha Pago", ""]} />
        </section>
    )
}

export default Liquidaciones;