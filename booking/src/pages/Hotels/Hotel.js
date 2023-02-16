import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { serachcontext } from "../../cotext/context";
import useFetch from "../../hooks/fetch";
import "./Hotel.css";
import { Authcontext } from "../../cotext/authcontext";
import Reserve from "../../components/reserve/reserve";

const Hotel = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let msperday = 1000 * 60 * 60 * 24;
  const [days, setDays] = useState("");
  const [reserve, setReserve] = useState(false);
  let locationID = location.pathname.split("/")[2];
  let { data, loading } = useFetch(`/hotels/find/${locationID}`);
  const { date } = useContext(serachcontext);
  const { user } = useContext(Authcontext);
  useEffect(() => {
    datediff(date[0].startDate, date[0].endDate);
  }, [date]);
  const datediff = (day1, day2) => {
    let timediff = Math.abs(day2.getTime() - day1.getTime());
    let diffdays = Math.ceil(timediff / msperday);
    setDays(diffdays);
  };
  const handleclick = () => {
    if (user) {
      setReserve(!reserve);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="Hotelbg">
        <h1 style={{ color: "whitesmoke" }}>Hotelss</h1>
        <div className="Hotel" style={{ textAlign: "left" }}>
          <div>
            <h1>{data.name}</h1>
            <h3>{data.city}</h3>
            <h3>Excellent location- 500m from center</h3>
            <h3>
              Book a stay over {data.cheapestprice} at this property and get a
              free taxi{" "}
            </h3>
            <h3 style={{ fontFamily: "bold" }}>Best Hotel in the City </h3>
          </div>
          <div>
            {user && (
              <button
                style={{
                  backgroundColor: "blue",
                  borderRadius: "3px",
                  color: "white",
                }}
                onClick={handleclick}
              >
                Reserve or Booknow!
              </button>
            )}
            <h3>
              Rate: {data.cheapestprice * days} for {days} days
            </h3>
          </div>
        </div>
        {reserve && <Reserve id = {locationID} />}
      </div>
    </div>
  );
};
export default Hotel;
