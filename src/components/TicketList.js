import React from 'react';
import Ticket from './Ticket';
import Proptypes from "prop-types";





function TicketList(props){
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket,index) =>
      <Ticket
        whenTicketIsClicked = {props.onTicket}
        names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        id={ticket.id}
        key={ticket} />
      )}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: Proptypes.array,
  onTicketSelection: Proptypes.func
    
  };


export default TicketList;
