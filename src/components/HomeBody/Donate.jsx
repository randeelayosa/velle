import React from 'react';

function Donate(){
  return(
    <div className='donate-container'>
      <h1>Donate</h1>

      <style jsx>{`
        .donate-container{
          background-color: #d95980;
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-clip-path: polygon(0 0, 100% 0%, 44% 100%, 0 100%);
          clip-path: polygon(0 0, 100% 0%, 44% 100%, 0 100%);
        }
      `}</style>
    </div>
  )
}

export default Donate;
