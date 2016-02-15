import React from "react";
import {match} from "react-router";
//
import routes from "./routes"

export default function render(req, res){
  match({routes, location: req.url}, (error, redirectLocation, renderProps)=>{
    if (error) {
      res.status(500).send(error.message);
    }else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }else if (renderProps) {
      res.status(200).send("server render was success")
    }else {
      res.status(404).send("Server render was Not Found");
    }
  })
}
