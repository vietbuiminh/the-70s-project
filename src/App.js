import './App.css';
import { useState, useRef } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const mapContainerRef = useRef(null);

const App = () => {
  const mapContainerRef = useRef(null);
  const popupRef = useRef(new mapboxgl.Popup({ offset:15 }));
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default App;
