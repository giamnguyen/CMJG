import React from 'react';
import {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonButton,
IonList,
IonItem,
IonThumbnail,
IonImg,
IonLabel,
IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/react';

//import images
import trophy from '../images/trophy.png';
import defaultPic from '../images/defaultPic.png'
import './Tab3.css';

type Item = {
  src: string;
  text: string;
};

const items: Item[] = [{
  src: './images/ranking.png',
  text: ''
}];

const Tab3: React.FC = () => {

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle size="large" class="title">COMMUNITY</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonImg class="HeaderImg" src={trophy}/>
            <IonCardTitle class="HeaderTitle">UNIVERSITY</IonCardTitle>
            <IonCardSubtitle class="SmallText">10,000 COMMUNITY MEMBERS</IonCardSubtitle>
            <IonCardSubtitle class="SmallText">30k Pounds of Waste Composted</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol class="rankingNum">1</IonCol>
                <IonCol class="rankingPic"><IonImg  class="profilePic" src={defaultPic}/></IonCol>
                <IonCol class="rankingData">
                  <p>USERNAME</p>
                  <p>20,000 PTS.</p>
                </IonCol>
                <IonCol>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol class="rankingNum">2</IonCol>
                <IonCol class="rankingPic"><IonImg  class="profilePic" src={defaultPic}/></IonCol>
                <IonCol class="rankingData">
                  <p>USERNAME</p>
                  <p>19,679 PTS.</p>
                </IonCol>
                <IonCol>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>


        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol class="rankingNum">3</IonCol>
                <IonCol class="rankingPic"><IonImg  class="profilePic" src={defaultPic}/></IonCol>
                <IonCol class="rankingData">
                  <p>USERNAME</p>
                  <p>19,590 PTS.</p>
                </IonCol>
                <IonCol>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol class="rankingNum">4</IonCol>
                <IonCol class="rankingPic"><IonImg  class="profilePic" src={defaultPic}/></IonCol>
                <IonCol class="rankingData">
                  <p>USERNAME</p>
                  <p>19,432 PTS.</p>
                </IonCol>
                <IonCol>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
