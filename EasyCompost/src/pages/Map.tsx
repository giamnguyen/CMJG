import React, { useState, useRef, useCallback } from 'react';
import { 
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid, 
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonPage,
} from '@ionic/react';

import {earthOutline} from 'ionicons/icons';

import GeolocationButton from '../components/GeolocationButton';

import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

//images
import binMaker from '../images/bin-maker.svg';
import { makeLoadScriptUrl } from '@react-google-maps/api/dist/utils/make-load-script-url';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 33.777159, 
  lng: -84.397240
};

const iconPin = {
  path: '../images/bin-maker.svg',
  scale: 0.05, //to reduce the size of icons
};

interface IMarker {
  lat: number;
  lng: number;
  lbl: String;
}

const divStyle = {
  border: `1px solid #ccc`,
  padding: 2
}

const Map: React.FC = () => {
  // const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState<IMarker|null>(null);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const markers = [
    { lat: 33.777159, lng: -84.397240, lbl: "Bin A" },
    { lat: 33.776, lng: -84.399, lbl: "Bin B" },
    { lat: 33.774, lng: -84.394, lbl: "Bin C" },
  ]

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonIcon slot="start" icon={earthOutline} />
              Bins Map
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            <IonRow>
                <GeolocationButton />
            </IonRow>
            <IonRow>
            <LoadScript
              googleMapsApiKey=""
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                onLoad={onMapLoad}
              >
                {markers.map((marker) => (
                  <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    // icon={binMaker}
                    // icon={{
                    //   url: binMaker,
                    //   origin: new window.google.maps.Point(0, 0),
                    //   anchor: new window.google.maps.Point(15, 15),
                    //   scaledSize: new window.google.maps.Size(30, 30),
                    // }}
                    label={marker.lbl}
                    onClick={() => {
                      setSelected(marker);
                    }}
                  />
                ))}

                {selected ? (
                  <InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                      setSelected(null);
                    }}
                  >   
                    <div style={divStyle}>
                      <h1>{selected.lbl}</h1>
                      <h2>{selected.lat}, {selected.lng}</h2>
                    </div>
                  </InfoWindow>
                ) : null}
              </GoogleMap>
            </LoadScript>
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Map;
