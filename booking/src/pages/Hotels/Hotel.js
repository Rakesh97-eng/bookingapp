import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/fetch";

const Hotel =()=>{
    let location = useLocation();
    let locationID = location.pathname.split('/')[2];
     
     let {data,loading}= useFetch(`/hotels/find/${locationID}`)
     
    useEffect(()=>{
         console.log("location",locationID,data )      
                  
    },[]    )
    return(
        <>
        <h1 style={{"backgroundColor":"black","maxHeight":"100px","color":"whitesmoke "}}>Hotelss</h1>
        </>
    )
    
}
export default Hotel;