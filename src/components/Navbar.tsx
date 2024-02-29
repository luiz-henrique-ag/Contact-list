import "../App.css"
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <nav className="navbar">
      <h2 className="navbar-element">
        <Link to="/">Contacts</Link>
      </h2>
      <h2 className="navbar-element">
        <Link to="/new">New</Link>
      </h2>
    </nav>
  )
}