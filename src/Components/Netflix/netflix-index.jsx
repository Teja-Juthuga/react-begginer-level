import Background from './assets/netflixBanner.jpg';
import { NetflixHeader } from './netflix-header';


export function NetflixIndex(){
    return (
        <div style={{backgroundImage: `url(${Background})` , height:"100vh"}}>
            <div style={{height:"100vh", backgroundColor:"rgba(0,0,0,0.5)"}}>
                <NetflixHeader />
            </div>
        </div>
    )
}