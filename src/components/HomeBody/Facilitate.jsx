import React from 'react';

function Facilitate(){
  return(
    <div className='locate-container'>
      <h1>Facilitate</h1>

      <style jsx>{`
        .locate-container{
          background-color: #f99b45;
          width: 100%;
          height: 100%;
          position: absolute;
          z-index: 20;
          -webkit-clip-path: polygon(95% 0, 100% 0%, 100% 100%, 35% 100%);
          clip-path: polygon(95% 0, 100% 0%, 100% 100%, 35% 100%);
        }
      `}</style>
    </div>
  )
}

export default Facilitate;
