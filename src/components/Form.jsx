const Form = () => {

    return(
        <form>
        <div className="mb-3">
            <p>                     </p>
            <p>                     </p>
            <p>                     </p>
            <p>                     </p>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">Descripcion</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark" style={{ backgroundColor: 'red' }}>Enviar</button>
    </form>

    )
}

export default Form;   