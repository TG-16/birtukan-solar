import NavBar from "../components/NavBar";
import Intrance from "../components/Intrance";
import Increase from "../components/Increase";
import ProductCard from "../components/ProductCard";
import Projects from "../components/Projects";
import Why from "../components/Why";
import Footer from "../components/Footer";
import "../styles/home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigator = useNavigate();
    
    return(
        <div className="homeContainer">
            <NavBar /> 

            <Intrance 
                heading={"Power Your Life With Solar Energy"}
                CTA={"Contact Us"}
                imageAddress={"images/logo.webp"}
            />

            <div className="aboutGb">
                <h2>Birtukan solar, At a Glance</h2>
                <p>
                    At Birtukan Solar Importer, we bring light and power to Ethiopian homes and businesses with reliable solar solutions. Since 2008, we’ve been committed to making clean energy affordable and accessible, backed by years of experience and technical expertise. From solar panels to complete energy systems, we provide trusted products that deliver lasting value and peace of mind.
                </p>
                <p id="learnMore"><a href="/about">Learn More</a></p>
            </div>

            <div className="increaseGb">
                <Increase 
                    imageAddress={"images/image.jpg"}
                    heading={"solar products sold"}
                    number={10000} 
                />

                <Increase 
                    imageAddress={"images/image.jpg"}
                    heading={"homes powered by solar"}
                    number={120000} 
                />
                <Increase 
                    imageAddress={"images/image.jpg"}
                    heading={"weredas where Birtukan products are sold"}
                    number={50} 
                />
            </div>

            <div id="productGb">
                <h2>Top Products</h2>

                 <div className="productGb">
                    <ProductCard
                        imageAddress={"images/home120.jpg"}
                        productName={"Home 120"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    {/* <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    /> */}
                </div>
            </div>

            <div id="projectGb">
                <h2>Our Work / Projects</h2>
                <div className="projectGb">
                    <Projects
                        projectId={"info1"}
                        imageAddress={"images/demo1.jpg"}
                        heading={"Over the years, we have successfully supported numerous projects ranging from small household solar setups to large-scale commercial and institutional installations."}
                        detail={" Our projects aim not only to provide clean and affordable energy but also to empower communities by reducing reliance on traditional power sources. With each project, we are building a greener future and proving that solar is not just an alternative—it’s the way forward for Ethiopia’s energy independence."} 
                    />  

                    <Projects
                        projectId={"info2"}
                        imageAddress={"images/demo3.jpg"}
                        heading={"At Birtukan Solar Importer, we specialize in delivering complete solar energy solutions tailored to the needs of hbomes, businesses, and community institutions."}
                        detail={" From importing and supplying high-quality solar panels, batteries, and inverters to providing technical guidance and installation support, our work ensures that customers enjoy reliable and sustainable power. Every product we distribute is carefully selected to meet international standards and withstand Ethiopia’s diverse energy demands."} 
                    />
                </div>
                <button onClick={() => navigator("/installations")}>See All</button>
            </div>

            <div id="whyGb">
                <h2>Why Choose Solar</h2>
                <div className="whyGb">
                    <Why
                        ficonAddress={"images/icon2.png"}
                        fdetail={"Trusted International Suppliers – We work with globally recognized manufacturers to ensure reliability"}
                        siconAddress={"images/icon2.png"}
                        sdetail={"High-Quality Products with Warranty – Every product comes with guaranteed durability and performance."}
                    />

                    <Why
                        ficonAddress={"images/icon2.png"}
                        fdetail={"Affordable Pricing – We balance quality with competitive prices to make solar accessible for everyone."}
                        siconAddress={"images/icon2.png"}
                        sdetail={"Technical Support & Installation Guidance – Our team assists you from product selection to installation."}
                    />
                </div>
            </div>

            <div id="handleContact" className="contactGb">
                <h2>Ready to Go Solar?</h2>
                <p>We're here to help you choose the best system</p>
                <form>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea placeholder="Message" rows="7" cols="7"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Home;