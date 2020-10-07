import React from 'react';
import 
{ 
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
  IonLabel 
} from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';

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
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">University Ranking</IonTitle>
          </IonToolbar>
        </IonHeader>
      {/* <IonContent fullscreen>
        <IonButton onClick={getACatPic} id="buttonEx">Press for a cat pic:)</IonButton>
        <p id="testText"> </p>
      </IonContent> */}

      <IonContent fullscreen>
        <IonList>
          {items.map((image, i) => (
            <IonItem key={i}>
              <IonImg src="./images/ranking.png" />
              {/* <IonLabel>{image.text}</IonLabel> */}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
