import React,{useState} from 'react'
import "./NavigationDrawer.css"; 

 

const ChangesIcon=(props)=> {

    const [selectedItem , setSelectedItem] =useState()
let disabled=props.disabled 

 const handleClick = (event) => {
   setSelectedItem(event);
 };
 
    return (
      <div> 
      
        <span>
      <button disabled={disabled} className={`change-icon ${selectedItem ? "selected" : "default"}`}
        onFocus={handleClick}>  </button>
        
        </span>
       
      
      </div>
    );
}

export default ChangesIcon

