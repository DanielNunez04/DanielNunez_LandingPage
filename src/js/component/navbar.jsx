import React from "react";

const Navbar = () => {
return (
<>
   <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand">Start Bootstrap</a>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</>
);

};

export default Navbar;