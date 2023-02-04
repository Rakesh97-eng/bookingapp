import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url)=>{
   const[loading,setLoading]=useState(false);
   const [data,setData] = useState([]);
   const [err,setErr] = useState("");

    useEffect ( ()=>{
        
        const fetchData = async()=>{
            setLoading(true);
           try {
           
            let userData =await axios.get(url);
            setData(userData.data);}
            catch(err){
                setErr(err)
            }
            setLoading(false);

        }
      fetchData();
      
    },[url]);
    const refetch = async ()=>{
        setLoading(true);
        try{
            let userData = await axios.get(url);
            setData(userData.data);

        }catch(err){
            setErr(err);
        }
        setLoading(false);
    }
    return{data,loading,err,refetch}
   
}
export default useFetch;