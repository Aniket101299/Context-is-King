import { createContext, useEffect, useReducer } from "react";

export const RegistrationContext = createContext();

const initState = {
    name:"",
    age:"",
    dateOfBirth:"",
    stateOfResidence:"",
    address:"",
    pincode:""
}

function reducer(state,action) {
    switch(action.type) {
        case "CHANGE_NAME": 
            return {...state, name: action.payload};
        
        case "CHANGE_AGE":
            return {...state, age: action.payload};
         
        case "CHANGE_DATE_OF_BIRTH" :
            return {...state, dateOfBirth: action.payload};

        case "CHANGE_STATE_OF_RESIDENCE":
            return {...state, stateOfResidence: action.payload};

        case "CHANGE_ADDRESS" :
            return {...state, address: action.payload};
    
        case "CHANGE_PINCODE":
            return {...state, pincode: action.payload};  
           
        default:
            throw new Error();    
    }
}

// useReducer --> [state, dispatch];

export function RegistrationContextProvider ({children}) {

    const [state,dispatch] = useReducer(reducer, initState);

    const handleSubmit = () => {
        fetch("http://localhost:3001/users", {
            method:"POST",
            body: JSON.stringify(state),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => res.json())
        .then(() => 
        dispatch({type: "CHANGE_NAME", payload: ""}),
        dispatch({type: "CHANGE_AGE", payload: ""}),
        dispatch({type: "CHANGE_DATE_OF_BIRTH", payload: ""}),
        dispatch({type: "CHANGE_STATE_OF_RESIDENCE", payload: ""}),
        dispatch({type: "CHANGE_ADDRESS", payload: ""}),
        dispatch({type: "CHANGE_PINCODE", payload: ""}),
        )
        .catch((error) => console.log(error))
    };


    // useEffect(() => {
    //     console.log(state);
    // },[state]);


   const {name, age, dateOfBirth, stateOfResidence, address, pincode } = state;
   
   return (
       <RegistrationContext.Provider
       value = {{
               name,
               age,
               dateOfBirth,
               stateOfResidence,
               address,
               pincode,
               dispatch,
               handleSubmit
           }}
       >
       {children}
       </RegistrationContext.Provider>
   )

}




// create context and maintaining state inside context - done
// create a wrapper that will allow access to these state values across your entire application - done
// accessing the values that comes from context