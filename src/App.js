import './App.css';
import Register from './pages/Register';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import UserList from './pages/UserList';
import UpdateUser from './pages/UpdateUser';
import AdminRoute from './pages/AdminRoute';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

axios.defaults.baseURL = "https://reactexpressserver1.herokuapp.com/";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={loggedInUser} onLogout={setLoggedInUser}/>
        <Routes>
          <Route path='/' element={<Login onLogin={setLoggedInUser} />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/users'>
            <Route index element={
              <AdminRoute user={loggedInUser}>
                <UserList />
              </AdminRoute>
            }>
            </Route>
            <Route path=':id' element={<UpdateUser />}></Route> 
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
