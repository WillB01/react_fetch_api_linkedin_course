import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SelectTopic from './News/SelectTopic';
import SideNews from './News/SideNews';
import SingleSide from './News/SingleSide';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    }
    
  }
  render() {
    return (
     <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper indigo lighten-4"> 
            <a href="/" className="bran-logo center">
              My Feed
            </a>
          </div>
        </nav>
      </div>
      <div className="row">
        <div className="col s8">
          <News />
        </div>
        <div className="col s4">
          <SideNews news={this.state.news3} />
        </div>
      </div>
     </div>
    );
  }
}

export default App;
