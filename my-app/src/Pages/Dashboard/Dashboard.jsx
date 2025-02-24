import React from "react";

import {useState, useEffect} from "react";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";


const Dashboard =() => {
    const { selectedOption } = useDropdown(); // Get selected option
    const [allUserData, setAllUserData] = useState([]);


 async function getAllData() {
    try{
let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`);

console.log("response ", response);
setAllUserData(response.data);



}
    catch(err){
        console.log("Error occured in All Data ", err)
    }
 }




useEffect(() => {
    getAllData()
}, [])

    return (
        <div>
        <h1>Dashboard</h1>
              <p>Selected Option: {selectedOption}</p> 
              {/* Display selected option */}

        
        </div>
    )
}

export default Dashboard;
