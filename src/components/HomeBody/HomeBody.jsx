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
          display: flex;
        }
      `}</style>
    </div>
  )
}

export default HomeBody;
