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
import './Tab1.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <iframe
        width="600"
        height="450"
        src="https://www.google.com/maps/embed/v1/place?key=ADDKEYHERE
          &q=Georgia+Tech+Student+Center">
      </iframe>
    </IonPage>
  );
};

export default Map;
