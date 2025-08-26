
import "../styles/intrance.css"

const Intrance = ({heading, shortDescription, CTA, CTAction, imageAddress}) => {
    return(
        <div className="intranceContainer">
            {
                //bg-image goes in blur div as inline styling
            }
            <div className="blur">
                <h1>{heading}</h1>
                {shortDescription && <p>{shortDescription}</p>}
                {CTA && <a href="#handleContact"><button onClick={() => CTAction}>{CTA}</button></a>}
            </div>
        </div>
    );
}

export default Intrance;