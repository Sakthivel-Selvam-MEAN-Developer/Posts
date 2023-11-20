import { Link } from 'react-router-dom'

const NotFound = () => {
    return(
        <div className="container">
            <h3>404 Not Found</h3>
            <p>There is no such Route in this Website. <br /> Pleace Navigate to Home. <br /><br /> 
                <Link to={'/'}>
                    <kbd>Go to Home</kbd>
                </Link>
            </p>
        </div>
    )
}

export {NotFound}