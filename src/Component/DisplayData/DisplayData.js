import "./displaydata.css"
export default function Displaydata(props) {


 
        return( <div className="container" id="display" >
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>ITEM</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>  
         { props.datapassing.map((u,i)=>(
                 <tr key={u.id}>
                            <td>{u.date}</td>
                            <td>{u.item}</td>
                            <td>{u.price}</td>
                        </tr> ))}
                  </tbody>
        </table>
    </div>
           
                       
            )
    
  
   
}