import React from "react";
import "./NavigationDrawer.css";

const Invicta = (props) => {
  let state = props.state;

  let intent = [];
  switch (state) {
    case "default":
      intent = "invicta-default navigation-drawer";
      break;
    case "hover":
      intent = "invicta-hover navigation-drawer";
      break;
    case "selected":
      intent = "invicta-selected navigation-drawer";
      break;
    case "focused":
      intent = "invicta-focused navigation-drawer";
      break;
    case "disabled":
      intent = "invicta-disabled navigation-drawer";
      break;
    default:
      console.log("no state");
      break;
  }

  return <span className={intent}></span>;
};

export default Invicta;
