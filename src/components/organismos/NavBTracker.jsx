import * as React from "react";
import {Link} from "react-router-dom";
import coronavirus from '../../images/coronavirus.png';
import '../../App';
import "./navbtracker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function NavBTracker() {
  return (
        <div className="d-flex flex-column flex-shrink-0 bg-gray-tracker col-sm-2 col-lg-1 vh-100 d-flex justify-content-center bar-tracker">
          <Link
            to='/Home'
            className="d-block d-flex justify-content-center align-items-center pt-4 pb-4">
            <img
              className="logo-traker rotate"
              src={coronavirus}
              alt="corona"/>
          </Link>
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <Link to='/UpDates     ' className="nav-link">
                <i className="bi bi-clock text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/AjaxData' className="nav-link">
                <i className="bi bi-list text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/Top10Country' className="nav-link">
                <i className="bi bi-grid text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/CountryWise' className="nav-link">
                <i className="bi bi-folder2 text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/CardsTraker' className="nav-link">
                <i className="bi bi-files text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/ExGraphic' className="nav-link">
                <i className="bi bi-graph-up-arrow text-blue-primary icon-track"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/ExtraMap'className="nav-link">
                <i
                  className="bi bi-globe text-blue-primary icon-track"
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/News' className="nav-link">
                <i className="bi bi-chat-left text-blue-primary icon-track"></i>
              </Link>
            </li>
          </ul>  
            <div className="item">
              <Link to='/Update' className="nav-link">
                <i className="bi bi-pause-circle-fill text-blue-primary icon-track"></i>
              </Link>
            </div>
        </div>
  )
}

export default NavBTracker;