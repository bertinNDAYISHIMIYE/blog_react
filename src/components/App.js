import NavBar from '../components/navBar'
import HomePage from '../components/LandingPage'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import Create from './CreateBlog'
import BlogDeatails from '../components/BlogDetails'
import NotFound from '../components/404'
import Footer from '../components/footer'
import About from '../components/About'
import Contact from './contact';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
    <div className="content">
       <Switch>
          <Route exact path='/'>
             <HomePage />
          </Route>

          {/* <Route path='/create'>
             <Create />
          </Route> */}
          <Route path='/about'>
             <About />
          </Route> 
          <Route path='/contact'>
             <Contact />
          </Route>
          <Route path='/blogs/:id'>
             <BlogDeatails />
          </Route>
          <Route path='/404'>
             <NotFound />
          </Route>
          <Route path='*'>
             <NotFound />
          </Route>

       </Switch>
       <Footer />
    </div>
    </div>
    </Router>
  );
}

export default App;
