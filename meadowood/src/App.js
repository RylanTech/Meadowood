import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
import Donate from './Components/Pages/Donate';
import Events from './Components/Pages/Events';
import Foodpantry from './Components/Pages/Foodpantry';
import Home from './Components/Home';
import Homepage from './Components/Pages/Homepage';
import Kids from './Components/Pages/Kids';
import Ladies from './Components/Pages/ladies';
import Mens from './Components/Pages/mens';
import Youngadults from './Components/Pages/Youngadults';
import Youth from './Components/Pages/Youth';
import Seniors from './Components/Pages/Seniors';
import Live from './Components/Pages/Live';
import Loginpage from './Components/AdminPages/Login';
import Admin from './Components/AdminPages/Admin';
import EditLive from './Components/AdminPages/EditLive';
import Clips from './Components/Pages/Clips';
import CreateClip from './Components/AdminPages/CreateClip';
import EditClip from './Components/AdminPages/EditClips';

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
          <Route path='/foodpantry' element={<Foodpantry/>} />
          <Route path='/donate' element={<Donate/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/mensgroup' element={<Mens/>}/>
          <Route path='/womansgroup' element={<Ladies/>}/>
          <Route path='/about' element={<About/>}/>
          {/* <Route path='/schedule' element={<Schedule/>}/> */}
          <Route path='/seniors' element={<Seniors/>}/>

          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/edit/live' element={<EditLive/>}/>

          <Route path='/admin/clips/create/' element={<CreateClip/>}/>
          <Route path='/admin/clips/' element={<EditClip/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
