import React from "react";
import axios from "axios";
import './index.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css' 


function Api(){ 
    var [arr,setArr]=React.useState([])

    function Abc(i){
        arr.splice(i,1) 
       setArr([...arr])
    }
    React.useEffect(
        function(){
            axios.get('https://course-api.com/react-tours-project').then(function (res){
                setArr([...res.data])
                
            
            })
            
        },[])
        

    return(
       
        <div Align="center" >
            <h1 style={{marginTop:'50px'}}>Our Tour</h1>
            {
               
                arr.map(function (s,i){
                   
                    return( 
                        <div className='box'>
                        <div class="card" style={{width: '650px'}}>
                            <img src={s.image}style={{width:"650px"}} class='card-img-top' />
                        <div class='card-body'>
                        <div className="name">
                        <h3 class="card-titel" style={{display:'inline',}} >{s.name}</h3>
                        <h4 className="p">${s.price}  </h4>    
                        </div>
                        <p class="card-title" >{s.info}</p>
                        <button className="not" style={{Align:'center'}} onClick={()=>{Abc(i)}}>not intrest</button>
                        </div>
                        </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Api;