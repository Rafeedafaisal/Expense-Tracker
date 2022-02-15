import "./selectyear.css"
import { useState } from "react";
import moment from "moment"
import Sortyeardata from "../SortYearData/SortYearData";
import Chartbar from "../Chart/ChartBar";
import Filterchart from "../FilterdChart/FilteredChart";


export default function Selectyear(props) {
    const [year, setyear] = useState("");
const select=(e)=>{
const yearData=e.target.value;
setyear(yearData)
}
// console.log(props.yearvalue);
const filterData=props.yearvalue.filter(filterfn)
function filterfn(fdata){
    const mom=moment(fdata.date).format("yyyy")
     console.log("the year is "+mom);
    if(mom===year){
        return filterfn;
    }
}
console.log(filterData);
    




    return(
        <>
        <div className="container" id="select">
            <form >
                <div className="form-group">
                    <select id="selectform" onChange={select}>
                        <option>Select</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
            </form>
        </div>
       
     
        <Filterchart expensechart={filterData}/>
        <Sortyeardata sortdata={filterData}/>
        {/* <Chartbar/> */}
        </>
    )
}