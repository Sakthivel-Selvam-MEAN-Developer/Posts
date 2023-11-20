import { Link } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar rounded navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MCU</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-auto">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link to='/'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>
                            <Link to='/newpost'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">New Post</a>
                                </li>
                            </Link>
                            <Link to={'/about'}>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">About</a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { NavBar }