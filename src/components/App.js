import React, { Component } from 'react';
import SearchForm from '../containers/SearchForm'
import VisibleLogos from '../containers/VisibleLogos'
// import VisibleLogos from './LogoList'

const App = () => (
  <div className="appContainer">
    <SearchForm />
    <VisibleLogos />
  </div>
)


export default App