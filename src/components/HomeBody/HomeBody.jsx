import React from 'react';
import Donate from './Donate';
import Locate from './Locate';
import Facilitate from './Facilitate';


function HomeBody(){
  return(
    <div className='body-container'>
    <Donate/>
    <Locate/>
    <Facilitate/>

      <style jsx>{`
        .body-container{
          width: 100%;
          height: 92vh;
          border: 1px solid blue;
        }
      `}</style>
    </div>
  )
}

export default HomeBody;
