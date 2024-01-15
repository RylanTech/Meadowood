import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Styles/style.css"
import { UserProvider } from './Contexts/UserContext';
import { LiveProvider } from './Contexts/LiveContext';
import { ClipProvider } from './Contexts/ClipContext';
// import { EventProvider } from './Contexts/EventContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClipProvider>
      <LiveProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </LiveProvider>
    </ClipProvider>
  </React.StrictMode>
);