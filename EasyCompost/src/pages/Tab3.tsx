import React from 'react';
import {
IonContent,
IonHeader,
IonPage,
IonTitle,
IonToolbar,
IonImg,
IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/react';

import firebase from '../firebaseConfig';
import {useState, useRef} from 'react';

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

type TopUser = {
  username: string;
  points: number;
};

const Tab3: React.FC = () => {
  const top10UsersRef = useRef<TopUser[]>([]);
  // const totalMembersRef = useRef<number>(0);
  // const totalWeightRef = useRef<number>(0);
  const [count, setCount] = useState<number>(0);
  const [pount, setPount] = useState<number>(0);

  firebase.database().ref('users').orderByChild('points').limitToLast(10).once('value').then(function(snapshot) {
    var idx = 0;
    var totalLBS = 0;
    top10UsersRef.current = [] as TopUser[];
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val();

      var user = {username: childKey, points: childData.points};
      top10UsersRef.current.unshift(user as TopUser);

      // totalMembersRef.current++;
      idx++;
      totalLBS += childData.points;
    });
    setCount(idx);
    setPount(totalLBS);
  });

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
            <IonCardTitle class="HeaderTitle">Georgia Institute of Technology</IonCardTitle>
            <IonCardSubtitle class="SmallText">{count} COMMUNITY MEMBERS</IonCardSubtitle>
            <IonCardSubtitle class="SmallText">{pount} Pounds of Waste Composted</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        {top10UsersRef.current.map((u, idx) => (        
            <IonCard key={idx}>
              <IonCardContent>
                <IonGrid>
                  <IonRow>
                    <IonCol class="rankingNum">{idx+1}</IonCol>
                    <IonCol class="rankingPic"><IonImg  class="profilePic" src={defaultPic}/></IonCol>
                    <IonCol class="rankingData">
                      <p>{u.username}</p>
                      <p>{u.points} PTS.</p>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCardContent>
            </IonCard>
        ))}
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
