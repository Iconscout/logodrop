import React, { Component } from 'react';
import SearchForm from '../containers/SearchForm'
import VisibleLogos from '../containers/VisibleLogos'
import IconscoutBanner from './IconscoutBanner'

const App = () => (
  <div className="appContainer">
    <SearchForm />
    <VisibleLogos />
    <IconscoutBanner />
  </div>
)


export default App