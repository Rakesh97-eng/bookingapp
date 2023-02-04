import "./feturedtype.css";
import useFetch from "../../hooks/fetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Featuredtype = () => {
  const [hotelList, setHotellist] = useState([]);
  //   const [controll,updControll] = useState(false);
  //  const{data,loading,err} =useFetch('/hotels');
  //   console.log(data);
  useEffect(() => {
    axios.get("http://localhost:5000/api/hotels").then((res) => {
      console.log(res, "dfa");
      setHotellist(res.data);
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex" }}>
        {hotelList.map((list) => {
          return (
            <>
              <div>
                <img
                  src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Featuredtype;
