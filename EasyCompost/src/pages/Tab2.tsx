import React, { useState } from 'react';
import { camera, trash, close } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonAlert } from '@ionic/react';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { getGlobalUsername } from './Login';

const Tab2: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const username = getGlobalUsername();
  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(false);

  return (
    <IonPage>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Drop-off Scan</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Wait!'}
          subHeader={'Before you drop off, make sure\nall your products are compostable!'}
          buttons={['I\'m not\nsure', 'Yep, all\ngood!']}
        />
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Congrats!'}
          subHeader={'You just completed a drop off! Thanks for\nhelping the Earth.\n'}
          message={'+150 PTS'}
          buttons={['Thanks!']}
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
            takePhoto();
            setShowAlert2(true)}}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
