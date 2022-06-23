import React from 'react'
import "./ButtonComp.css"
import Skeletonicon from "./skeleton.svg" 
import Skeletonout from "./skeletonimg.svg" 
import loadingicon from "./loadin.svg" 
import load from "./loading.svg" 

const ButtonComp= (props)=> {
    let dynamic=props.dynamic?"button-container " :"button-con ";
    let dynamichover=props.dynamic?"button-con-hover " :"button-hover ";
    let dynamicloading=props.dynamic?"button-loading " :"button-con-loading";
    let dynamicdisabled = props.dynamic ? "button-disabled" : "button-con-disabled";
    let dynamicskeleton=props.dynamic ? "button-skeleton" : "button-con-skeleton";
 
    let skeleton = props.type === "outlined" ? Skeletonout : Skeletonicon;
    let skeletonsmall = props.type === "filled" ? Skeletonicon : Skeletonout;
    let loading = props.type === "outlined" ? loadingicon : load;
    let loadingsmall = props.type === "filled" ? load : loadingicon;
    
    let type = props.type;
    let size=props.size;
    let state = props.state;


if (size=== "large") {
      if (state==="enabled"){
         if (type==="filled") {
            type=dynamic
          } else if (type === "outlined") {
            type="button-outlined"
          }
          return(
          <div>
              <button className={type}> <p>button with a long text</p></button>
          </div>
        )

    }else if(state==="hover"){
  if (type === "filled") {
    type = dynamichover;
  } else if (type === "outlined") {
    type = "button-outlined-hover";
  }
  return(
      <div>
      <button className={type}> <p>button with a long text</p></button>

      </div>
    )

    } else if(state==="loading"){
       if (type === "filled") {
         type = dynamicloading;
       } else if (type === "outlined") {
         type = "button-outlined-loading";
       }

       return(
         <div>
         <button className={type}><img src={loading}/></button>
         </div>
       )
    } else if(state==="disabled"){

      if (type === "filled") {
        type = dynamicdisabled;
      } else if (type === "outlined") {
        type = "button-disabled";
      }
      return (
        <div>
          <button className={type}><p> DISABLED</p></button>
        </div>
      );
    } else if(state==="skeleton"){

      if (type === "filled") {
        type = dynamicskeleton;
      } else if (type === "outlined") {
        type = "button-outlined-skeleton";
      }
      return (
        <div>
          <button className={type}><img src={skeleton}/></button>
        </div>
      );
    }
  
} else if(size === "small") {

  if (state==="default"){
      if (type === "filled") {
        type = "btn-small-defaultfilled";
      } else if (type === "outlined") {
        type = "btn-small-defaultoutlined";
      } else if (type === "text") {
        type = "btn-small-defaulttext";
      }
      return(
      <div>
      <button className={type}> <p>BUTTON</p></button>

      </div>
    )

    } else if (state==="hover"){
       if (type === "filled") {
        type = "btn-small-hoverfilled";
      } else if (type === "outlined") {
        type = "btn-small-hoveroutlined";
      } else if (type === "text") {
        type = "btn-small-hovertext";
      }
      return(
      <div>
      <button className={type}> <p>BUTTON</p></button>

      </div>
    )
    } else if (state==="loading"){
if (type === "filled") {
        type = "btn-small-loadfilled";
      } else if (type === "outlined") {
        type = "btn-small-loadoutlined";
      } else if (type === "text") {
        type = "btn-small-loadtext";
      }
      return(
      <div>
      <button className={type}> <img src={loadingsmall}/></button>

      </div>
    )
    }else if(state==="disabled"){

      if (type === "filled") {
        type = "btn-small-disabledfilled";
      } else if (type === "outlined") {
        type = "btn-small-disabledoutlined";
      } else if(type=== "text"){
        type = "btn-small-disabledtext"
      }
      return (
        <div>
          <button className={type}><p> DISABLED</p></button>
        </div>
      );
    } else if(state==="skeleton"){

      if (type === "filled") {
        type = "btn-small-skeletonfilled" ;
      } else if (type === "outlined") {
        type = "btn-small-skeletonoutlined";
      } else if (type === "text"){
        type= "btn-small-skeletontext"
      }
      return (
        <div>
          <button className={type}><img src={skeletonsmall}/></button>
        </div>
      );
    }
}

}

export default ButtonComp 