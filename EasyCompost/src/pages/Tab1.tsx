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
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { getGlobalUsername } from './Login';
import { toast } from '../toast';


const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
  const username = getGlobalUsername();

  async function getToast(){
    toast('Here\'s your toast!');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large"> Welcome to EasyCompost, </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Name</IonItemDivider>
          <IonItem>
            <IonInput 
              value={text} 
              placeholder="Enter Input" 
              onIonChange={e => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonButton onClick={getToast}>
              Get a toast!
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
