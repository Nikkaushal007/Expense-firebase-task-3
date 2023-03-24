import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import DummyScreen from './Components/Layout/DummyScreen';
import Navbar from './Components/Layout/Navbar'
import ProfileDetails from './Components/Layout/ProfileDetails';
import Login from './Components/Pages/Login';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Route>
      <Routes exact path='/profile'>
      <DummyScreen/>
      </Routes>
      <Route exact path='/details'>
      <ProfileDetails/>
      </Route>
      </Route>
      <Login/>
    </Fragment>
  );
}

export default App;