import React from "react";

const Navabar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Litticious
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pos">
                POS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pos">
                Inventory
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pos">
                Expense Tracker
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pos">
                Sales Tracker
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navabar;
