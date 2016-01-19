import React, {Component, PropTypes} from "react";

import "../../assets/sm/css/sm.css";
import "../../assets/base.style.css"

export default class Application extends Component {

  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

Application.propTypes = {
  children: PropTypes.node
}
