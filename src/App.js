import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
        <div>    
          <Menu />
            <Switch>
              <Route path ='/' exact component={Home} />
              <Route path = '/about' component={About}/>
              <Route path = '/contact' component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
