import "../styles/footer.css"
import {useNavigate} from "react-router-dom"

const Footer = () => {

    const navigator = useNavigate();
    
    return (
        <div className="footerContainer">
            <div className="footerList">
                <h2>BY-Solar</h2>
                <ul>
                    <li>Birtukan Solar Importer</li>
                </ul>
            </div>

            <div className="footerList">
                <h2>Quick Navigation</h2>
                <ul>
                    <li onClick={() => navigator("/")} >Home</li>
                    {/* <li onClick={() => navigator("/products")}>Products</li>
                    <li onClick={() => navigator("/installations")}>Installations</li> */}
                    <li onClick={() => navigator("/about")}>About Us</li>
                    <li onClick={() => navigator("/contact")}>Contact US</li>
                </ul>
            </div>

            <div className="footerList">
                <h2>Contact</h2>
                <ul>
                    <li><a href="mailto:gbsolar4@gmail.com">Email</a></li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Linkedln Us</li>
                </ul>
            </div>
        </div>
    );
}


export default Footer;