import React from 'react';
import MapContainer from './Locate/MapContainer'
import NavConstant from './Layout/NavConstant';


function Locate(){
  return(
    <div>
      <h1>You are on the Locate page</h1>
      <NavConstant />
      <MapContainer/>
    </div>
  )
}

export default Locate;
