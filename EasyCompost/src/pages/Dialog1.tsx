import React from 'react';
import 
{ 
  IonContent, 
  IonPopover, 
  IonCard, 
  IonCardTitle, 
  IonCardSubtitle,
  IonCardHeader, 
  IonCardContent, 
  IonFooter, 
  IonButton, IonicSafeString
} from '@ionic/react';
import './Tab1.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';


interface ModalProps {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  buttonText1?: string,
  buttonText2?: string,
  show: boolean,
  setShow: Function
}

const Dialog1: React.FC<ModalProps> = (props) => {
  var { header, subHeader, message, buttonText1, buttonText2, show, setShow } = props;
  const { photos, takePhoto } = usePhotoGallery();
  
  return (
  <IonPopover 
    cssClass='my-custom-class'
    isOpen={show}
    onDidDismiss={() => setShow(false)}
    >
      <IonContent class="ion-text-center modal-content">
          <IonCard>
              <IonCardHeader>
                  <IonCardTitle> {header} </IonCardTitle>
                  <IonCardSubtitle className="ion-text-wrap"> {subHeader} </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent className="ion-text-wrap"> 
                {message} 
              </IonCardContent>
          </IonCard>
          <IonFooter>
            <IonButton color="secondary" href="/tabs/tab1"> {buttonText1} </IonButton>
            <IonButton color="primary" onClick={() => {
              takePhoto();
              setShow(false);
              }}> 
              {buttonText2} 
            </IonButton>
          </IonFooter>
      </IonContent>
  </IonPopover>
);
};

export default Dialog1;
