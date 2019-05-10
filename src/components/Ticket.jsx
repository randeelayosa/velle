import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


function Ticket(props){
  const clientInformation =

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

    <div>
      <h3> {props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>

  if(props.currentRouterPath === '/login') {
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
        {clientInformation}
      </div>
    )
  } else {
    return (
      <div>
        {clientInformation}
      </div>
    )
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
}

export default connect()(Ticket);
