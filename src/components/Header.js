import React from "react";
import ticketImage from "./../img/tickets.jpeg";


function Header(){
  return (
      <React.Fragment>
      <h1>Help Queue</h1>
      <img src={ticketImage} alt="image-of-tickets"/>
      </React.Fragment>
  );
}


export default Header;