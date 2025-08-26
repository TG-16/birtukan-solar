import NavBar from "../components/NavBar";
import Intrance from "../components/Intrance";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import "../styles/products.css"
import {useNavigate} from "react-router-dom";

const Products = () => {

    const navigator = useNavigate();

    return(
        <div className="homeContainer">
            <NavBar /> 

             <Intrance 
                heading={"Empowering Ethiopia with Clean Solar Energy"}
                shortDescription={"earn more about our story, mission, and commitment to sustainable energy."}
                imageAddress={"images/logo.webp"}
            />

            <div id="productsProductContainer" className="productsProductCard">
                <h2>Top Products</h2>

                <div className="productMenu">
                    <p>Panel</p>
                    <p>Battery</p>
                    <p>Inverter</p>
                    <p>Regulator</p>
                    <p>Complete Solars</p>
                </div>

                 <div className="productGb">
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />

                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
    
                    <ProductCard
                        imageAddress={"images/pro-400.png"}
                        productName={"Pro-400"}
                        productDetail={"Long lasting portable light and charging for mobile devices"}
                    />
                </div>
            </div>

            <div className="contactGb instalationContact">
                <p>Not sure what you need? we'll help you choose the right system for your home or bussiness</p>
                <button id="contactUsAbout" onClick={() => navigator("/contact")}>Contact Us</button>
            </div>

            <Footer />
        </div>
    );
}

export default Products;