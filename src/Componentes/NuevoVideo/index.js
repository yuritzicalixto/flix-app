import "./NuevoVideo.css"

function NuevoVideo(){
    return <section className="form-main">
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
        <hr/>
        <h2>Crear Tarjeta</h2>
        <hr/>
        <form className="form-container">
            <label className="campo-etiqueta"></label>
            <input className="campo-completo" required/>
        </form>
    </section>
}

export default NuevoVideo