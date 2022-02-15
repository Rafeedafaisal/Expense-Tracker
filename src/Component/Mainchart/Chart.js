import "./chart.css"
import Chartbar from "../Chart/ChartBar";

export default function Chart(props) {
const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value)
console.log("the datapoint values are "+dataPointValues);
const totalMaximum=Math.max(...dataPointValues)
console.log("total maximum values are  "+totalMaximum);
    return(

<>
<div className="container">
<div className="chart">
    {
        props.dataPoints.map((dataPoint)=>(
            <Chartbar key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            
            />
        ))
    }
</div>
</div>
</>
    )
}