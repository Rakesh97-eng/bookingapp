import { createContext, useReducer } from "react";

let intialstate = {
  destination: "",
  date: [],
  counts: {
    adults: undefined,
    childern: undefined,
    rooms: undefined,
  },
};

export const serachcontext = createContext(intialstate);

function reducer(state, action) {
  console.log("pay",state,action);
  switch (action.type) {
    case "newsearch":
      return action.payload;
    case "resetsearch":
      return intialstate;
    default :
       return state;
  }
}

export const  Searchcontextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);
    return <serachcontext.Provider
     value = {{
            city: state.destination,
            date:state.date,options:state.options,dispatch        
     }}
    >{children}
    </serachcontext.Provider>;
};
