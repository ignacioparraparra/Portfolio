import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'
function App() {
  

  return (
    <BrowserRouter>
    <div className="layout">
      <div className="nav">
        <ul className="nav_elements">
          <Link to="/" className="nav_button"><p>Home</p></Link>
          <Link to="/projects" className="nav_button"><p>Projects</p></Link>
        </ul> 
        </div>
          <Routes> 
            <Route path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
      </div>
      </BrowserRouter>
 
  )
}

export default App


