export function DataBinding(){
    var name = "Manikanta Brahma Teja Juthuga";
    var age = 25;
    var gender = "Male";
    var contactNumber = 7993001128;

    var hobbies = ["Dreaming","Flirting", "Motivating others", "Taking others pressure as mine"];

    var mobile = {
        "title": "realme 12+ 5G (Navigator Beige, 256 GB)",
        "price": 10999,
        "image": "realmeBlack.jpg",
        "rating": {"rate":4.5, "count":12644, "reviews":575},
        "features": [
            "6 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
            "17.12 cm (6.74 inch) HD Display",
            "108MP + 2MP | 8MP Front Camera",
            "5000 mAh Battery",
            "T612 Processor",
            "1 Year Manufacturer Warranty for Phone and 6 Months Warranty for In the Box Accessories"
        ]
    }

    var menu = [
        {"Category":"Electronics", "Products": ["TV", "Mobile", "Watch"]},
        {"Category":"Footwear", "Products": ["Casuals", "Sneakers", "Boots"]}
   ];

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

            <div className="mt-4 mb-4">
                <h3> Presenting Object Data Type in React: </h3>
                <div className="card p-3 container shadow-lg">  
                    <div className="row">
                        <div className="col-3">
                            <img src={mobile.image}/>
                        </div>
                        <div className="col-6">
                            <h3 className="text-dark"> {mobile.title} </h3>
                            <div>
                                <span className="bg-success rounded rounded-2 p-2 text-light"> {mobile.rating.rate}<span className="bi bi-star-fill ms-2"></span> </span>
                                <span className="ms-3 fw-bold"> {mobile.rating.count} Ratings & {mobile.rating.reviews} Reviews </span>
                            </div>
                            <ul className="mt-3">
                                {
                                    mobile.features.map(feature => 
                                        <li> {feature} </li>    
                                    )
                                }
                            </ul>
                        </div>
                        <div className="col-3 mt-5">
                            <h2> &#8377; {mobile.price } </h2>
                            <div>
                                <button className="btn btn-primary"> Buy Now </button> 
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>

            <div className="container-fluid">
            <h2>Menu</h2>
            <select>
                {
                    menu.map(item=>
                         <optgroup label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option>{product}</option>
                                    )
                            }
                         </optgroup>
                        )
                }
            </select>
        </div>


        </div>
    )
}