import React, {Component} from "react"
import Shape from './Shape'
class Selector extends Component {
  constructor(){
    super();
    this.state={
      selectedShape: "square",
      total: 0,
      trapezium: 0,
      oval: 0,
      square: 0,
      triangle: 0
    };
  };
  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
      total:this.state.total+1,
      // shapeName: this.state.shapeName+1
    })
    this.state[shapeName]++
  }








  render(){
    return (
      <div className = "container">
        <div className = "navbar">
          <div > Selected:</div>
          <div>{this.state.selectedShape}</div>
          </div> 
          <div className = "shape-List">
            <Shape shape="trapezium" selectShape={this.selectShape} />
            <Shape shape="oval" selectShape={this.selectShape}/>            
            <Shape shape="square" selectShape={this.selectShape}/>
            <Shape shape="triangle" selectShape={this.selectShape}/>
          </div>
          <div className="footer">
            <div>Total Count: <div>{this.state.total}</div></div>
            Trapezium =<div>{this.state.trapezium}</div>
            Oval =<div>{this.state.oval}</div>
            Square =<div>{this.state.square}</div>
            Triangle =<div>{this.state.triangle}</div>

          </div>
      </div> 
    )
  }
}
export default Selector