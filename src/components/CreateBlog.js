import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('berry')
  const [ispending, setIsPending] = useState(false)
  const redirector = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault()
        setIsPending(true)
        const blog = { title, author, content}
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('new blog added')
            setIsPending(false)
            redirector.push('/')
        })

  }

    return ( 
        <div className="create">
        <h2> Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
              <input type='text'
                     required
                     value= {title}
                     onChange = {((e) => {
                      setTitle(e.target.value)
                     })}
              />
              <label>Blog Author:</label>
              <select 
                     value={author}
                     onChange={(e) => {
                         setAuthor(e.target.value)
                     }}>
                  <option value="berry">berry</option>
                  <option value="babalao">babalao</option>
              </select>
              <label>Blog content:</label>
              <textarea
                  required
                  value= {content}
                  onChange = {((e) => {
                      setContent(e.target.value)
                  })}>
              </textarea>
              { !ispending && <button>Add Blog</button>}
              { ispending && <button disabled>Adding a Blog...</button>}
              </form>
        </div>
     );
}
 
export default Create