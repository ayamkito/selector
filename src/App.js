import React, {Component} from "react"
import Shape from './Shape'
class Selector extends Component {
  constructor(){
    super();
    this.state={
      selectedShape: "square",
    };
  };
  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName
    })
  }







  render(){
    return (
      <div class = "container">
        <div className = "navbar">
          <div > Selected:</div>
          <div>{this.state.selectedShape}</div>
          </div> 
          <div className = "shape-List">
            <Shape shape="square" selectShape={this.selectShape}/>
            <Shape shape="circle" selectShape={this.selectShape}/>
            <Shape shape="triangle" selectShape={this.selectShape}/>
          </div>
      </div> 
    )
  }
}
export default Selector