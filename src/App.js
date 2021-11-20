import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import GalleryContainer from "./components/GalleryContainer";
import NotFound from "./components/NotFound";

class App extends React.Component {

  handleSubmit = (evt, history, searchInput ) => {
    evt.preventDefault();
    evt.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/search">
          <div className="container">
            <Route render={props => <Header handleSubmit={this.handleSubmit} history={props.history}/>}/>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/playa"/>}/>
              <Route path="/playa" render={() => <GalleryContainer searchTerm="playa"/>}/>
              <Route path="/desierto" render={() => <GalleryContainer searchTerm="desierto"/>}/>
              <Route path="/bosque" render={() => <GalleryContainer searchTerm="bosque"/>}/>
              <Route path="/montaña" render={() => <GalleryContainer searchTerm="montaña"/>}/>
              <Route path="/search/:searchInput" render={props => (<GalleryContainer searchTerm={props.match.params.searchInput}/>)}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )    
  }
};

export default App;