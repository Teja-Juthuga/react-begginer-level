export function DataBinding(){
    var name = "Manikanta Brahma Teja Juthuga";
    var age = 25;
    var gender = "Male";
    var contactNumber = 7993001128;


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
        </div>
    )
}