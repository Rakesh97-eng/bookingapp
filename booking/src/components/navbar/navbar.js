import "./navbar.css";

const Navbar = ()=>{
    return (
        <>
        <div className="navbar">
            <div className="navcontainer">
            <span className="navlogo">Raki Booking</span>
            
            <div className="navitem">
                <button>Register</button>
                <button>Login</button>
            </div>
            </div>
            

        </div>
        </>
    )
}

export default Navbar;