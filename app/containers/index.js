import React, {Component} from "react";
import {Link} from "react-router";

import BackHeader from "../components/BackHeader"

const style = {
  display: "block"
}

export default class Index extends Component {
  render(){
    return(
      <div className="page" style={style}>
        <BackHeader title="Application title" />
        <div className="content">
          <Link to="/signin">sign in</Link>
        </div>
      </div>
    );
  }
}
