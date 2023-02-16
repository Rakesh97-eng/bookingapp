import "./header.css";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import {useNavigate} from "react-router-dom"
import { serachcontext } from "../../cotext/context";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [show, setShow] = useState(false);
  const [counts, setCounts] = useState({ adults: "", children: "", rooms: "" });
  const navigate = useNavigate();
  const {dispatch} = useContext(serachcontext)
  const Daterange = (item) => {
   
    setDate([item.selection]);
  
  };

  const Submit = (e) => {
    setCounts({ ...counts, [e.target.name]: e.target.value });
  };

  const handlesearch = () => {
      dispatch({type:"newsearch",payload:{destination,date,counts}})
       navigate("/list",{state:{destination,date,counts}})
  };
  return (
    <>
      <div className="header">
        <div className="headcontainer">
          <div className="headlist">
            <div className="headlistitem">Stays</div>
            <div className="headlistitem">Airport taxis</div>
            <div className="headlistitem">Attractions</div>
            <div className="headlistitem">car Rental</div>
            <div className="headlistitem">Flights</div>
          </div>

          {type !== "list" && (
            <>
              <p>A lifetime of discount.is it genius?</p>
              <p>Get rewarded for your travel</p>

              <div className="headsearch">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                ></input>
                <div className="headdate">
                  <span onClick={() => setShow(!show)}>::</span>
                  {/* <span>{`${format(date[0].startDate,"MM/dd/yyyy")}to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span> */}
                  {show && (
                    <div >
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => Daterange(item)}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                      />
                    </div>
                  )}
                </div>
                <div>
                  <input
                    placeholder="adults"
                    type="Number"
                    name="adults"
                    className="headcounts"
                    value={counts.adults}
                    onChange={(e) => {
                      Submit(e);
                    }}
                  ></input>
                  <input
                    placeholder="children"
                    name="childern"
                    className="headcounts"
                    onChange={(e) => {
                      Submit(e);
                    }}
                  ></input>
                  <input
                    placeholder="rooms"
                    name="rooms"
                    className="headcounts"
                    onChange={(e) => {
                      Submit(e);
                    }}
                  ></input>
                </div>
                <button onClick={handlesearch}>Search</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
