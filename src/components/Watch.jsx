import { useEffect, useState } from "react";

export default function Watch({ timeZone, handleClose }) {
  const timeCounter = new Date();
  const [seconds, setSeconds] = useState(timeCounter.getUTCSeconds());
  const [minutes, setMinutes] = useState(timeCounter.getUTCMinutes());
  const [hours, sethours] = useState(timeCounter.getHours(timeCounter.setHours(timeCounter.getUTCHours() + timeZone)));
  
  const setValueWithFormat = (value, setFunc) => {
    let strValue = value.toString();
    strValue = strValue.length === 2 ? strValue : '0' + strValue;
    setFunc(strValue);
  }

  useEffect(
    () => {
      const timer = setInterval(() => { 
        timeCounter.setTime(timeCounter.getTime() + 1000);
        
        setValueWithFormat(timeCounter.getUTCSeconds(), setSeconds);
        setValueWithFormat(timeCounter.getUTCMinutes(), setMinutes);
        setValueWithFormat(timeCounter.getUTCHours(), sethours);
      }, 1000);

      return () => {
        console.log('clear');
        clearInterval(timer);
      }
    },
    [],
  );

  
  
  return (
    <>   
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