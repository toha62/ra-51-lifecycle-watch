import { useEffect, useState } from "react";

export default function Watch({ city, timeZone, handleClose }) {
  const getFormattedValue = (value) => {
    let strValue = value.toString();
    strValue = strValue.length === 2 ? strValue : '0' + strValue;

    return strValue;
  }

  const getCurrenTime = () => {
    const timeCounter = new Date();
    timeCounter.setHours(timeCounter.getHours() + timeZone);
    
    const seconds = getFormattedValue(timeCounter.getUTCSeconds());
    const minutes = getFormattedValue(timeCounter.getUTCMinutes());
    const hours = getFormattedValue(timeCounter.getUTCHours());

    return {seconds, minutes, hours};
  };

  const [clock, setClock] = useState(getCurrenTime());

  useEffect(
    () => {
      const timerId = setInterval(() => {     
        setClock(getCurrenTime);
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
        <span key="1">{clock.hours} : </span>
        <span key="2">{clock.minutes} : </span>
        <span key="3">{clock.seconds} </span>
      </div>   
      <div>
        <button className="material-icons close-button" onClick={handleClose}>clear</button>
      </div>
      <div className="clock">
        <div className="arrows seconds" style={{transform: `rotate(${(clock.seconds / 60) * 360 + 180}deg)`}}></div>
        <div className="arrows minutes" style={{transform: `rotate(${(clock.minutes / 60) * 360 + 180}deg)`}}></div>
        <div className="arrows hours" style={{transform: `rotate(${(clock.hours / 12) * 360 + 180}deg)`}}></div>
        <div className="circle"></div>
      </div>
    </>      
  );
}