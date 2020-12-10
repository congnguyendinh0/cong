import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Jokes from './Jokes';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Motion from './Motion'; 
import Joke from './Joke';
import Logo from './Logo';
import Quotes from './Quotes';
import TodoList from './TodoList'


function App() {
  return (
    <Router>
          <div className="App">
          <Nav/>
            <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/jokes" exact component={Jokes} />
                  <Route path="/jokes/:id"  component={Joke} />
                  <Route path="/motion" component={Motion} />
                  <Route path="/quotes" component={Quotes} />
                  <Route path="/todolist" component={TodoList} />
            </Switch>
          </div>
    </Router>

  );
}

const Home = () =>(

  <div>
    
    <h1>Hi Mark</h1>
    <Logo/>
</div>
  
  
)

export default App;
