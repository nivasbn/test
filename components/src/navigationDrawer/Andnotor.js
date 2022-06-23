import React from "react";
import "./NavigationDrawer.css";

const Andnotor = (props) => {
  let state = props.state;

  let intent = [];
  switch (state) {
    case "default":
      intent = "andnotor-default navigation-drawer";
      break;
    case "hover":
      intent = "andnotor-hover navigation-drawer";
      break;
    case "selected":
      intent = "andnotor-selected navigation-drawer";
      break;
    case "focused":
      intent = "andnotor-focused navigation-drawer";
      break;
    case "disabled":
      intent = "andnotor-disabled navigation-drawer";
      break;
    default:
      console.log("no state");
      break;
  }

  return <span className={intent}></span>;
};

export default Andnotor;
