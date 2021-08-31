import React from "react";
// used Plain router instead of BrowserRouter
//import { BrowserRouter, Route } from "react-router-dom";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className='ui container'>
      {/*<BrowserRouter history={history}>*/}
      <Router history={history}>
        <div>
          <Header />
          {/** Switch will show only the first route that found
           * f.e. if found /streams/new it will be shown but
           * if that is not found it tries /stream/:id
           */}
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/new' exact component={StreamCreate} />
            <Route path='/streams/edit/:id' exact component={StreamEdit} />
            <Route path='/streams/delete/:id' exact component={StreamDelete} />
            <Route path='/streams/:id' exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
      {/*</BrowserRouter>*/}
    </div>
  );
};

export default App;
