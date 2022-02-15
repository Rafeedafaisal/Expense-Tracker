import Adddata from "../AddDATA/addData";
import Displaydata from "../DisplayData/DisplayData";
import { useReducer, useState } from "react";
import {v4 as uuidv4} from "uuid"
import { useEffect } from "react";
import Selectyear from "../SelectYear/SelectYear";
export default function Mainpage() {
    const [val, setval] = useState([]);
    const getdata=(addingdata)=>{
        
    setval([...val,{id:uuidv4(),...addingdata}])
    }
    useEffect(() => {
       const localdata=JSON.parse(localStorage.getItem("expensetracker"))
       if(localdata){
           setval(localdata)
       }
    }, []);
    useEffect(() => {
       localStorage.setItem("expensetracker",JSON.stringify(val))
    }, [val]);
    return(
        <>
        <div className="container-fluid">
            <Adddata add={getdata}/>
            <Displaydata datapassing={val}/>
            <Selectyear yearvalue={val}/>
        </div>
        </>
    )
}