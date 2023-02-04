import { useEffect } from "react";
import "./searchitem.css"
import build from "../../assests/building.jpg"
import { Link } from "react-router-dom";

const SearchItem = ({item})=>{
    useEffect(()=>{
        console.log("teemmm",item);
    })
return(
    
    <>
      <div style={{ 
      backgroundImage: `url(${build})` ,backgroundSize:"150px 150px"
    }} className="searchitem" >
        {/* <img src={build} /> */}
        <div className="searchvalues">Name: {item.name}</div>
        <div  className="searchvalues">City : {item.city}</div>
        <div  className="searchvalues">Distance :{item.distance}</div>
        <div  className="searchvalues">Type:{item.type}</div>
        <div  className="searchvalues">Address:{item.address}</div>
       <Link to={`/hotel/${item._id}`}>
        <button className="button" >Check</button>
        </Link>
      </div>
    </>
)
}
export default SearchItem;