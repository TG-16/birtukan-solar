import "../styles/mission.css"

const Mission = ({shortDescription, imageAddress}) => {
    return (
        <div className="increaseContainer missionCardContainer">
            <p>{shortDescription}</p>
            <img src={imageAddress} alt={imageAddress} />
        </div>
    );
}

export default Mission;