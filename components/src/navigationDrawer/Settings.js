import React from 'react'
import "./NavigationDrawer.css";



const Settings=(props)=> {
let state=props.state

let intent =[]
switch (state) {
  case "default":
    intent = "default navigation-drawer";
    break;
  case "hover":
    intent = "hover navigation-drawer";
    break;
  case "selected":
    intent = "selected navigation-drawer";
    break;
  case "focused":
    intent = "focused navigation-drawer";
    break;
  case "disabled":
    intent = "disabled navigation-drawer";
    break;
  default:
    console.log("no state")
    break;
}

  return (
    <span className={intent}></span>
  )
}

export default Settings;