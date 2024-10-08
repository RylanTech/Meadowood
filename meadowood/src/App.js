import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About';
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
import EditStaff from './Components/AdminPages/EditStaff';
import ListConnection from './Components/AdminPages/ListConnections';
import EditAbout from './Components/AdminPages/EditAbout';
import Staff from './Components/Pages/Staff';
import ViewEvents from './Components/AdminPages/ViewEvents';
import CreateEvent from './Components/AdminPages/CreateEvent';
import EditEvent from './Components/AdminPages/EditEvent';
import EventsSignUp from './Components/Pages/EventsSignUp';
import EventsSigningUp from './Components/Pages/EventsSigningUp';
import ViewEventPeople from './Components/AdminPages/ViewEventPeople';
import ManageClasses from './Components/AdminPages/ManageClasses';
import AddClasses from './Components/AdminPages/AddClass';
import EditClass from './Components/AdminPages/EditClasses';

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
          <Route path='/staff/:id' element={<Staff/>}/>
          <Route path='/eventssignup' element={<EventsSignUp/>}/>
          <Route path='/eventssignup/:id' element={<EventsSigningUp/>}/>

          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/live/edit' element={<EditLive/>}/>

          <Route path='/admin/clips/create/' element={<CreateClip/>}/>
          <Route path='/admin/clips/edit/:id' element={<EditClip/>}/>
          <Route path='/admin/clips/' element={<EditClips/>}/>

          <Route path='/admin/connections' element={<Connections/>}/>
          <Route path='/admin/connection/:id' element={<ListConnection/>}/>

          <Route path='/admin/staff' element={<AdminStaff/>}/>
          <Route path='/admin/staff/create' element={<CreateStaff/>}/>
          <Route path='/admin/staff/edit/:id' element={<EditStaff/>}/>

          <Route path='/admin/about/edit' element={<EditAbout/>}/>

          <Route path='/admin/events' element={<ViewEvents/>}/>
          <Route path='/admin/event/create' element={<CreateEvent/>}/>
          <Route path='/admin/event/edit/:id' element={<EditEvent/>}/>
          <Route path='/admin/event/view/:id' element={<ViewEventPeople/>}/>

          <Route path='/admin/manage-classes/' element={<ManageClasses/>}/>
          <Route path='/admin/manage-classes/add-class' element={<AddClasses/>}/>
          <Route path='/admin/manage-classes/edit/:id' element={<EditClass/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
