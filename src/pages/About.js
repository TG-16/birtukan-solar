import NavBar from "../components/NavBar";
import Intrance from "../components/Intrance";
import Mission from "../components/Mission";
import Footer from "../components/Footer";
import "../styles/about.css";
import {useNavigate} from "react-router-dom";

const About = () => {

    const navigator = useNavigate();
    return(
        <div className="homeContainer">
            <NavBar /> 

            <Intrance 
                heading={"Empowering Ethiopia with Clean Solar Energy"}
                shortDescription={"Learn more about our story, mission, and commitment to sustainable energy."}
                imageAddress={"images/logo.webp"}
            />

            <div className="ourStoryContainer">
                <h2>Our Story</h2>
                <div className="ourStory">
                    <p>
                        Birtukan Solar Importer, officially established in 2008 G.C, is a trusted sole proprietorship dedicated to the import and distribution of high-quality solar energy products across Ethiopia. Founded by Mr. Gebeyaw Mekonnen and W/ro Birtukan Yirga, a visionary entrepreneurs with a strong track record in electrical and solar product importation, the company has grown and years of proven success. By dedication of General Manager Ato Gebeyaw Mekonnen, who brings more than 21 years of technical expertise in electronics maintenance and solar home system installation, Birtukan Solar Importer combines entrepreneurial dedication with deep technical know-how. With a mission to make clean, reliable, and affordable solar energy accessible to households and businesses, we continue to expand our role as a leading force in Ethiopia’s renewable energy transition.
                    </p>
                    <img src="images/demo2.jpeg" alt="demo2.png" />
                </div>
            </div>

            <div className="ourStoryContainer missionContainer">
                <h2>Mission & Values</h2>
                <div className="increaseGb">
                    <Mission 
                        imageAddress={"images/icon2.png"}
                        shortDescription={"Empower local communication with solar access"} 
                    />

                    <Mission 
                        imageAddress={"images/icon2.png"}
                        shortDescription={"Promote sustainable and ecofriendly energy use"}
                    />
                    <Mission 
                        imageAddress={"images/icon2.png"}
                        shortDescription={"Deliver trustworthy products and service"}
                    />
                </div>
            </div>

            <div className="founder">
                <h2>Meet the Founder</h2>
                <img src="../images/testmonial.png" alt="Gebeyaw Mekonnen" />
                <p>
                    Ato Gebeyaw Mekonnen is the driving force behind Birtukan Solar Importer. With more than 21 years of technical expertise in electronics maintenance and solar home system installation, he brings deep knowledge and hands-on experience to the company. His leadership, vision, and technical skills have been central to building a strong and reliable solar business that continues to serve communities across Ethiopia with affordable and sustainable energy solutions.
                </p>
            </div>
        
            {/* <div className="teamContainer">
                <h2>Rest of the Team</h2>

                 <div className="team">
                    <p id="headOfSells">
                        <img src="../images/testmonial.png" alt="Gebeyaw Mekonnen" />
                    </p>
                    <p id="headOfNetworking">
                        <img src="../images/testmonial.png" alt="Gebeyaw Mekonnen" />
                    </p>
                    <p id="headOfPromotion">
                        <img src="../images/testmonial.png" alt="Gebeyaw Mekonnen" />
                    </p>
                </div>
            </div> */}

            <div className="whyAbout">
                <h2>Why Choose Us</h2>

                <div className="top">
                    <h3>Localy owened & operated</h3>
                    <h3>Experianced in solar installations</h3>
                </div>

                <div className="middle">
                    <h3>Affordable pricing with no hiiden fees</h3>
                    <img src="../images/image.jpg" alt="solar panel" />
                    <h3>Trusted by customers</h3>
                </div>

                <div className="bottom">
                    <h3>Only quality solar equipment</h3>
                    <h3>Free consultation & site visit</h3>
                </div>
            </div>

            <div className="contactGb">
                <h2>Interested in Going Solar?</h2>
                <p>Let's talk about your home or bussiness -- we'd love to help</p>
                <button id="contactUsAbout" onClick={() => navigator("/contact")}>Contact Us</button>
            </div>

            <Footer />
        </div>
    );
}

export default About;