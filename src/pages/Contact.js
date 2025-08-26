import NavBar from "../components/NavBar";
import Intrance from "../components/Intrance";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "../styles/contact.css"

const Contact = () => {

    return(
        <div className="homeContainer">
            <NavBar /> 

             <Intrance 
                heading={"Get in Touch"}
                shortDescription={"We're happy to answer your questions or help you choose the right solar solution."}
                imageAddress={"images/logo.webp"}
            />

            <div className="contactGb">
                <h2>Ready to Go Solar?</h2>
                <div className="contactUsContainer">
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <textarea placeholder="Message" rows="7" cols="7"></textarea>
                        <button type="submit">Send</button>
                    </form>

                    <div>
                        <p>Ethiopia, Bahir Dar</p>
                        <p>gbsolar4@gmail.com</p>
                        <p>+2519 11390039</p>
                        <p>+2519 18760698</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;