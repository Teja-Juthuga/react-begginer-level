import "./login.css";

export default function LoginComponent() {
    return (
        <div className="container">
            <form>
                <h2 style={{textAlign:"center"}}> User Login </h2>
                <hr/>
                <div >
                    <label for="userId"> User Id: </label>
                    <input type="text" id="userId"></input>
                </div>
                <div>
                    <label for="userPassword"> Password: </label>
                    <input type="password" id="userPassword"></input>
                </div>
                <div style={{textAlign:"center"}}>
                <button> Login </button>
                <button> Cancel </button>
                </div>
            </form>
        </div>
    );
}
