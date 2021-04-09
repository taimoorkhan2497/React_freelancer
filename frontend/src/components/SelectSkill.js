import React from "react";
import "./SelectSkil.css";
import Shape from "../assets/Shape.png";
import plus from "../assets/Group 3689.png";
// import Dropdown from '../dropdown/Dropdown'
class SelectSkill extends React.Component {
  render() {
    return (
      < >
        <div className="Text">Add your skills</div>
        <div className="Skills">
          <span>Select Skills</span>
          <a href="/">
            <img src={plus} alt="plus" className="plus" />
          </a>
        </div>
        <section>
        <div className="flex1" >
          <p>
            Php <img src={Shape} alt="" cross />
          </p>
        </div>
        <div className="flex2">
          <p>
            Bootstrape
            <img src={Shape} alt="" cross />
          </p>
        </div>
        <div className="flex3">
          <p>
            Azura
            <img src={Shape} alt="" cross />
          </p>
        </div>
      </section>
      </>
    );
  }
}
export default SelectSkill;
