import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import resume from './documents/hagen_oneill_resume.pdf';

export default function App() {
  return (
    <embed className="temp--resume" src={resume}/>
  );
}




// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Home from './components/Home';
// import Piano from './components/Piano';
// import Lionfisher from './components/Lionfisher';
// import Professional from './components/Professional';
// import Skeetshooter from './components/Skeetshooter';
// import Startup from './components/Startup';
// import resume from './documents/hagen_oneill_resume.pdf';

// export default function App() {
//   return (
//     <div>  
//     <Router>
//       <div className="app">
//       <nav className="app--nav">
//         <ul className="app--nav-ul"> 
//           <li className="app--nav-li -home"><Link to="/">Hagen O'Neill</Link></li>
//           <li className="app--nav-li"><Link to="/projects/lionfish-hunter">Lionfish Hunter</Link></li>
//           <li className="app--nav-li"><Link to="/projects/piano-hero">Piano Hero</Link></li>
//           <li className="app--nav-li"><Link to="/projects/automated-skeet-shooter">Automated Skeet Shooter</Link></li>
//           <li className="app--nav-li"><Link to="/experience/start-up">Start-up</Link></li>
//           <li className="app--nav-li"><Link to="/experience/professional">Professional Experience</Link></li>
//           <li className="app--nav-li"><a href={resume}>Resume</a></li>
//         </ul>
//       </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/projects/lionfish-hunter" element={<Lionfisher />} />
//           <Route path="/projects/piano-hero" element={<Piano />} />
//           <Route path="/projects/automated-skeet-shooter" element={<Skeetshooter />} />
//           <Route path="/experience/start-up" element={<Startup />} />
//           <Route path="/experience/professional" element={<Professional />} />
//         </Routes>
//       </div>
//     </Router>
//     </div>
//   );
// }