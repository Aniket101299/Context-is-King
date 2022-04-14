import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationContext";
import "./Form.css";

export const Form2 = () => {

    const {
        dispatch,
        stateOfResidence,
        address,
        pincode,
        name,
        age,
        dateOfBirth,
        handleSubmit
    } = useContext(RegistrationContext);

    if(!name || !age || !dateOfBirth) {
        return <Navigate to="/registration/one" />;
    }

    return(
        <div className="form2">
            <input
            placeholder="State Of Residence"
            type="text"
            value={stateOfResidence}
            onChange= {(e) => 
            dispatch({
                type: "CHANGE_STATE_OF_RESIDENCE",
                payload: e.target.value
             })
            }
            >
            </input>

            <br/>

            <input
            placeholder="Address"
            type="text"
            value={address}
            onChange= {(e) => 
            dispatch({type: "CHANGE_ADDRESS", payload: e.target.value})
            }
            >
            </input>

            <br/>

            <input
            placeholder="Pincode"
            type="number"
            value={pincode}
            onChange= {(e) => 
            dispatch({type: "CHANGE_PINCODE", payload: e.target.value})
            }
            >
            </input>

            <br/>

            <button 
            disabled={
                !stateOfResidence ||
                !address ||
                !pincode || 
                !name || 
                !age || 
                !dateOfBirth
            }
            onClick={handleSubmit}
            >
             SUBMIT   
            </button>

        </div>
    );
};