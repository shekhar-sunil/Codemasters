import './App.css';
import {NavLink} from "react-router-dom";
import './style.css';
import web2 from './images/comp1.webp';

const Navbar=()=>{
  return (
    <>
    <div className="container-fluid nav-bg">
      <div className='row'>
        <div className="col-10 mx-auto">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <NavLink className="navbar-brand" to="#"><span><img className='comp1' src={web2} alt="logo"></img></span></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tutorials
          </NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><NavLink className="dropdown-item" href="#">C++</NavLink></li>
            <li><NavLink className="dropdown-item" href="#">Java</NavLink></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><NavLink className="dropdown-item" to="#">Frontend Tech.</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Backtend Tech.</NavLink></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  </div>
      </div>
    </div>
        </>
  );
}

export default Navbar;