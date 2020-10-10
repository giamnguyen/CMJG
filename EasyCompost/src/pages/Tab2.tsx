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
 
    </IonPage>
  );
};

export default Tab2;
