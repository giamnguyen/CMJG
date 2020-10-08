import React, { useState } from 'react';
import {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonInput,
IonList, IonItemDivider, IonItem, IonLabel, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { getGlobalUsername } from './Login';
import { toast } from '../toast';

//images
import graphImg from '../images/graph.png';
import mapImg from '../images/mapImg.png';
import infoImg from '../images/infoImg.png';

//chart libary

const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
  const username = getGlobalUsername();

  async function getToast() {
    toast('Here\'s your toast!');
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large" class="title"> EASYCOMPOST </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle class="GraphTitle">THIS WEEK</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonImg src={graphImg} />
          </IonCardContent>
          <IonCardContent>
            <IonCardSubtitle class="GraphSubtitle">You composted more this week!</IonCardSubtitle>
          </IonCardContent>
        </IonCard>

        <IonCard class="bluecards">
          <IonCardHeader>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonCardTitle class="CardTitle">Map</IonCardTitle>
                  <IonCardSubtitle class="CardSubtitle">FIND A BIN NEAR YOU</IonCardSubtitle>
                </IonCol>
                <IonCol>
                  <IonImg class="CardImg" src={mapImg} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
              <IonCol>
                  <IonImg class="CardImg" src={infoImg} />
                </IonCol>
                <IonCol>
                  <IonCardTitle class="CardTitle">Information</IonCardTitle>
                  <IonCardSubtitle class="CardSubtitle">NOT SURE HOW COMPOSTING WORKS?</IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
