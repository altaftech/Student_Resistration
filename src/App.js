// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

// import React, { Component } from 'react'
// import AddData from './AddData';
// import DisplayData from './DisplayData';

// export default class App extends Component {
//   render() {
//     return (
//       <>
//         <Router>
//           <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
//             <div className="container-fluid">
//               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff7b00"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
//               <Link to={'/'} className="navbar-brand">StudentAPI</Link>
//               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                   <li className="nav-item">
//                     <Link to={'/home'} className="nav-link active" aria-current="page">AddData</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to={'/display'} className="nav-link">DisplayData</Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//           <Routes>
//             <Route path='/' element={<AddData />} />
//             <Route path='/home' element={<AddData />} />
//             <Route path='/display' element={<DisplayData />} />
//           </Routes>
//         </Router>
//       </>
//     )
//   }
// }

import React from 'react'
import AddData from './AddData';
import DisplayData from './DisplayData';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff7b00"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
            <Link to={'/'} className="navbar-brand">StudentAPI</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/home'} className="nav-link active" aria-current="page">AddData</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/display'} className="nav-link">DisplayData</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<AddData />} />
          <Route path='/home' element={<AddData />} />
          <Route path='/display' element={<DisplayData />} />
        </Routes>
      </Router>
    </>
  )
}
