import "./adddata.css"
import { Component } from "react";
export default class Adddata extends Component {
  constructor(props){
  super(props)
  this.state={
      item:"",
      price:0,
      date:""
  }

  
  }
 submit=(e)=>{
     e.preventDefault();
     this.props.add(this.state)
 }
render(){
    return(
        <div className="container" id="add">
            <form onSubmit={this.submit}>
  <div className="form-group">
 
    <input type="text" className="form-control" onChange={(e)=>this.setState({item:e.target.value})} value={this.state.item} id="exampleInputtext" aria-describedby="emailHelp" name="itemName" placeholder="item Name"/>
  
  </div>
  <div className="form-group">
   
    <input type="number" className="form-control" onChange={(e)=>this.setState({price:e.target.value})} value={this.state.price}id="exampleInputtext" aria-describedby="emailHelp" name="itemPrice" placeholder="item Price"/>
  </div>
  <div className="form-group">
   
    <input type="date" className="form-control" onChange={(e)=>this.setState({date:e.target.value})} value={this.state.date} id="exampleInputtext" name="itemDate"/>
  </div>

  <button type="submit" className="btn btn-danger">Submit</button>
</form>
        </div>
    )}
}