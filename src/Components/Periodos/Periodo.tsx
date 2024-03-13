import React, { FC } from "react";
import '../../Styles/Reutilized.css'
import Table from "../Table/Table";

const Periodo = () => {

    const periodData = {
        company: "Grupo IEB",
        archive: "Aranceles",
        period: "19/09/1995",
    }

    return(
        <section className="container">
            <h1 className="title2 marginYTitle">Archivos importados - {periodData.company} - {periodData.archive} - {periodData.period?.toUpperCase()}  </h1>
            <p className="btnNoBg marginYBtn">Importar archivo {periodData.archive}</p>
            <button className="btn btnPurple">Chequeo</button>
            <Table headers={["Archivo", "Productor", "Fecha importación", "Estado liquidación", "Importación", "Errores", "Total", "Acciones"]} />
        </section>
    )
}

export default Periodo;