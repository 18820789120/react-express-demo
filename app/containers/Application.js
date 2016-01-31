import React, {Component, PropTypes} from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import "../../assets/sm/css/sm.css";
import "../../assets/base.style.css"
import "../../assets/react.route.transition.css"

export default class Application extends Component {

  render(){
    const { pathname } = this.props.location;
    const key = pathname.split('/')[1] || 'root'
    console.log("Application render:", this.props.children);
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


// <ReactCSSTransitionGroup
//   component="div" transitionName="swap"
//   transitionEnterTimeout={500} transitionLeaveTimeout={500}
// >
//   {React.cloneElement(this.props.children || <div />, { key: key })}
// </ReactCSSTransitionGroup>
