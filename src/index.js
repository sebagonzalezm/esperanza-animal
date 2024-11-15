import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App'
import {CarruselFotos, Home} from './home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavNegro } from './allNav';
import Box from '@material-ui/core/Box';
import {Dashboard} from './Dashboard'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
); 