import NavBar from "../components/NavBar";
import Intrance from "../components/Intrance";
import Installation from "../components/InstallationCard";
import Footer from "../components/Footer";
import "../styles/installation.css"
import {useNavigate} from "react-router-dom";

const Installations = () => {

    const navigator = useNavigate();

    let infos = [
        {
            location:"Addis Abeba",
            systemSize:"2kw",
            date:"12/02/2016"
        },
        {
            location:"Bahir Dar",
            systemSize:"10kw",
            date:"16/05/2016"
        }
    ]

    return(
        <div className="homeContainer">
            <NavBar /> 

            <Intrance 
                heading={"See how we've helped families and businesses go solar"}
                imageAddress={"images/logo.webp"}
            />

            <div className="ourWorks">
                <h2>Our Works</h2>
                <div className="">
                    <Installation 
                        id="info1"
                        heading={"Sunking publishes first allocation and impact report under its sustainable financing framework"}
                        detail={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur odio veritatis, voluptatum unde a vel minus praesentium ea, ipsam beatae repellendus qui. Voluptatem ipsum quia consectetur! Porro, incidunt perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit labore ipsam totam aliquam dolores enim aspernatur ducimus quo nobis omnis expedita reiciendis exercitationem maxime ipsum, quia quaerat voluptate reprehenderit."}
                        imageAddress={"../images/demo2.jpeg"}
                        info={infos[0]}
                    />

                    <Installation 
                        id="info2"
                        heading={"Sunking publishes first allocation and impact report under its sustainable financing framework"}
                        detail={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur odio veritatis, voluptatum unde a vel minus praesentium ea, ipsam beatae repellendus qui. Voluptatem ipsum quia consectetur! Porro, incidunt perferendis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit labore ipsam totam aliquam dolores enim aspernatur ducimus quo nobis omnis expedita reiciendis exercitationem maxime ipsum, quia quaerat voluptate reprehenderit."}
                        imageAddress={"../images/demo2.jpeg"}
                        info={infos[1]}
                    />
                </div>
            </div>

            <div>
                <h2>Testimonial like home</h2>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>

            <div className="contactGb instalationContact">
                <p>Inspired by our works? Lets us help you go solar today</p>
                <button id="contactUsAbout" onClick={() => navigator("/contact")}>Contact Us</button>
            </div>

            <Footer />
        </div>
    );
}

export default Installations;