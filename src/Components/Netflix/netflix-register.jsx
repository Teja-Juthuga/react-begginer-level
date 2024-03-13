export function NetflixRegister(){
    return(
        <div className="d-flex flex-column">
            <p className="text-light"> Ready to watch? Enter your email to create or restart your membership. </p>
            <div className="d-flex justify-content-center">
                <input type="text" placeholder="Enter address"  className="form-control form-select-lg" style={{backgroundColor:"rgba(0,0,0,0.4)"}}/>
                <button className="btn btn-danger ms-3 fs-6 w-50"> Get Started <span className="bi bi-chevron-right"></span> </button>
            </div>
        </div>
    )
}