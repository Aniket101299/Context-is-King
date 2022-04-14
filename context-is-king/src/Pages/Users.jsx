import { useEffect, useState } from "react";
import "./Users.css";

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/users`)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch((err) => console.log(err))
    }, []);


    return (
        <table className="user" style={{border:"1px solid gray"}}>
            <thead>
              <tr>
                  <th style={{border:"1px solid gray"}}>Name</th>
                  <th style={{border:"1px solid gray"}}>Age</th>
                  <th style={{border:"1px solid gray"}}>Date of Birth</th>
                  <th style={{border:"1px solid gray"}}>State of Residence</th>
                  <th style={{border:"1px solid gray"}}>Address</th>
                  <th style={{border:"1px solid gray"}}>Pincode</th>
              </tr>
            </thead>
               {users.map((user) => (
              <tr>
                  <td style={{border:"1px solid gray"}}>{user.name}</td>
                  <td style={{border:"1px solid gray"}}>{user.age}</td>
                  <td style={{border:"1px solid gray"}}>{user.dateOfBirth}</td>
                  <td style={{border:"1px solid gray"}}>{user.stateOfResidence}</td>
                  <td style={{border:"1px solid gray"}}>{user.address}</td>
                  <td style={{border:"1px solid gray"}}>{user.pincode}</td>
              </tr>
               ))}
            <tbody>
                
            </tbody>
        </table>
    );
};