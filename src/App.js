import React, { } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.css';
import './detail.css';
import '../src/pages/notfound.css'
import './product.css'
import { render } from 'react-dom';

// TODO import file
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

import Home from '../src/pages/Home'
import NotFound from '../src/components/NotFound'
import List from './pages/List';
import Detail from './pages/Detail';
export default function App() {
  return (
    <Router>

      <React.Fragment>
          <Header />
        <Switch>
         <Route path="/detail-product/:id">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Product">
            <List />
          </Route>
          <Route>
            <NotFound />
          </Route>



        </Switch>

          <Footer />
      </React.Fragment>
    </Router>
  );
}
// export default App;

