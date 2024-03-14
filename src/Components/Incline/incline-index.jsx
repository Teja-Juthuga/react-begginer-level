import  './incline-index.css';

import { InclineNav } from './incline-nav';

import { InclineMain } from './main';

export function InclineIndex(){
    return(
        <div className="bg-container">
            <div className='container-fluid shade'>
                <InclineNav />
                <hr className='text-light'/>
                <InclineMain />
            </div>
        </div>
    )
}