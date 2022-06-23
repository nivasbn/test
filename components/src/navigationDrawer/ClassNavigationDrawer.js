import React from 'react'
import Settings from "./Settings";
import Home from './Home';
import Andnotor from './Andnotor';
import Invicta from "./Invicta"
import ControlShift from './ControlShift';
import ChangesIcon from './ChangesIcon';

function ClassNavigationDrawer() {
  return (
    <div>
      <ChangesIcon disabled ={false} />
    </div>
  );
}

export default ClassNavigationDrawer


//state=default,hover,selected,focused,disabled