import React, { Component } from 'react'
import Error404 from './Error404'
import { HashRouter, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'moment'
import About from './About'
import Contact from './Contact'
import HomeBody from './HomeBody/HomeBody';
import Dashboard from './Dashboard/Dashboard';
import WishListDetails from './WishList/WishListDetails';
import CreateWishList from './WishList/CreateWishList';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';


class App extends Component {

  render() {
    return (
      <div className='container'>
        <HashRouter>
          <Switch>
            <Route exact path='/'  render={()=><HomeBody />} />
            <Route path='/locate' render={()=><Locate />} />
            <Route path='/about' render={()=><About />} />
            <Route path='/contact' render={()=><Contact />} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/wishlist/:id' component={WishListDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateWishList} />
            <Route component={Error404} />
          </Switch>
        </HashRouter>

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
          NavConstant{
            position: absolute;
            z-index: 999;
          }
        `}</style>
      </div>
    )
  }
}

export default App;
