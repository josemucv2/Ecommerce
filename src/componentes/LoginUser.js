function LoginUser (){
    
    return (
    <form >
        
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-form">Correo Electronico</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text text-form">Nunca compartiremos su correo electrónico con nadie más.</div>
        </div>
        
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-form">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
    </form>
    )
}

export default LoginUser