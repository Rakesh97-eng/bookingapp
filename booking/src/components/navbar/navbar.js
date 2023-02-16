import { useContext } from "react";
import { Authcontext } from "../../cotext/authcontext";
import "./navbar.css";

const Navbar = () => {
    const {user} = useContext(Authcontext)
    return (
        <>
        <div className="navbar">
            <div className="navcontainer">
            <span className="navlogo">Raki Booking</span>
            
           { user ?  `Welcome ${user}`: <div className="navitem">
                <button>Register</button>
                <button onClick={()=>window.location.href="/login"}>Login</button>
            </div>}
            </div>
            

        </div>
        </>
    )
}

export default Navbar;