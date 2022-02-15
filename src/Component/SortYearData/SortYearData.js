import "./sortyeardata.css"
export default function Sortyeardata(props) {
    return(
        <div className="container" id="sort">
             {props.sortdata.map((u,i)=>(
                    <div className="row">
               
                    <div className="col-sm-3" id="date">{u.date}</div>
                    <div className="col-sm-3" id="itemname">{u.item}</div>
                    <div className="col-sm-3 offset-3" id="itemprice">${u.price}</div>
                </div>
                    ))}
            
        </div>
    )
}