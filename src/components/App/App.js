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
    user_id: '',
    user_name: '',
    room_id: '',
    room_name: '',
    rooms: [],
  }

  handleDeleteRoom = (roomId) => {
    fetch(`http://localhost:8000/api/room-data/${roomId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // If call is successful
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(window.location.reload())
  };

  updateLoggedUser = user => {
    this.setState({
      user_id: user.user_id,
      user_name: user.user_name
    });
  };

  updateUserRooms = userRooms => {
    this.setState({
      rooms: userRooms
    });
  };

  updateRoom = room => {
    this.setState({
      room_id: room.room_id,
      room_name: room.room_name
    });
  };


  render() {
    const value = {

      user_id: this.state.user_id,
      user_name: this.state.user_name,
      room_id: this.state.room_id,
      room_name: this.state.room_name,
      rooms: this.state.rooms,

      updateLoggedUser: this.updateLoggedUser,
      updateUserRooms: this.updateUserRooms,
      updateRoom: this.updateRoom,
      deleteRoom: this.handleDeleteRoom
    };
    return (
      <UserContext.Provider value={value}>
        <div className="App">
          <header id="nav-header">
            <Nav />
          </header>
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
