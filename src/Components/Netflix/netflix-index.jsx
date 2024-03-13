import Background from './assets/netflixBanner.jpg';

import "./netflix-index.css"
import { NetflixHeader } from './netflix-header';

import { NetflixMain } from './netflix-main';


export function NetflixIndex(){
    return (
        <div style={{backgroundImage: `url(${Background})` , height:"100vh"}}>
            <div style={{height:"100vh", backgroundColor:"rgba(0,0,0,0.5)", }}>
                <NetflixHeader />
                <NetflixMain />

            </div>
        </div>
    )
}