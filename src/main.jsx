import React, { useState  } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import Dashbord from './pages/Dashbord.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Layout />
//   </React.StrictMode>,
// )

export const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Layout />);
// root.render(<Dashbord />);




