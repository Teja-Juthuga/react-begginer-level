export function NetflixHeader(){
    return(
        <div className="d-flex justify-content-around pt-4"> 
            <div>
                <h1 style={{color: "red", fontSize: "40px"}}> NETFLIX </h1>
            </div>
            <div className="d-flex">
                <div className="input-group h-50">
                    <span className="bi bi-globe input-group-text"></span>
                    <select className="form-select">
                        <option> English </option>
                        <option> Telugu </option>
                    </select>
                </div>
                <div>
                    <button className="btn btn-danger ms-2 h-60"> SignIn </button>
                </div>
            </div>
        </div>
    )
} 