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
import PageNoteFound from '../page-not-found/page-note-found';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="nav-header">
          <Nav />
        </header>
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
              path={'/show-user'}
              component={User}
            />
            <Route
              path={'/show-room'}
              component={Room}
            />
            <Route
              path={'/add-data'}
              component={AddData}
            />
            <Route
              path={'/view-data'}
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
