import { useState } from "react";

export default function TimeSelect({ cityList, callBack }) {
  const [timeZone, setTimeZone] = useState({shiftStr: 'UTC', shiftNum: 0})

  const handleSubmit = (evt, callBack) => {
    evt.preventDefault();

    callBack(evt.target.city.value, timeZone.shiftNum);
  };

  const handleChange = ({ target: {value} }) => { 
    if (value.length <= 3) {
      setTimeZone({shiftStr: 'UTC', shiftNum: 0});
      return;
    }
    if (value.length === 4 && value.match(/UTC[+-]/)) {
      setTimeZone({shiftStr: value, shiftNum: 0});
      return;
    }

    const timeZoneShift = value.match(/UTC[+-](\d{1,2})$/) && +value.match(/UTC([+-]\d{1,2})$/)[1];
    
    if (timeZoneShift && Math.abs(timeZoneShift) <= 12) {
      setTimeZone({shiftStr: value, shiftNum: timeZoneShift});
    }    
  };

  return (    
    <form action="" className="time-select" onSubmit={(evt) => handleSubmit(evt, callBack)}>
      <div className="form-row">
        <div className="form-group col-3">
          <label htmlFor="name">Название</label>
          <select className="custom-select" id="city" defaultValue="London">
            {cityList.map(city =>
              <option key={city.id} value={city.id}>{city.name}</option>
            )}           
          </select>
        </div>
        <div className="form-group col-3">
          <label htmlFor="time-zone">Временная зона</label>
          <input type="text"
            className="form-control"
            id="timeZone"
            value={timeZone.shiftStr}
            onChange={handleChange}
            data-toggle="tooltip"
            data-placement="top"
            title="input format: UTC+0 or UTC-0"
          />            
        </div>
        <div className="form-group col mybutton">
          <button type="submit" className="btn btn-primary mb">Добавить</button>
        </div>
      </div>
    </form>    
  );
}