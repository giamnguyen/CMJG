import React, { useState, useRef } from 'react';
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
  IonButton, IonIcon, IonicSafeString
} from '@ionic/react';
import { locationOutline, people } from 'ionicons/icons'
import './Tab1.css';
import { getGlobalUsername } from './Login';
import { toast } from '../toast';
import { Link } from 'react-router-dom';


interface ModalProps {
  header?: string;
  subHeader?: string;
  message?: string | IonicSafeString;
  buttonText?: string,
  show: boolean,
  setShow: Function
}

const Dialog2: React.FC<ModalProps> = (props) => {
  var { header, subHeader, message, buttonText, show, setShow } = props;
  
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
              <IonButton color="primary" href="/tabs/tab2"> {buttonText} </IonButton>
          </IonFooter>

      </IonContent>
  </IonPopover>
);
};

export default Dialog2;
