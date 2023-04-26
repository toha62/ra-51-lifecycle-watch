import { useState } from "react";

export default function TimeSelect({ cityList, callBack }) {
  const [timeZone, setTimeZone] = useState(cityList[0].shift)

  const handleSubmit = (evt, callBack) => {
    evt.preventDefault();
    
    callBack(evt.target.city.value);
  };

  const handleChange = ({ target: {value} }) => {     
    const timeShift = cityList.find(city => city.id === +value).shift;
    
    setTimeZone(timeShift);
  };

  return (    
    <form action="" className="time-select" onSubmit={(evt) => handleSubmit(evt, callBack)}>
      <div className="form-row">
        <div className="form-group col-3">
          <label htmlFor="name">Название</label>
          <select className="custom-select" id="city" defaultValue={cityList[0].name} onChange={handleChange}>
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
            value={timeZone > 0 ? 'UTC+' + timeZone : 'UTC' + timeZone}
            readOnly            
          />            
        </div>
        <div className="form-group col mybutton">
          <button type="submit" className="btn btn-primary mb">Добавить</button>
        </div>
      </div>
    </form>    
  );
}