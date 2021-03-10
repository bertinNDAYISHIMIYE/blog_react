import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>ooops,</h2>
            <p>cannot find the page you are looking for</p>
            <Link to='/'> Back to home page</Link>
        </div>
     );
}
 
export default NotFound;