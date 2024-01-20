import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Styles/style.css"
import { UserProvider } from './Contexts/UserContext';
import { LiveProvider } from './Contexts/LiveContext';
import { ClipProvider } from './Contexts/ClipContext';
import { HeaderProvider } from './Contexts/HeaderContext';
// import { EventProvider } from './Contexts/EventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HeaderProvider>
   <ClipProvider>
      <LiveProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LiveProvider>
    </ClipProvider>
   </HeaderProvider>
  </React.StrictMode>
);