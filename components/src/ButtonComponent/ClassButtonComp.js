import React from 'react'
import ButtonComp from './ButtonComp'

function ClassButtonComp() {
  return (
    <div>
      <ButtonComp size="large" state="hover" type="outlined" dynamic={true} />
    </div>
  );
}

export default ClassButtonComp
//<ButtonComp state="hover" type="filled" dynamic={true}/>