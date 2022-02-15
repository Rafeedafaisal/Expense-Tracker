import Chart from "../Mainchart/Chart"
import moment from "moment"
export default function Filterchart(props) {
    const chartDataPoints=[{label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0}

]
for(const expense of props.expensechart){
    const vv=new Date(expense.date)
    console.log("zzzzzzzzzz"+vv);
    // const mom=moment(vv).format("MMM")
    // console.log("the month is "+mom);
    
    const expenseMonth=vv.getMonth();
   
    console.log("the month is ...."+expenseMonth);
    parseInt(chartDataPoints[expenseMonth].value+=expense.price)
    // console.log("the price is"+expense.price);
    // chartDataPoints[mom].value+=expense.price




    

}
    return(
<>
<Chart dataPoints={chartDataPoints}/>
</>
    )
}