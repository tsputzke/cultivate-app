import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Landing from '../Landing/Landing';
import About from '../About/About'
import Registration from '../Registration/Registration'
import User from '../User/User';
import Room from '../Room/Room';
import AddData from '../Add-data/Add-data'
import ViewData from '../View-data/View-data'
import PageNoteFound from '../page-not-found/page-note-found'
import '../App/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route
              exact
              path={'/'}
              component={Landing}
            />
            <Route
              path={'/about'}
              component={About}
            />
            <Route
              path={'/registration'}
              component={Registration}
            />
            <Route
              exact
              path={'/user/:userid'}
              component={User}
            />
            <Route
              exact
              path={'/user/:userid/room/:roomid'}
              component={Room}
            />
            <Route
              path={'/user/:userid/room/:roomid/add-data'}
              component={AddData}
            />
            <Route
              path={'/user/:userid/room/:roomid/view-data'}
              component={ViewData}
            />
            <Route
              component={PageNoteFound}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
