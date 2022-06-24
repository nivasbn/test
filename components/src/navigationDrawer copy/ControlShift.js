import React from "react";
import "./NavigationDrawer.css";

const ControlShift = (props) => {
  let state = props.state;

  let intent = [];
  switch (state) {
    case "default":
      intent = "controlshift-default navigation-drawer";
      break;
    case "hover":
      intent = "controlshift-hover navigation-drawer";
      break;
    case "selected":
      intent = "controlshift-selected navigation-drawer";
      break;
    case "focused":
      intent = "controlshift-focused navigation-drawer";
      break;
    case "disabled":
      intent = "controlshift-disabled navigation-drawer";
      break;
    default:
      console.log("no state");
      break;
  }

  return <span className={intent}></span>;
};

export default ControlShift;
