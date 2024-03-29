import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

const App = () => {
  return (
  <>
    <StatusBar 
      hidden
      translucent 
      barStyle='light-content' 
    />
    <Home />
  </>
  )
}

export default App;