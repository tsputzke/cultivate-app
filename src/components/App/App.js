import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import About from '../About/About';
import Registration from '../Registration/Registration';
import User from '../User/User';
import Room from '../Room/Room';
import AddData from '../Add-data/Add-data';
import ViewData from '../View-data/View-data';
import PageNotFound from '../Page-Not-Found/Page-Not-Found';
import UserContext from '../../context/user-context'
import PrivateRoute from '../../utils/PrivateOnlyRoute'
import PublicOnlyRoute from '../../utils/PublicOnlyRoute'
import TokenService from '../../services/token-service'

class App extends Component {

  state = {
    isLoggedIn: window.sessionStorage.getItem('isLoggedIn')
  }

  // Toggle state true/false. Nav is conditionally rendered (below, in the return) if true.
  handleToggleState = () => {
    const currentState = this.state.isLoggedIn
    this.setState({ isLoggedIn: !currentState})
  }

  // Handle room delete
  handleDeleteRoom = (roomId) => {
    fetch(`http://localhost:8000/api/rooms/${roomId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // If call is successful
      .then(response => {
        if (!response.ok) {
          // get the error message from the response,
          return response.json().then(error => {
            // then throw it
            throw error
          })
        }
          return({message: 'delete successful'});
      })
      .then(window.location.reload())
  }

  // Handle data delete for a given date
  handleDeleteByDate = (room_data_id) => {
    fetch(`http://localhost:8000/api/room-data/${room_data_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // If call is successful
      .then(response => {
        if (!response.ok) {
          // get the error message from the response,
          return response.json().then(error => {
            // then throw it
            throw error
          })
        }
          return({message: 'delete successful'});
      })
      .then(window.location.reload())
  } 

  render() {
    const value = {
      deleteRoom: this.handleDeleteRoom,
      deleteByDate: this.handleDeleteByDate,
      toggleState: this.handleToggleState
    };

    // If user is logged in
    if (TokenService.hasAuthToken()) {
      // Read the JWT, and queue a timeout just before the token expires.  
      TokenService.queueCallbackBeforeExpiry()
    }

    return (
      <UserContext.Provider value={value}>
        <div className="App">
          {(this.state.isLoggedIn) &&
            <header id="nav-header">
              <Nav />
            </header>
          }
          <main>
            <Switch>
              <PublicOnlyRoute
                exact
                path={'/'}
                component={Landing}
              />
              <Route
                exact
                path={'/about'}
                component={About}
              />
              <PublicOnlyRoute
                exact
                path={'/registration'}
                component={Registration}
              />
              <PrivateRoute
                exact
                path={'/show-user'}
                component={User}
              />
              <PrivateRoute
                exact
                path={'/show-room'}
                component={Room}
              />
              <PrivateRoute
                exact
                path={'/add-data'}
                component={AddData}
              />
              <PrivateRoute
                exact
                path={'/view-data'}
                component={ViewData}
              />
              <Route
                component={PageNotFound}
              />
            </Switch>
          </main>
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
