import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/feed/Feed';
import Widgets from './components/widget/Widgets';

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </React.Fragment>
  );
}

export default App;
