import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import Routes from './routes'
import axios from 'axios'


function App(props) {

  useEffect(() => {
    axios.post('http://localhost:2020/api/v1/signin', {
      email: 'i201520719@cibertec.edu.pe',
      password: 'pancho123'
    })
    .then(rs => console.log('rs', rs))
    .catch(e => console.log('err', e))
  }, [])
  console.log('propspropspropsprops', props)
  return (
    <Provider store={props.store}>
      <Routes />
    </Provider>
  );
}

export default App;
