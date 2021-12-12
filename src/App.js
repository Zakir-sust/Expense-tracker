import { BrowserRouter as Router, Route} from 'react-router-dom'
import React from 'react'
import Addreordform from './components/Addreordform'
import Dateprinter from './components/Dateprinter'
import Header from './components/Header'
import Home from './components/Home'
import Loginform from './components/Loginform'
import RecordLayout from './components/RecordLayout'
import Recordlist from './components/Recordlist'
import Signupform from './components/Signupform'
import Querylist from './components/Querylist'
import Queryform from './components/Queryform'
import TempQuerylist from './components/TempQueryList.js'
import './App.css'
function App() {
  
  return (
    <div className="App">
    <Router>
      <Header/>
        <Route
          exact
          path="/" component={Home} 
        />

        <Route
          path="/home" component={Home} 
        />
        <Route
          path="/signup" component={Signupform} 
        />

        <Route
          path="/login" component={Loginform} 
        />

        <Route
          path="/header" component={Header} 
        />

        <Route
          path="/list" component={Recordlist} 
        />

        <Route
          path="/layout" component={RecordLayout} 
        />
        <Route
          path="/dateprint" component={Dateprinter} 
        />

        <Route
          path="/addrecord" component={Addreordform} 
        />
        <Route
          path="/queryform" component={Queryform} 
        />
        <Route
          path="/querylist" component={TempQuerylist} 
        />

    </Router>
    </div>
  );
}

export default App;
