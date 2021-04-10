import './App.css';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function App() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 15,
    longitude: 0,
    zoom: 1.5
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={viewport => {setViewport(viewport)}}
      mapStyle="mapbox://styles/vietbuiminh/cknb6oqro1jqj17o622t2j5su"
    />
  );
}

export default App;
