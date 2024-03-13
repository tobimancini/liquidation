import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Table from "../Table/Table";
import { UserContext } from "../../Context/UserContext";

const Periodos = () => {
    const { periodState, setPeriodState } = useContext(UserContext);

    return (
        <section className="container">
            <h1 className="title marginYTitle">Listado de Períodos</h1>
            <div className="btnsContainer marginYBtn">
                <button
                    onClick={() => setPeriodState('arpartners')}
                    className={`btn xl btnWhite marginXBtn ${periodState === "arpartners" && "active"}`}>
                    AR Partners
                </button>
                <button
                    onClick={() => setPeriodState('grupoieb')}
                    className={`btn xl btnWhite marginXBtn ${periodState === "grupoieb" && "active"}`}>
                    Grupo IEB
                </button>
                <button
                    onClick={() => setPeriodState('inviu')}
                    className={`btn xl btnWhite marginXBtn ${periodState === "inviu" && "active"}`}>
                    Inviu
                </button>
            </div>

            <Link to={`${periodState}`} className="btnNoBg">
                <FontAwesomeIcon icon={faPlus} className='plus' />
                Crear nuevo período
            </Link>

            <Table headers={["Fecha del período", "Archivos"]} />

        </section>
    )
}

export default Periodos;