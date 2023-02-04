import "./featured.css";
import useFetch from "../../hooks/fetch";
import { useEffect, useState } from "react";
const Featured =()=>{
   
  let datas = useFetch("/hotels/countbyCity?cities=chennai,Kumbakonam,avadi");
  const cities = useFetch("/hotels/type/countbyType");
   let allhotes = [{data:"Home"}];
   console.log("datas",allhotes);
  
  const{data,loading} = datas;
    return(
        <>
        <div>
       { loading ?"loading please wait": <div className="featured">
         <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>chennai</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Trichy</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Leh</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      </div>}
      </div>
      <div>
      {allhotes.map(value=>{
        console.log("datavalue",value.data);
        <p style={{"backgroundColor":"black"}}>{value.data}</p>
       
      })}
      </div> 
        </>
    )
}

export default Featured;