import Watch from "./Watch";

export default function Watches({ watchList, handleClose }) {
  
  return (
    <ul className="list-group list-group-horizontal">      
      {watchList.map((watch) =>
        <li key={watch.key} className="list-group-item">
          <Watch
            timeZone={watch.timeZone}
            timeShift={watch.timeShift}
            handleClose={() => handleClose(watch.key)}
          />
        </li>  
      )}
    </ul>
  );
}