import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import "./list.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../searchItem/searchitem";
import useFetch from "../../hooks/fetch";
import refetch from "../../hooks/fetch";
import build from "../../assests/building.jpg"


const List = () => {
  let location = useLocation();
  const { data, loading,refetch } = useFetch(
    `/hotels/getbycity?city=${location.state.destination}&min=100&max=400`
  );
  console.log("datafect", loading, data);
  // useEffect(() => {
  //   console.log("location", location);
  // }, []);
 const handleclick = ()=>{
 refetch()
 console.log("redata",refetch());
 }
  return (
    <div>
      <Header type="list" />
      <div style={{ 
      backgroundImage: `url(${build})` ,backgroundSize:"550px 750px"
    }} >
        <div style={{ display:"flex",width: "100%",justifyContent:"space-around" }}>
          <div className="listcontainer">
            <h1 style={{"color":"#4d4dff"}}>Search</h1>
            <div>
              <label>Destination</label>
              <input
                className="listinput"
                type="text"
                value={location.state.destination}
              ></input>
            </div>
            <div>
              <label>Check in Date</label>
              <input type="date"></input>
            </div>
            <div>
              <span style={{"color":"#4d4dff"}}>Options</span>
              <div className="listoption">
                <label>Min price per night</label>
                <input className="listoptinput" type="Number" />
              </div>
              <div className="listoption">
                <label>Max price per night</label>
                <input className="listoptinput" type="Number" />
              </div>
              <div className="listoption">
                <label>Adult</label>
                <input
                  value={location.state.counts.adults}
                  className="listoptinput"
                  type="Number"
                />
              </div>
              <div className="listoption">
                <label>Room</label>
                <input
                  className="listoptinput"
                  value={location.state.counts.rooms}
                  type="Number"
                />
              </div>
            </div>
            <button style={{ color: "black" }} onClick={handleclick}>Search</button>
          </div>
          <div style={{margin:"2%",padding:"3%", width: "50%",alignitems:"center",alignContent:"center",backgroundColor:"#669999",color:"white"}}>
            
            { loading ? "Please wait ":
                 <>
                   {data.map((item) => {
                  return <SearchItem item={item} />;
                })}</>
                }
            
               
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
