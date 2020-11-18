import React, { useState, useRef, useCallback } from 'react';
import { 
  IonHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonGrid
} from '@ionic/react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large" class="title"> EASYCOMPOST </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonGrid>
      <IonCard>
          <IonCardHeader>
            <IonCardTitle class="GraphTitle">BINS NEAR YOU</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <iframe
              width="600"
              height="450"
              src="https://www.google.com/maps/embed/v1/place?key=PUTKEYHERE
                &q=Georgia+Tech+Student+Center">
            </iframe>
          </IonCardContent>
      </IonCard>
      </IonGrid>
    </IonPage>
  );
};

export default Map;
