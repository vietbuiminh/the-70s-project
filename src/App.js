import './App.css';
import { useState, useRef } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import * as eventsData from './data/70s-war-events.json';
// import mapboxgl from 'mapbox-gl';


// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
// const mapContainerRef = useRef(null);

// const App = () => {
//   const mapContainerRef = useRef(null);
//   const popupRef = useRef(new mapboxgl.Popup({ offset:15 }));
//   // initialize map when component mounts
//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current,
//       // See style options here: https://docs.mapbox.com/api/maps/#styles
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [-104.9876, 39.7405],
//       zoom: 12.5,
//     });

//     // add navigation control (the +/- zoom buttons)
//     map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

//     // clean up on unmount
//     return () => map.remove();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   return <div className="map-container" ref={mapContainerRef} />;
// };

// Comment out above because the code is not working -Try to fix it Zoheb
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
      // Changed the map to the cold war theme map
      mapStyle="mapbox://styles/vietbuiminh/cknb5qncl12ap17lp7dfwujyo"
    >
      {eventsData.years.map((event) => (
        // Marker getting data from JSON file in data folder
        <Marker 
          key={event.id} 
          longitude={event.coordinates[1]}
          latitude={event.coordinates[0]}
        >
          <button class="button-style">
            <img src="conflict.png" alt="war conflict symbol"/>
          </button>
        </Marker>
      ))}
    </ReactMapGL>
  );
}

export default App;
