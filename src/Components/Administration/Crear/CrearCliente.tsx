import React from "react";
import '../../../Styles/Reutilized.css'


const CrearCliente = () => {

    return (
        <section className="container">
            <h1 className="title2 marginYTitle">Crear nuevo CLIENTE</h1>
            <form className="formContainer">
                <div className="inputContainer">
                    <label className="label" htmlFor="name">Nombre</label>
                    <input className="input" type="text" name="name" id="name" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="surname">Apellido</label>
                    <input className="input" type="text" name="surname" id="surname" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="personType">Tipo de persona</label>
                    <input className="input" type="text" name="personType" id="personType" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="cuit">CUIT</label>
                    <input className="input" type="text" name="cuit" id="cuit" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="startDate">Fecha de inicio de actividades</label>
                    <input className="input" type="date" name="startDate" id="startDate" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="adress">Dirección</label>
                    <input className="input" type="text" name="adress" id="adress" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="cp">Código postal</label>
                    <input className="input" type="text" name="cp" id="cp" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="city">Provincia</label>
                    <input className="input" type="text" name="city" id="city" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="localidad">Localidad</label>
                    <input className="input" type="text" name="localidad" id="localidad" />

                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="phone">Teléfono</label>
                    <input className="input" type="text" name="phone" id="phone" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" type="text" name="email" id="email" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="company">Compañía</label>
                    <select className="input" name="company">
                        <option value="">Seleccione una compañía</option>
                        <option value="loyalty">Loyalty</option>
                        <option value="ieb">IEB</option>
                        <option value="ar">AR Partners</option>
                        <option value="inviu">Inviu</option>
                    </select>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="team">Asesor</label>
                    <input className="input" type="text" name="team" id="team" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="account">Número de cuenta</label>
                    <input className="input" type="number" name="account" id="account" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="dateCreate">Fecha de creación</label>
                    <input className="input" type="date" name="dateCreate" id="dateCreate" />
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="team">Observación</label>
                    <textarea className="input" name="team" id="team" />
                </div>
            </form>
            <button className="btn xl btnPurple marginYBox selfEnd">Crear cliente</button>
        </section>
    )
}

export default CrearCliente;