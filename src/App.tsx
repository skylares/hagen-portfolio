import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import Piano from './components/Piano';
import Slam from './components/Lionfisher';
import resume from './documents/hagen_oneill_resume.pdf';

export default function App() {
  return (
    <div>  
    <Router>
      <div className="app">
      <nav>
        <h1>Hagen O'Neill</h1>
        <ul> 
          <li><Link to="/">Home</Link></li>
          <li><Link to="/slam">Slam</Link></li>
          <li><Link to="/piano">Piano</Link></li>
          <li><a href={resume}>Resume</a></li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slam" element={<Slam />} />
          <Route path="/piano" element={<Piano />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}



// export default function App() {
//   return (
//     <Router>
//       <div className="app">
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/slam">Slam</Link></li>
//           <li><Link to="/piano">Piano</Link></li>
//         </ul>

//         <hr />
        
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/slam" element={<Slam />} />
//           <Route path="/piano" element={<Piano />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }