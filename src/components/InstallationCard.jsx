import "../styles/installationCard.css"

const Installation = ({heading, imageAddress, info, detail}) => {
    return (
        <div className="installationContainer">
            <h3>{heading}</h3>
            <div className="installationImgContainer">
                <img src={imageAddress} alt={imageAddress} />
                <div>
                    <p>Location: {info.location}</p>
                    <p>System Size: {info.systemSize}</p>
                    <p>Date: {info.date}</p>
                </div>
            </div>
            <p>{detail}</p>
        </div>
    );
}

export default Installation;