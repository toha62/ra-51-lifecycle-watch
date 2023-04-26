import { useState } from "react";
import TimeSelect from './components/TimeSelect';
import Watches from './components/Watches';

function App() {
  const [watchList, setWatchList] = useState([]);
  const cityList = [
    {
      id: 1,
      name: 'New York',
      shift: -4,
    },
    {
      id: 2,
      name: 'Moscow',
      shift: 3,
    },
    {
      id: 3,
      name: 'London',
      shift: 0,
    },
    {
      id: 4,
      name: 'Tokyo',
      shift: 9,
    },
  ];

  const addWatch = (cityId) => {    
    setWatchList((prev) => {
      const key = Date.now();
      const tempArr = [...prev];
      const timeZone = cityList.find(city => city.id === +cityId).shift;
      const city = cityList.find(city => city.id === +cityId).name;
      tempArr.push({city, timeZone, key});
      return tempArr;
    });
  };

  const removeWatch = (key) => {
    const index = watchList.findIndex(item => item.key === key);
    const tempArr = [...watchList];

    if (index !== -1) {
      tempArr.splice(index, 1);
      setWatchList(tempArr);
    }
    
  };

  return (
    <div className="container">     
      <TimeSelect
        cityList={cityList}
        callBack={addWatch}
      />
      <Watches
        watchList={watchList}
        handleClose={removeWatch}
      /> 
    </div> 
    
);
}

export default App
