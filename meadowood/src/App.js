import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Donate from './Components/Pages/Donate';
import Events from './Components/Pages/Events';
import Foodpantry from './Components/Pages/Foodpantry';
import Home from './Components/Home';
import Homepage from './Components/Pages/Homepage';
import Kids from './Components/Pages/Kids';
import Youngadults from './Components/Pages/Youngadults';
import Youth from './Components/Pages/Youth';
import Seniors from './Components/Pages/Seniors';
import Live from './Components/Pages/Live';
import Loginpage from './Components/AdminPages/Login';
import Admin from './Components/AdminPages/Admin';
import EditLive from './Components/AdminPages/EditLive';
import Clips from './Components/Pages/Clips';
import CreateClip from './Components/AdminPages/CreateClip';
import EditClips from './Components/AdminPages/EditClips';
import EditClip from './Components/AdminPages/EditClip';
import Connect from './Components/Pages/Connect';
import Connections from './Components/AdminPages/Connections';
import Classes from './Components/Pages/Classes';
import Ultimate from './Components/Pages/Ultimate';
import AdminStaff from './Components/AdminPages/Staff';
import CreateStaff from './Components/AdminPages/CreateStaff';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/live' element={<Live/>}/>
          <Route path='/clips' element={<Clips/>}/>
          {/* <Route path='/ministries' element={<Ministries/>} /> */}
          <Route path='/kids' element={<Kids/>} />
          <Route path='/youth' element={<Youth/>} />
          <Route path='/youngadults' element={<Youngadults/>} />
          <Route path='/ultimate' element={<Ultimate/>}/>
          <Route path='/foodpantry' element={<Foodpantry/>} />
          {/* <Route path='/donate' element={<Donate/>} /> */}
          <Route path='/connect' element={<Connect/>}/>
          <Route path='/events' element={<Events/>} />
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/schedule' element={<Schedule/>}/> */}
          <Route path='/youngatheart' element={<Seniors/>}/>
          <Route path='/classes' element={<Classes/>}/>

          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/live/edit' element={<EditLive/>}/>

          <Route path='/admin/clips/create/' element={<CreateClip/>}/>
          <Route path='/admin/clips/edit/:id' element={<EditClip/>}/>
          <Route path='/admin/clips/' element={<EditClips/>}/>

          <Route path='/admin/connections' element={<Connections/>}/>

          <Route path='/admin/staff' element={<AdminStaff/>}/>
          <Route path='/admin/staff/create' element={<CreateStaff/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
