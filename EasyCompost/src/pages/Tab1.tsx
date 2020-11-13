import React, { useState } from 'react';
import {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol
} from '@ionic/react';
import './Tab1.css';
import { Link, RouteComponentProps } from 'react-router-dom';
import { getGlobalUsername } from './Login';
import { toast } from '../toast';

//images
import graphImg from '../images/graph.png';
import mapImg from '../images/mapImg.png';
import infoImg from '../images/infoImg.png';
import trashImg from '../images/trashcan.png';

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

        <IonCard  class="bluecards">
          <IonCardHeader>
          </IonCardHeader>
          <Link to="/tabs/confirmDrop">
          <IonCardContent>
            <IonGrid>
              <IonRow>
              <IonCol>
                  <IonImg class="CardImg" src={trashImg} />
                </IonCol>
                <IonCol>
                  <IonCardTitle class="CardTitle">My Surveys</IonCardTitle>
                  <IonCardSubtitle class="CardSubtitle">VIEW YOUR SURVEYS AND COMPLETE DROP OFFS</IonCardSubtitle>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent></Link>
        </IonCard>

        <IonCard>
          <IonCardHeader>
          </IonCardHeader>
          <Link to="/notabs/map">
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
          </IonCardContent></Link>
        </IonCard>

        <IonCard  class="bluecards">
          <IonCardHeader>
          </IonCardHeader>
          <Link to="/notabs/info">
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
          </IonCardContent></Link>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
