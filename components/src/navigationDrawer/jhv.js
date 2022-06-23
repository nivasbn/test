import React,{useState} from 'react'
import "./NavigationDrawer.css"; 

 

const ChangesIcon=(props)=> {

    const [selectedItem , setSelectedItem] =useState()
    const [homeSelect , setHomeSelect] =useState()
let disabled=props.disabled 

 const handleClick = (event) => {
   setSelectedItem(event);
 };

 const homeClick=(e)=>{
  setHomeSelect(e);
 }
 
    return (
      <div className='icon-change'> 
      
     
      <button disabled={disabled} className={`change-icon ${selectedItem ? "selected" : "default"}`}
        onFocus={handleClick}>  </button>
        

          <button disabled={disabled} className={`change-icon ${homeSelect ? "home-selected" : "home-default"}`}
        onFocus={homeClick}>  </button>
        
       
      
      </div>
    );
}

export default ChangesIcon
