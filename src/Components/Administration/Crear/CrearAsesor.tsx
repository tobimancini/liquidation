import React from "react";
import '../../../Styles/Reutilized.css'


const CrearAsesor = () => {

    return (
        <section className="container">
            <h1 className="title2 marginYTitle">Crear nuevo ASESOR</h1>
            <form className="formContainer">
                <div className="inputContainer">
                    <label className="label" htmlFor="username">Username</label>
                    <input className="input" type="text" name="username" id="username" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="surname">Apellido</label>
                    <input className="input" type="text" name="surname" id="surname" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="name">Nombre</label>
                    <input className="input" type="text" name="name" id="name" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="birth">Fecha de nacimiento</label>
                    <input className="input" type="date" name="birth" id="birth" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="admissio">Fecha de ingreso</label>
                    <input className="input" type="date" name="admission" id="admission" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="iva">Inscripto/IVA</label>
                    <input className="input" type="text" name="iva" id="iva" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="cuit">CUIT</label>
                    <input className="input" type="text" name="cuit" id="cuit" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="text" name="email" id="email" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="intExt">Interno/Externo</label>
                    <select className="input" name="intExt">
                        <option value="interno">Interno</option>
                        <option value="externo">Externo</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="password">Contraseña</label>
                    <input className="input" type="text" name="password" id="password" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="role">Rol</label>
                    <select className="input" name="role">
                        <option value="asesor">Asesor</option>
                        <option value="coordinador">Coordinador</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="team">Equipo</label>
                    <input className="input" type="text" name="team" id="team" />
                </div>
            </form>
            <button className="btn xl btnPurple marginYBox selfEnd">Crear asesor</button>
        </section>
    )
}

export default CrearAsesor;