import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Podcast from './components/Podcast/Podcast';
import  Home1 from './components/Home1/Home1';
import aboutu from './components/aboutpage/aboutu';
import contact from './components/contactpage/contact';
class Routes extends React.Component {
  render() {
    const { podcasts, deletePodcast } = this.props
    return (
      <Switch>
      
        <Route exact path="/podcast/:id" component={Podcast} />
        <Route exact path="/" component={Home1} />
        <Route exact path="/aboutu" component={aboutu} />
        <Route exact path="/contact" component={contact} />
        <Route exact path="/hom" render={() => {
          return <Home podcasts={podcasts} deletePodcast={deletePodcast} />
        }} />

        {/* <Route path="/register" render={() => {
          return <Register register={this.props.register} authentication={authentication} />
        }} /> */}

        {/* <Route path="/login" render={() => {
          return <Login login={this.props.login} authentication={authentication} />
        }} /> */}

        {/* <Route path="/search" /> */}

       
      </Switch>
    )
  }
}

export default Routes;

