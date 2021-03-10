import {  useParams } from "react-router-dom";
import Bloglist from '../blogposts.json'
import { Redirect } from 'react-router-dom'
import Markdown from 'react-markdown'
import Prism from "prismjs";
import "../prism.css";


const BlogDeatails = () => {

    const { id } = useParams();

    const singleBlog = {}
    let ExistingPost = false
    Bloglist.forEach((blog,i) => {
        
        if (+id === +(blog.id)) {
           singleBlog.title = blog.title
            singleBlog.author = blog.author
            singleBlog.date = blog.date
            singleBlog.image = blog.image
            singleBlog.content = blog.content
            ExistingPost = true

            console.log(blog);
    
        }
    })
    if (ExistingPost === false){
        return (
            <Redirect to='/404' />
        )
    }
   
    return ( 
        <div className="blog-details">
        <article>
                    <h2>{singleBlog.title}</h2>
                    <img src={singleBlog.image} alt="image1"/>                    <p>written by { singleBlog.author }</p>
                    <p>published on { singleBlog.date }</p>
                    <pre>
                      <code className='language-js'>
                          const age =10;
                          let array =12;
                      </code>
                  </pre>
                   <Markdown source={ singleBlog.content }></Markdown>
                 
                </article>  §
        </div> 
     );
}
 
export default BlogDeatails;