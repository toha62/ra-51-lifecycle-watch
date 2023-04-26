import { useEffect, useState } from "react";

export default function Watch({ city, timeZone, handleClose }) {
  const getFormattedValue = (value) => {
    let strValue = value.toString();
    strValue = strValue.length === 2 ? strValue : '0' + strValue;
    return strValue;
  }

  const timeCounter = new Date();
  timeCounter.setHours(timeCounter.getHours() + timeZone);

  const [seconds, setSeconds] = useState(getFormattedValue(timeCounter.getUTCSeconds()));
  const [minutes, setMinutes] = useState(getFormattedValue(timeCounter.getUTCMinutes()));
  const [hours, sethours] = useState(getFormattedValue(timeCounter.getUTCHours()));
 
  useEffect(
    () => {
      const timerId = setInterval(() => {         
        const timeCounter = new Date();       
        timeCounter.setHours(timeCounter.getHours() + timeZone);

        setSeconds(getFormattedValue(timeCounter.getUTCSeconds()));
        setMinutes(getFormattedValue(timeCounter.getUTCMinutes()));
        sethours(getFormattedValue(timeCounter.getUTCHours()));
      }, 1000);

      return () => {
        console.log('clear');
        clearInterval(timerId);
      }
    },
    [],
  );  
  
  return (
    <>  
      <h4>{city}</h4> 
      <div>
        <span key="1">{hours} : </span>
        <span key="2">{minutes} : </span>
        <span key="3">{seconds} </span>
      </div>   
      <div>
        <button className="btn mb" onClick={handleClose}>close</button>
      </div>
    </>      
  );
}