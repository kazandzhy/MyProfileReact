import React, { Fragment } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Link from "../../Navigation/Links/Link";
import "./NavigationItems.css";

export default function NavigationItems() {
  return (
    <Fragment>
      <NavigationItem className="MyName">Kazandzhi</NavigationItem>
      <NavigationItem className="CurrentPage">Home</NavigationItem>
      <NavigationItem className="Projects">
        <span>Projects</span>
        <FontAwesomeIcon className="ArrowDown" icon={faSortDown} />
        <div className="ProjectsContent">
          <p>
            <Link
              to="https://play.google.com/store/apps/details?id=com.kazandzhy.randomscripture"
              color="Black"
            >
              Android & Java
            </Link>
          </p>
          <p>
            <Link
              to="https://play.google.com/store/apps/details?id=kazandzhy.com"
              color="Black"
            >
              Android & SQLite
            </Link>
          </p>
          <p>
            <Link
              to="https://intense-refuge-10727.herokuapp.com/"
              color="Black"
            >
              Node.js & API
            </Link>
          </p>
          <p>
            <Link
              to="http://blooming-woodland-52046.herokuapp.com/CS%20313/tennis/atpRankings.php"
              color="Black"
            >
              PHP & PostgreSQL
            </Link>
          </p>
          <p>
            <Link
              to="http://w3playground.com/projects/shoppingCart/browseItems.php"
              color="Black"
            >
              PHP Forms & Sessions
            </Link>
          </p>
          <p>
            <Link
              to="http://w3playground.com/projects/bookstore/home.html"
              color="Black"
            >
              Mobile App - HTML, CSS, JS, Canvas
            </Link>
          </p>
          <p>
            <Link
              to="https://vladkazandzhi.wixsite.com/familytherapy"
              color="Black"
            >
              WIX Website
            </Link>
          </p>
          <hr />
          <p>
            <Link
              to="https://vladkazandzhi.wixsite.com/portfolio"
              color="Black"
            >
              My Portfolio
            </Link>
          </p>
        </div>
      </NavigationItem>
      <NavigationItem className="Resume">
        <Link to="http://w3playground.com/resume.pdf" color="Grey">
          My Portfolio
        </Link>
      </NavigationItem>
    </Fragment>
  );
}
