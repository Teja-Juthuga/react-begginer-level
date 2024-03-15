export function DataBinding(){
    var name = "Manikanta Brahma Teja Juthuga";
    var age = 25;
    var gender = "Male";
    var contactNumber = 7993001128;

    var hobbies = ["Dreaming","Flirting", "Motivating others", "Taking others pressure as mine"];


    return(
        <div className="container mt-4">
            <dl>
                <dt> Name : </dt>
                <dd> {name} </dd>
            </dl>

            <dl>
                <dt> Age : </dt>
                <dd> {age} </dd>
            </dl>

            <dl>
                <dt> Gender : </dt>
                <dd> {gender} </dd>
            </dl>
            <dl>
                <dt> Contact : </dt>
                <dd> {contactNumber} </dd>
            </dl>
            <dl>
                <dt> Hobbies : </dt>
                <ul>
                    {
                        hobbies.map(hobby => 
                            <li> { hobby }</li>
                        )
                    }
                </ul>
            </dl>

            <dl>
                {
                    hobbies.map(hobby => 
                        <div className="m-3">
                            <button className="btn btn-primary"> {hobby} </button> 
                        </div> 
                    )
                }
            </dl>

            <div>
                {
                    hobbies.map(hobby => 
                        <div>
                            <input type="checkbox" id={hobby} className="me-3"/>
                            <label for={hobby}> {hobby } </label>    
                        </div>
                    )
                }
            </div>
        </div>
    )
}