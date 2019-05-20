import React from 'react';

function Donate(){
  return(
    <div className='donate-container'>
      <div className='donate-content'>
        <h1>Donate</h1>
      </div>

      <style jsx>{`
        .donate-container{
          background-color: #d95980;
          width: 100%;
          height: 100%;
          position: absolute;
          -webkit-clip-path: polygon(0 0, 55% 0, 0 85%);
          clip-path: polygon(0 0, 55% 0, 0 85%);
        }
        .donate-container:hover{
          animation: donateExpand 2s linear infinite;
        }
        .donate-content{
          border: 1px solid red;
        }
        @keyframes donateExpand {
          0% {
            -webkit-clip-path: polygon(0 0, 55% 0, 0 85%);
            clip-path: polygon(0 0, 55% 0, 0 85%);
          }
          100% {
            height: 100%;
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default Donate;
