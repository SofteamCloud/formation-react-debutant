import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./NavBar";
import PostList from "./PostList";
import About from "./About";
import Create from "./Create";
import NotFound from "./NotFound";
import PostItem from "./PostItem";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="content">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/posts/:postId" element={<PostItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
