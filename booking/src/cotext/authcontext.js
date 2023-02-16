import { createContext, useEffect, useReducer } from "react";

let intialstate = {
  user: JSON.parse(localStorage.getItem('user'))||null,
  loading:false,
  error:""
};

export const Authcontext = createContext(intialstate);

function reducer(state, action) {
  switch (action.type) {
    case "Login_start":
      return {
        user: "",
        loading:true,
        error:""
      };
    case "Login_sucess":
      return {
        user:action.payload,
        loading: false,
        error:""
      };
    case "Login_error":
      return action.payload;
    
    case "Logout":
      return {
        user: "",
        loading:true,
      }
    
    default :
       return state;
  }
}

export const  Authcontextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialstate);

  useEffect(() => {
    console.log("stateuser",state);
    localStorage.setItem('user',JSON.stringify(state.user))
  },[state.user])
    return <Authcontext.Provider
     value = {{
            user: state.user,
            loading:state.loading,error:state.error,dispatch        
     }}
    >{children}
    </Authcontext.Provider>;
};
