import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddUser from './components/adduser';
import DeleteUser from './components/deleteuser';
import EditUser from './components/edituser';
import Navigation from './components/navigation';
import Users from './components/users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Users/>}/>
        <Route index path='adduser' element={<AddUser/>}/>
        <Route index path='edituser' element={<EditUser/>}/>
        <Route index path='deleteuser' element={<DeleteUser/>}/>
      </Route>
    </Routes>
  );
}

export default App;
