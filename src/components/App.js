import React, { Component } from 'react';
import SearchForm from '../containers/SearchForm'
import VisibleLogos from '../containers/VisibleLogos'
import LogodropBanner from './LogodropBanner'

const App = () => (
  <div className="appContainer">
    <SearchForm />
    <VisibleLogos />
    <LogodropBanner />
  </div>
)


export default App