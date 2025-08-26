import "../styles/productCard.css"

const ProductCard = ({imageAddress, productName, productDetail}) => {
    return(
        <div className="productCardContainer">
            <img src={imageAddress} alt={imageAddress} />
            <h3>{productName}</h3>
            <p>{productDetail}</p>
            <button>shop</button>
        </div>
    );
}

export default ProductCard;