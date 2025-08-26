import "../styles/why.css"


const Why = ({ficonAddress,siconAddress, fdetail, sdetail}) => {
    return (
        <div className="whyContainer">
            <div>
                <img src={ficonAddress} alt={ficonAddress} />
                <h3>{fdetail}</h3>
            </div>
            <div>
                <img src={siconAddress} alt={siconAddress} />
                <h3>{sdetail}</h3>
            </div>
        </div>
    );
}

export default Why;