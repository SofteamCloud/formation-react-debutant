import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/" className="nav">Home</Link>
        <Link to="/about" className="nav">About</Link>
      </div>
      <Link to="/create" className="nav nav__action">Create</Link>
    </div>
  )
}
