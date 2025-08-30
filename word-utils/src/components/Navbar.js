import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const a {
  background
}
export default function Navbar(props) {
  const hey = {
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    border: '1px solid #ccc',
  };
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`} style={a}>
        <div  className="container-fluid">
          <Link className="navbar-brand" to="/logo">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div
  className='bg-primary rounded mx-2'
  style={hey}
  onClick={() => { props.f('primary') }}
>
</div>
<div
  className='bg-danger rounded mx-2'
  style={hey}
  onClick={() => { props.f('danger') }}
>
</div>
<div
  className='bg-warning rounded mx-2'
  style={hey}
  onClick={() => { props.f('warning') }}
>
</div>

    
  
        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
  <input className="form-check-input" onClick={props.f} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" forhtml="switchCheckDefault">{props.mode}</label>
 </div>
      </nav>
  
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Default Navbar'
};
