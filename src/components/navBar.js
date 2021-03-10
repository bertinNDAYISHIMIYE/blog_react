import { Link } from 'react-router-dom'

const navBar = () => {
    return ( 
        <nav className="navbar">
            <Link to='/'><h1>BerryBlogs</h1></Link>
            <div className="links">
                <Link to="/">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact me</Link>
            </div>
        </nav>
     );
}
 
export default navBar;