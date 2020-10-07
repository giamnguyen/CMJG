import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {

  var img = document.createElement('img');

  async function getACatPic() {
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.thecatapi.com/v1/images/search')
    request.onload = function() {
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        console.log('good')
        img.src = data[0].url
        var elm = document.getElementById("testText")!;
        elm.appendChild(img)
        var fireReq = new XMLHttpRequest()
        fireReq.open('POST', 'https://practice-project-403ba.firebaseio.com/message_list.json')
        var pushData = "'{ 'url' + '" +  img.src + "' }";
        fireReq.send(JSON.stringify(pushData));
        console.log("Should be refreshed")
      } else {
        console.log('error')
      }
    }
    request.send();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cat Pics!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={getACatPic} id="buttonEx">Press for a cat pic:)</IonButton>
        <p id="testText"> </p>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
