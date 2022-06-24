// import React,{useState} from 'react'
// import "./NavigationDrawer.css";

// const ChangesIcon=(props)=> {

//     const [selectedItem , setSelectedItem] =useState()
//     const [homeSelect , setHomeSelect] =useState()
// let disabled=props.disabled

//  const handleClick = (event) => {
//    setSelectedItem(event);
//  };

//  const homeClick=(e)=>{
//   setHomeSelect(e);
//  }

//     return (

//       <div className='icon-change'>

//       <button disabled={disabled} className={`change-icon ${selectedItem ? "selected" : "default"}`}
//         onFocus={handleClick}>  </button>

//           <button disabled={disabled} className={`change-icon ${homeSelect ? "home-selected" : "home-default"}`}
//         onFocus={homeClick}>  </button>

//       </div>
//     );
// }

// export default ChangesIcon

import React, { useState } from "react";
import Setting from "../navigationDrawer/setting.svg";
import Andnotor from "../navigationDrawer/andnotordefault.svg";
import ControlShift from "../navigationDrawer/controlshiftdefault.svg";
import Home from "../navigationDrawer/homedefault.svg";
import Invicta from "../navigationDrawer/invictadefault.svg";
import "./NavigationDrawer.css";

const ChangesIcon = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const buttons = [
    { id: "selected1", default:"settingdefault", intent: "setting" },
    { id: "selected2",default:"andnotordefault", intent: "andnotor" },
    { id: "selected3",default:"controlshiftdefault", intent: "controlshift" },
    { id: "selected4",default:"homedefault", intent: "home" },
    { id: "selected5",default:"invictadefault", intent: "invicta" },
  ];

  const handleClick = (event) => {
    setSelectedItem(event.target.id);
  };
  return (
    //     <div className="trail-change">
    //       <div className='container'>
    //  </div>
    //     </div>
    <div className="container">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          className={` ${selectedItem === btn.id ? btn.intent :btn.default}`}
          id={btn.id}
          onFocus={handleClick}
        >
        
        </button>
      ))}
    </div>
  );
};

export default ChangesIcon;
