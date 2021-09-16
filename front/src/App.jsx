import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarSignup from "./components/NavbarSignup"
import Navigation from "./components/Navigation"
import HeaderSignup from "./components/HeaderSignup"
import Header from "./components/Header"
import Main from "./components/Main"
import MainSignup from "./components/MainSignup/Index"
import Bottom from "./components/Bottom"
import PrivacyPage from "./components/PrivacyPage";
import TermsPage from './components/TermsPage';
import './App.css'
import { InitializeFirebase } from './utils/FirebaseConnector'
import Browse from "./pages/BrowsePage"

export default class App extends Component {
  render() {
    InitializeFirebase();
    return (
      <div>


<Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/termsofservice">
              <TermsPage />
          </Route>

          <Route path="/privacy">
              <PrivacyPage />
          </Route>

          <Route path="/sign-in">
            <div>
              <Navigation/>
              <Header/>
              <Main/>
              <Bottom/>
            </div>
            
          </Route>

          <Route path="/sign-up">
            <div>
              <Navigation/>
              <NavbarSignup/>
              <MainSignup/>
              <Bottom/>
            </div>
            
          </Route>

          <Route path="/">
            <div>
              <Navigation/>
              <Header/>
              <Main/>
              <Bottom/>
            </div>
            
          </Route>

          <Route path="/browse-page">
            <div>
              
            </div>
          </Route>
          
        </Switch>
      </div>
    </Router>

      </div>
    )
  }
}
