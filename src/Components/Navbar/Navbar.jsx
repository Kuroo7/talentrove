import logo from "../../Assets/3.png";
import { Link } from "react-router-dom"
import "./navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar" >
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" data-toggle="open-navbar1">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <Link to="/">
                            <img className="logoImage" src={logo} alt="" />
                            {/* <h4>Awesome<span>logo</span></h4> */}
                        </Link>
                    </div>


                    <div className="navbar-menu" id="open-navbar1" >
                        <ul className="navbar-nav">
                            <li className="active" >
                                <Link className="link" to='/'>Home</Link>
                            </li>
                            <li><Link className="link" to='/teams'>Teams</Link></li>
                            <li><Link className="link" to='/gallery'>Gallery</Link></li>
                            <li><Link className="link" to='/events'>Events</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar