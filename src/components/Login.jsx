import React from 'react'
import PropTypes from 'prop-types'
import TicketList from './TicketList'
import TicketDetail from './TicketDetail'


function Login(props){
  let optionalSelectedTicketContent = null
  if (props.selectedTicket != null){
    optionalSelectedTicketContent =  <TicketDetail selectedTicket={props.selectedTicket[props.selectedTicket]} />;
  }
  return(
    <div>
      <h2>Login</h2>
      {optionalSelectedTicketContent}
      <TicketDetail/>
      <TicketList ticketList={props.ticketList} currentRouterPath={props.currentRouterPath} onTicketSelection={props.onTicketSelection} />

    </div>
  )
}

Login.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.object
}
export default Login
