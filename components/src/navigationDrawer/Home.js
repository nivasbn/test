import React from "react";
import "./NavigationDrawer.css";

const Home = (props) => {
  let state = props.state;

  let intent = [];
  switch (state) {
    case "default":
      intent = "home-default navigation-drawer";
      break;
    case "hover":
      intent = "home-hover navigation-drawer";
      break;
    case "selected":
      intent = "home-selected navigation-drawer";
      break;
    case "focused":
      intent = "home-focused navigation-drawer";
      break;
    case "disabled":
      intent = "home-disabled navigation-drawer";
      break;
    default:
      console.log("no state");
      break;
  }

  return <span className={intent}></span>;
};

export default Home;
