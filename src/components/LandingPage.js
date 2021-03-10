import BlogList from './blogList'
import useFetch from '../useFetch';

const Homepage = () => {
const {  isLoading } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
        <div className="page-title">-All blogs-</div>
        {/* { error && <div> { error } </div>} */}
        { isLoading && <div> loading .... </div>}
        {BlogList && <BlogList />}

        </div>
     );
}
 
export default Homepage;