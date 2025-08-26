import "../styles/navBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () =>{

    const navigator = useNavigate();
    
    {
        //make the navigation smooth 
        //means when navigating in the middle of the page return to the top
        //not in the middle of the next page
    }

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