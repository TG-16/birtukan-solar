import "../styles/projects.css"

const Projects = ({imageAddress, heading, detail, projectId}) => {
    return (
        <div className="projectContainer">
            <div className="projectImageContainer"><img src={imageAddress} alt={imageAddress} /></div>

            <div className="projectText">
                <h3>{heading}</h3>
                <p>{detail}</p>
                {/* <a href={`/installations#${projectId}`}
                >Learn More</a> */}
                {/* the link isnt working properly */}
            </div>
        </div>
    );
}

export default Projects;