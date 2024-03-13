import { NetflixRegister } from "./netflix-register";

export function NetflixMain(){
    return(
        <div className="text-light d-flex flex-column justify-content-center align-items-center mt-5" style={{height:"75vh"}}>
            <div className="text-center">
                <h1> Unlimited movies, TV shows and more </h1>
                <h4> Starts at ₹149. Cancel anytime. </h4>
            </div>
            <NetflixRegister />
        </div>

        
    )
}