import React, { useState } from 'react';
import { Redirect, Link, Route } from 'react-router-dom';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonAlert, IonRouterLink } from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { getGlobalUsername } from './Login';
import ConfirmDropOff from './ConfirmDropOff';
import Dialog1 from './Dialog1';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const username = getGlobalUsername();
  const [showAlert1, setShowAlert1] = useState(false);

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Drop-off Scan</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
        <Dialog1  
          header={'Wait!'}
          subHeader={'Before you drop off, make sure\nall your products are compostable!'}
          buttonText1={'I\'m not sure'}
          buttonText2={'Yep, all good!'}
          show={showAlert1}
          setShow={() => setShowAlert1(false)}
        />

        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo.base64 ?? photo.webviewPath} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => {
              setShowAlert1(true);
              // takePhoto();
            }}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
