import React from 'react';
import Nav from './../Nav';

function HomeBody(){
  return(
    <div className='body-container'>
      <div className='box left'>
        <div className='left-container'>
          <h1>donate donate donate donate donate donate donate</h1>
          <p>can you see this?</p>
        </div>
      </div>
      <div className='box middle'>
        <h1>locate locate locate locate locate locate locate</h1>
      </div>
      <div className='box right'>
        <h1>facilitate facilitate facilitate facilitate facilitate facilitate facilitate</h1>
      </div>
      <Nav/>
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
          box-sizing: border-box;
          padding: 2%;
          flex-grow: 1;
          flex-basis: 0;
          transition: flex-grow .2s;
        }
        p{
          color: #d95980;
          border: 1px solid green;
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
          margin-right: -232px;
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
        .box p:hover {
          color: black;
          cursor: pointer;
        }
        .left-container{
          border: 1px solid green;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default HomeBody;
