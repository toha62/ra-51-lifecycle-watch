export default function Card({ title, cardText, children }) {
return (
  <div className="card" style={{width: "18rem"}}>
    <div>{children}</div>
    
    <div className="card-body">
      <h5 className="card-title">{title}</h5>      
      <p className="card-text">{cardText}</p>      
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
);
}