import React, { useState } from 'react';
import 
{ 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput, 
  IonList, IonItemDivider, IonItem, IonLabel, IonButton 
} from '@ionic/react';
import './Tab1.css';
import { getGlobalUsername } from './Login';
import { toast } from '../toast';
import { Link } from 'react-router-dom';


const ConfirmDropOff: React.FC = () => {

  const [text, setText] = useState<string>();
  const username = getGlobalUsername();

  async function getToast(){
    toast('Here\'s your toast!');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large"> Confirm Drop Off </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Name</IonItemDivider>
          <IonItem>
          <IonButton>
            <Link to="/tab2" style={{ color: 'white' }}> Ready to Scan! </Link>
          </IonButton>
          </IonItem>
          <IonItem>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default ConfirmDropOff;
