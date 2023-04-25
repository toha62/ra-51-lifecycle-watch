import { useState } from "react";
import TimeSelect from './components/TimeSelect';
import Watches from './components/Watches';

function App() {
  const [watchList, setWatchList] = useState([]);

  const addWatch = (cityId, timeZone) => {    
    setWatchList((prev) => {
      const key = Date.now();
      const tempArr = [...prev];
      tempArr.push({cityId, timeZone, key});
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
      <TimeSelect callBack={addWatch} />
      <Watches
        watchList={watchList}
        handleClose={removeWatch}
      /> 
    </div> 
    
);
}

export default App
