import React,{useEffect,useState} from 'react';
import Axios from 'axios';
function CrudPage()
{

   const [foodName,setFoodName]=useState("");
   const [description,setDecription]=useState([]);

    //insert 
    const addFoodData=()=>{
        Axios.post("http://localhost:3001/insert",{foodName,description})
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return(
        
        <div className="container">
        <h1>This is CrudPage</h1>
          <div className="mb-3">
              <input type="text" className="form-control" placeholder="FoodName" required
              onChange={(e)=>setFoodName(e.target.value)}
              />
          </div>
          <div className="mb-3">
               <input type="text" className="form-control" placeholder="FoodDescription" required
               onChange={(e)=>setDecription(e.target.value)}
              />
          </div>
          <div className="mb-3">
              <button className="btn btn-primary" onClick={addFoodData}>AddFood</button>
          </div>
          
        </div>
    )
}
export default CrudPage;