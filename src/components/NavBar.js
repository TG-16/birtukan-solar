import "../styles/navBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () =>{

    const navigator = useNavigate();


    return(
        <div className="navBarContainer">
            <div className="desktopNav">
                <h2>Birtukan Solar</h2>
                <ul>
                    <li onClick={() => navigator("/")} >Home</li>
                    {/* <li onClick={() => navigator("/products")}>Products</li>
                    <li onClick={() => navigator("/installations")}>Installations</li> */}
                    <li onClick={() => navigator("/about")}>About Us</li>
                    <li onClick={() => navigator("/contact")}>Contact US</li>
                </ul>
                <button className="darkModeButton">D W</button>
            </div>

            <div className="humberger">=</div>
        </div>
    );
}

export default NavBar;