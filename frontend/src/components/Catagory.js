import React from "react";
import "./Catagory.css";
import Hover from '../assets/Hover.png'
import Plate from '../assets/Plate.png'
class Catagory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
      <p className="txt">Choose Category</p>
      <div className="body">
        <div className="Line">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Animation</span>
        </div>
        <div className="Line1">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span> QA & Testing</span>
        </div>
        <div className="Line2">
          <img src={Hover} alt=""/>
          <span>Accounting</span>
         
        </div>
        <div className="Line2-column1">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Interior Design</span>
        </div>
        <div className="Line2-column2">
          <img src={Hover} alt=""/>
          <span> Video Editing</span>
        </div>
        <div className="Line2-column3">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Translation</span>
        </div>
        <div className="Line3-column1">
          <img src={Hover} alt=""/>
          <span>Graphic Design</span>
        </div>
        <div className="Line3-column2">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span> Content Writing</span>
        </div>
        <div className="Line3-column3">
         <img src={Hover} alt=""/>
          <span>Website Design</span>
        </div>
        <div className="Line4-column1">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>UI Design</span>
        </div>
        <div className="Line4-column2">
         <img src={Hover} alt=""/>
          <span> SEO</span>
        </div>
        <div className="Line4-column3">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Software  </span>
        </div>
        <div className="Line5-column1">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Wordpress</span>
        </div>
        <div className="Line5-column2">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span> Marketing</span>
        </div>
        <div className="Line5-column3">
        <img src={Plate} alt="Plate"/>
          {/* <input  type="checkbox" onChange={this.handleChange} /> */}
          <span>Data Entry</span>
        </div>
      </div>
      </>
    );
  }
}
export default Catagory;
