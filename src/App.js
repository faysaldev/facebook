import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Widgets from './components/Widgets';
import Sidbar from './Sidbar';
import Slider from './Slider';
import Comment from './components/Comment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/Profile';
import Login from './components/Login';
import { useStateValue } from './StateProvider'


function App() {

  const [{ user }, dispatch] =useStateValue();

  return ( // Bem Name convention
    <Router>
    <div className="app">
     {!user? <Login /> :(
       <>
       <Header />

       <div className="app__body">
  
  
  
  
         
        <Switch>
  
  
          <Route path="/comments/:postId">
          <Sidbar />
            <Comment />
            <Widgets />
          </Route>
  
          <Router path="/profile">
            <Profile />
          </Router>
  
          <Route path="/">
          <Sidbar />
            <Feed />
            <Widgets />
          </Route>
  
        </Switch>
  
  
  
  
  
  
       </div>
       </>
     )}

    </div>
      </Router>
  );
}

export default App;
