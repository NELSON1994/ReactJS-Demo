import Navbar from './Navbar';
import Home from './Nome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFoud from './NotFound';

function App() {
  const title = 'I love nelson';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">

          {/* <h2>{title}</h2> */}
          {/* ONLY one url shows at atime */}
          <Switch>
            <Route path="/create">    <Create /></Route>
            <Route exact path="/">    <Home /></Route>
            {/* route param */}
            <Route path="/blogs/:id">    <BlogDetails /></Route>   
            <Route path=""><NotFoud>
              </NotFoud>    <NotFoud /></Route>   
          </Switch>

        </div>

      </div>

    </Router>

  );
}

export default App;
