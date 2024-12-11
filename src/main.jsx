import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/*import './index.css'*/}
import App from './App.jsx'
import Principal from './Principal.jsx'
import Menu from './Menu.jsx'
import Bolivia from './Bolivia.jsx'

import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='pr'>
      <Menu></Menu>
    </div>
  </BrowserRouter>,
)
