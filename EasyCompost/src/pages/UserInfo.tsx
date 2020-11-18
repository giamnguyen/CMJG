import { 
  IonContent, 
  IonHeader, 
  IonCard, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonImg, 
  IonButton, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonLoading,
  IonCardContent 
} from '@ionic/react';

import React, {useState} from 'react';
import { Plugins } from '@capacitor/core';
import './UserInfo.css';

//import images
import profilePic from '../images/defaultPic.png';
import ribbon from '../images/ribbon.png';
import calendar from '../images/calendar.png';
import reward from '../images/reward.png';

import { Link, RouteComponentProps } from 'react-router-dom'
import { logout } from '../functions';
import { toast } from '../toast';
import { getGlobalUsername } from './Login';

const { PushNotifications } = Plugins;
const INITIAL_STATE = {
  notifications: [{ id: 'id', title: "Test Push", body: "This is my first push notification" }],
};

const UserInfo: React.FC<RouteComponentProps> = ({history}) => {
  const [busy, setBusy] = useState<boolean>(false);
  var user = getGlobalUsername();
  const username = user;

  async function signout() {
    const res = await logout();
    toast('User successfully registered!');
    history.push('/notabs/welcome');
    window.location.reload();
    setBusy(false);
  }

  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonGrid>
            <IonRow></IonRow>
            <IonRow>
            <IonCol>
              <IonTitle size="large" class="title">{username}</IonTitle>
            </IonCol>
            <IonCol></IonCol>
            <IonCol>
              <IonButton 
                onClick={signout}
                color="dark" 
                class="logoutButton">
                  Logout
              </IonButton>
            </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>

        <IonLoading message="Please wait.." duration={0} isOpen={busy} />

        <IonCard>
          <IonCardHeader>
            <IonGrid>
              <IonRow>
                <IonCol class="infoContainer">
                  <IonCardSubtitle class="SmallText">UNIVERSITY NAME</IonCardSubtitle>
                  <IonCardTitle class="HeaderTitle">DISPLAY NAME</IonCardTitle>
                  <IonCardSubtitle class="SmallText">USERNAME</IonCardSubtitle>
                  <IonButton color="dark" class="friendsButton">FRIENDS</IonButton>
                </IonCol>
                <IonCol class="picContainer">
                  <IonImg class="profilePic" src={profilePic} />
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardHeader>
          <IonCard class="profileStats">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <h1>300</h1>
                  <p>Days Composting</p>
                </IonCol>
                <IonCol>
                  <h1>1042</h1>
                  <p>Points</p>
                </IonCol>
                <IonCol>
                  <h1>40</h1>
                  <p>lbs. Composted</p>
                </IonCol>
              </IonRow>
            </IonGrid>

          </IonCard>


        </IonCard>

      </IonHeader>
      <IonContent fullscreen>
        <IonCard class="postCard">
          <IonCardHeader>
            <IonCardTitle class="postTitle">AWARD</IonCardTitle>
            <IonImg class="postImg" src={ribbon} />
          </IonCardHeader>
          <IonCardContent class="postContent">
            Username has Composted 40 pounds! That't the equivalent of removing 37 pounds of C02 from the environment!
          </IonCardContent>
        </IonCard>

        <IonCard class="postCard">
          <IonCardHeader>
            <IonCardTitle class="postTitle">STREAK</IonCardTitle>
            <IonImg class="postImg" src={calendar} />
          </IonCardHeader>
          <IonCardContent class="postContent">
            Username has been composting for 300 dats straight! That's impressive! In that time they've composted 39 lbs.
          </IonCardContent>
        </IonCard>

        <IonCard class="postCard">
          <IonCardHeader>
            <IonCardTitle class="postTitle">REWARD</IonCardTitle>
            <IonImg class="postImg" src={reward} />
          </IonCardHeader>
          <IonCardContent class="postContent">
            Username redeemed 850 points! They got a $10 giftcard to Starbucks!
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
