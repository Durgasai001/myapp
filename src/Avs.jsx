import React, { useEffect } from "react";
import { axios } from "axios";
function Countries(){
    var [countries,setCountries]=React.useState([])
   useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all').then(function(response){
        console.log(response.data)
        setCountries([...response.data])
    })
   },[])
   return (
    <div className="mybox">
      <h1>Countries</h1> 
      {
        countries.length>0 && countries.map((c)=>{
            return <li>{c.name.common}</li>
        })
      }
    </div>
   )
}
export default Countries;