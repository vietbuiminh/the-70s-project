

import { useState } from 'react';
import ReactMapGL, { Marker, Popup , FlyToInterpolator } from 'react-map-gl';
import * as eventsData from './data/70s-war-events.json';





function App() {
  const [viewport, setViewport] = useState({
    width: '99vw',
    height: '98vh',
    latitude: 15,
    longitude: 0,
    zoom: 2,
    pitch: 40
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  
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
          <button className="button-style" onClick={e => {
            e.preventDefault();
            setSelectedEvent(event);
            setViewport({
              ...viewport,
              longitude: event.coordinates[1],
              latitude: event.coordinates[0],
              zoom: 5,
              transitionDuration: 500,
              transitionInterpolator: new FlyToInterpolator(),
            });
          }}>
            <img src="conflict.png" alt="war conflict symbol"/>
          </button>
        </Marker>
      ))}
      
      {selectedEvent ? (
        // this is for the pop up window 
        // need to make a function to search for the summary of the wikipedia
        
        <Popup className="popup-box"
          longitude={selectedEvent.coordinates[1]} 
          latitude={selectedEvent.coordinates[0]}
         
          onClose={() => {
            setViewport({
              ...viewport,
              zoom: 2,
              transitionDuration: 500,
              transitionInterpolator: new FlyToInterpolator(),
            });
            setSelectedEvent(null)
          }}
        >
          <div className="box-container"> 
            <h2 className="event-title">💥{selectedEvent.name}</h2>
            <h3 className="period-title">Period ({selectedEvent.start} - {selectedEvent.end})</h3>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
    
  );
}


export default App;
