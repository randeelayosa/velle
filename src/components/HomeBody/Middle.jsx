import React from 'react';

function Middle(){
  return(
    <div className='locate-container'>
      <h1>Locate</h1>

      <style jsx>{`
        .locate-container{
          background-color: #63aac0;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 10;
          -webkit-clip-path: polygon(55% 0, 100% 0%, 100% 100%, -10% 100%);
          clip-path: polygon(55% 0, 100% 0%, 100% 100%, -10% 100%);
        }
        h1{
          text-align: right;
        }
      `}</style>
    </div>
  )
}

export default Middle;
