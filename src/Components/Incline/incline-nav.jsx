export function InclineNav(){
    return(
        <nav class="container d-flex justify-content-between pt-4">
            <div className="d-flex justify-content-center">
                <div>
                    <span className="h4 text-light"> Incline.</span>
                </div>
                <div>
                    <span className="bi bi-github text-light me-3"></span>
                    <span className="bi bi-twitter text-light me-3"></span>
                    <span className="bi bi-instagram text-light me-3"></span>
                </div>
            </div>
            <div>
                <span className="text-light me-3"> WELCOME </span>
                <span className="text-light me-3"> LANDINGS </span>
                <span className="text-light me-3"> PAGES </span>
                <span className="text-light me-3"> COMPONENTS </span>
                <span className="text-light me-3"> DOCUMENTATION | PURCHASE NOW </span>
            </div>
        </nav>
    )
}