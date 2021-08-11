import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection'
import Blog from './pages/Blog'
import Cities from './pages/Cities'
import Monuments from './pages/Monuments'
import Post1 from './pages/blogshit/Post1'
import Post2 from './pages/blogshit/Post2'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={HeroSection} />
          <Route path='/cities' exact component={Cities} />
          <Route path='/monuments' exact component={Monuments} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/post1' exact component={Post1} />
          <Route path='/post2' exact component={Post2} />
        </Switch>
      </Router>
      </>
  )
}

export default App;

