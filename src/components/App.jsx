import React from 'react'
import Error404 from './Error404'
import { Switch, Route, withRouter } from 'react-router-dom'
import Moment from 'moment'
import Login from './Login'

import About from './About'
import Contact from './Contact'
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
        <Switch>
          <Route exact path='/'  render={()=><HomeBody />} />
          <Route path='/locate' render={()=><Locate />} />
          <Route path='/about' render={()=><About />} />
          <Route path='/contact' render={()=><Contact />} />
          <Route path='/login' render={(props)=><Login />} />
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
