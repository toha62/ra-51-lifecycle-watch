import { useState } from "react";

export default function TimeSelect() {
  const [timeZone, setTimeZone] = useState('UTC')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  const handleChange = ({ target }) => {
    console.log(target.value);
    setTimeZone(target.value);
  };

  return (    
    <form action="" className="time-select" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-3">
          <label htmlFor="name">Название</label>
          <select className="custom-select" id="name" defaultValue="London">
            <option value="1">New York</option>
            <option value="2">Moscow</option>
            <option value="3">London</option>
            <option value="4">Tokyo</option>
          </select>
        </div>
        <div className="form-group col-3">
          <label htmlFor="time-zone">Временная зона</label>
          <input type="text" className="form-control" id="time-zone" value={timeZone} onChange={handleChange} />            
        </div>
        <div className="form-group col mybutton">
          <button type="submit" className="btn btn-primary mb">Добавить</button>
        </div>
      </div>
    </form>    
  );
}