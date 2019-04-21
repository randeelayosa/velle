import React from 'react';
import patos from '../assets/images/patos.jpeg';

function NewTicketForm(){

  var styles = {
      backgroundImage: 'linearGradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'
  };
  return(
    <div style={styles}>
      <div>
        <style jsx>{`
            img {
              width: 100%;
              height: 25%;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              position: relative;
            }
                `}</style>
        <img src={patos}/>
      </div>
      <form>
        <style jsx>{`
          form {
            text-align: center;
            position: absolute;
            top: 75%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            width: 100%;
            height:75%;
          }
        `}</style>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
        <input
          type='text'
          id='location'
          placeholder='Location'/>
        <textarea
          id='issue'
          placeholder='Describe your issue'/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
