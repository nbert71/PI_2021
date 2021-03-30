// App.js

import React from 'react'
import Navigation from './Navigation/Navigation'
import Store from './Store/configureStore'
import {Provider} from "react-redux";

export default class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
          <Navigation/>
        </Provider>
    )
  }
}