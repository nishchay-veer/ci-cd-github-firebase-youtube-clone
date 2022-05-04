import Header from './Header';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import RecommendingVideos from './RecommendingVideos';
import SearchPage from './SearchPage';
// import { Switch } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/search">
            <div className="header">
              <Header />

            </div>
            <div className="section">
              <Sidebar />
              {/* <RecommendingVideos /> */}
              <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className="header">
              <Header />

            </div>
            <div className="section">
              <Sidebar />
              <RecommendingVideos />
            </div>
          </Route>
        </Switch>
      </Router>

      {/* <div className="section">
        <Sidebar />
        <RecommendingVideos />
      </div> */}
    </div>


  );
}

export default App;
