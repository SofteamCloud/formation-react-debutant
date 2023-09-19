import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Home from './Home';
import About from './About';
import Create from './Create';
import Navbar from './Navbar';
import PostItem from './PostItem'
import NotFound from './NotFound';

// styles
import './App.css'

function App() {

  return (
    <Router>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs/:id" element={<PostItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
