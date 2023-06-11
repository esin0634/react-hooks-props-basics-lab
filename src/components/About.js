import React from "react";
import Links from "./Links";

function Item({bio}){
  if(bio){
    return <p> {bio} </p>
  }else{
    return null
  }
}
function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      <Item bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
