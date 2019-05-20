import React from 'react'
import Nav from './Nav'
import TicketList from './TicketList'
import NewTicketControl from './NewTicketControl'
import Error404 from './Error404'
import { Switch, Route, withRouter } from 'react-router-dom'
import Moment from 'moment'
import Login from './Login'
import Locate from './Locate'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import HomeBody from './HomeBody/HomeBody';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className='container'>
        <Nav />
        <Switch>
          <Route exact path='/'  render={()=><HomeBody />} />
          <Route path='/locate' render={()=><Locate />} />
          <Route path='/about' render={()=><NewTicketControl />} />
          <Route path='/contact' render={()=><NewTicketForm />} />
          <Route path='/login' render={(props)=><Login ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname}
            onTicketSelection={this.handleChangingSelectedTicket}
            selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>

        <style global jsx>{`
          *{
            margin: 0;
            padding: 0;
          }
        `}</style>

        <style jsx>{`
          .container{
            width: 100%;
            height: 100vh;
            font-family: Arial, sans-serif;
          }
        `}</style>
      </div>
    )
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList
  };
};

export default withRouter(connect(mapStateToProps)(App))
