import React, { Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './CSS/style.css';
import Navbar from './components/navbar';
import Home from './components/home';
// import Team from './components/team';
// import Skills from './components/skills';
// import Contacts from './components/contacts';
// import MembersContainer from './components/membersContainer';



class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="App">
        <Navbar title="WelCome to My Web Page"/>
        <Route exact path="/" render={() => <Home title="Learning Never Ends..." />} />
        {/* <Route path="/team" render={() => <members title="My Best Team Members! "/>} />
        <Route path="/skills" render={() => <Skills />} />
        <Route path="/contacts" render={() => <Contacts />} /> */}
        {/* <Route path="/team" render={() => <members title="My Best Team Members! "/>} /> */}
       {/* Use component/render depend upon props */}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
