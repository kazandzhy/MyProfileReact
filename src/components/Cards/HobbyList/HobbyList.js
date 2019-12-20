import React, { Fragment } from "react";
import "./HobbyList.css";
import "../../ListItem/ListItem";
import ListItem from "../../ListItem/ListItem";
import Link from "../../Navigation/Links/Link";

export default function HobbyList() {
  return (
    <Fragment>
      <ul className="HobbyList">
        <ListItem>
          <Link to="#temple" color="Brown">
            Temple
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#reunion" color="Brown">
            Family Reunion
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#programming" color="Brown">
            Programming
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#singing" color="Brown">
            Singing
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#chess" color="Brown">
            Chess
          </Link>
        </ListItem>
        <ListItem>
          <Link to="#dog" color="Brown">
            More Facts
          </Link>
        </ListItem>
      </ul>
    </Fragment>
  );
}
