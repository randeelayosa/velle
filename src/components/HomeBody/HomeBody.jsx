import React from 'react';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';

// <Left/>
// <Middle/>
// <Right/>

function HomeBody(){
  return(
    <div className='body-container'>
      <div className='box left'><h1>donate donate donate donate donate donate donate</h1></div>
      <div className='box middle'><h1>locate locate locate locate locate locate locate</h1></div>
      <div className='box right'><h1>facilitate facilitate facilitate facilitate facilitate facilitate facilitate</h1></div>

      <style jsx>{`
        .body-container{
          width: 100%;
          height: 100vh;
          background-color: #d95980;
          display: flex;
          position: absolute;
          overflow: hidden;
        }
        .box{
          width: 100%;
          height: 100vh;
        }
        .box.left{
          background: #d95980;
          color: black;
          position: relative;
          overflow: hidden;
          flex-grow: 1;
          flex-basis: 0;
          transition: flex-grow .2s;
          transform: skew(-20deg, 0);
        }
        .box.middle{
          background: #63aac0;
          color: #000000;
          position: relative;
          overflow: hidden;
          flex-grow: 2;
          flex-basis: 0;
          transition: flex-grow .2s;
          transform: skew(-20deg, 0);
        }
        .box.right{
          background: #f99b45;
          color: #000000;
          position: relative;
          overflow: hidden;
          flex-grow: 3;
          flex-basis: 0;
          transition: flex-grow .2s;
          transform: skew(-20deg, 0);
        }
        .middle {
          margin: 0 10px;
          padding: 10%;
        }
        .right {
          margin-right: -225px;
        }
        .box::before {
          content: '';
          position: absolute;
          height: 100%;
          width: calc(100% + 200px);
          margin-left: -200px;
          display: block;
          background-attachment: fixed;
          transform: skew(20deg, 0);
        }
        .box:hover {
          flex-grow: 5;
          transition: flex-grow .2s;
        }
      `}</style>
    </div>
  )
}

export default HomeBody;
