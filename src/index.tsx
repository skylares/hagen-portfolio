import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './styles.css';

//! remove
import resume from './documents/hagen_oneill_resume.pdf';
//!

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    //! fix
     <embed className="temp--resume" src={resume}/>
    {/* <App /> */}
    //!
  </StrictMode>
);