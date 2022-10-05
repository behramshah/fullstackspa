import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Users from './components/users';
import AddUser from './components/adduser';
import EditUser from './components/edituser';
import DeleteUser from './components/deleteuser';

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
