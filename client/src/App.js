import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import MyPodcasts from "./pages/Mypodcasts.js";
import Categories from "./pages/Categories";
import Newpodcasts from "./pages/Newpodcasts";
import Podcast from "./pages/Podcast";
import PodcastEpisodes from "./pages/PodcastEpisodes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./components/DonateForm";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51JMB6bDPHWsAO5mxsqLm4r1wf1PmFLNLEyE6bb0tW2G62pREk1aXCle8xQSG3423V83oCf3lAZ4u1Nl26UWKMTzW00LUbRedwo");

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <Router>
          <div>
            <Header />
            <Nav />
            <Elements stripe={stripePromise}>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/mypodcasts" component={MyPodcasts} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/newpodcasts" component={Newpodcasts} />
              <Route exact path="/podcastepisodes" component={PodcastEpisodes} />
              <Route exact path="/podcast" component={Podcast} />
              <Route exact path="/donate" component={Donate} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Elements>
          </div>
        </Router>
      </div>
      </ApolloProvider>
    );
  }
}
