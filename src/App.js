import './App.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMapGL from "react-map-gl";
import React, { useState } from "react";


function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100nh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          
        </Navbar.Brand>
      </Navbar>
     
      <ReactMapGL {...viewport}>
      </ReactMapGL>
    </div>
  );
}

export default App;
