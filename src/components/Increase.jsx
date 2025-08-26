import "../styles/increase.css"

const Increase = ({imageAddress,heading,number}) => {
    return(
        <div className="increaseContainer">
            <img src={imageAddress} alt={imageAddress} />
            <h3>more +{number}</h3>
            <p>{heading}</p>
        </div>
    );
}

export default Increase;