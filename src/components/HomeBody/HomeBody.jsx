import React from 'react';
import Nav from './../Nav';

function HomeBody(){
  return(
    <div className='body-container'>
      <div className='box left'>
        <div className='left-container'>
          <h1 className='donate'>Donate</h1>
          <p className='p p1'>Generate a shipping label</p>
        </div>
      </div>
      <div className='box middle'>
        <h1 className='locate'>Locate</h1>
        <p className='p p2'>Where we operate and who participates</p>
      </div>
      <div className='box right'>
        <h1 className='facilitate'>Facilitate</h1>
        <p className='p p3'>Who we are and how it works</p>
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
        .left-container{
          width: 100%;
          margin-top: 50%;
        }
        .donate{
          font-size: 3em;
          color: #7c2741;
        }
        .locate{
          transform: skew(20deg, 0);
          font-size: 3em;
          color: #284e60;
        }
        .facilitate{
          transform: skew(20deg, 0);
          font-size: 3em;
          color: #af5e11;
          margin: 23% 0 0 10%;
        }
        .p1{
          color: #7c2741;
          font-size: 1.5em;
          margin: 40% 0 0 0;
        }
        .p2{
          transform: skew(20deg, 0);
          color: #284e60;
          font-size: 1.5em;
          margin: 30% 0 0 0;
        }
        .p3{
          transform: skew(20deg, 0);
          color: #af5e11;
          font-size: 1.5em;
          margin: 23% 0 0 10%;
        }
      `}</style>
    </div>
  )
}

export default HomeBody;
