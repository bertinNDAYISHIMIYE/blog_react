import { Link } from 'react-router-dom';
import blogposts from '../blogposts.json';
import Markdown from 'react-markdown'

const  BlogList = (props) => {


    console.log(blogposts)
    return ( 
        <div className="blog-list">
             {blogposts.map((blog) => ( 
            <div className="blog-preview" key={blog.id}> 
                <Link to={`/blogs/${blog.id}`}>
                   <div className="blog-info">
                   <img src={blog.image} alt="image1"/>
                   <h2>{blog.title}</h2>
                   <p><small>Written by {blog.author}</small></p>
                   <p><small>published on {blog.date}</small></p>
                   </div>

                   <Markdown source={blog.content} escapeHtml={ false } renderers={blog.content}/>
                   <small>kee reading...</small>
                </Link>
          
           </div>
        ))}
        </div>
     );
}
 
export default  BlogList;