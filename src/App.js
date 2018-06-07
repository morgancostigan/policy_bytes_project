import React from 'react';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/Admin/LoginPage/LoginPage';
import RegisterModal from './components/Admin/RegisterModal/RegisterModal';
import LandingPage from './components/LandingPage/LandingPage.jsx'
import TopicPage from './components/TopicPage/TopicPage.jsx'
import TopicManage from './components/Admin/TopicManage/TopicManage.jsx'
import TopicEdit from './components/Admin/TopicEdit/TopicEdit.jsx';
// import CommentManage from './components/Admin/CommentManage/CommentManage.jsx';
import Images from './components/Images/Images.jsx';
import Nav from './components/Nav/Nav.jsx'

import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={LandingPage}
          />
          <Redirect exact from="/#/topicPage%0A" to="/topicPage"/>
          <Route
            path="/topicPage"
            component={TopicPage}
          />
          <Route
            path="/admin"
            component={TopicManage}
          />
          {/* <Route
            path="/commentManage"
            component={CommentManage}
          /> */}
          <Route
            path="/topicEdit/:id?"  //<-- optional route param is id of topic to populate edit
            component={TopicEdit}
          />
          <Route
            path="/Images"
            component={Images}
          />

  {/* predefined routes */}
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterModal}
          />
          {/* OTHERWISE (no path!) */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>

    </Router>
  </div>
);

export default App;
