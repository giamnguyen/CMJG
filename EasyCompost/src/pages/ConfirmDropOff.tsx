import React, { useState, useRef } from 'react';
import 
{ 
  IonContent, 
  IonHeader, 
  IonFooter, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonInput, 
  IonList, IonItemDivider, IonItem, IonLabel, IonButton,
  IonIcon, IonCheckbox, IonFab, IonFabButton
} from '@ionic/react';
import { locationOutline, people, camera } from 'ionicons/icons'
import './Tab1.css';
import { getGlobalUsername } from './Login';
import './Tab2.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { toast } from '../toast';
import { Link } from 'react-router-dom';
import Dialog2 from './Dialog2';
import Dialog1 from './Dialog1'


const ConfirmDropOff: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const username = getGlobalUsername();
  const [showAlert1, setShowAlert1] = useState(false);
  const [showCamera, setShowCamera] = useState(true);

  // const [text, setText] = useState<string>();
  // const username = getGlobalUsername();

  // async function getToast(){
  //   toast('Here\'s your toast!');
  // }

  const [showAlert2, setShowAlert2] = useState(false);
  const [checked, setChecked] = useState(false);

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const compostTagInputRef = useRef<HTMLIonInputElement>(null);

  const confirmDropOff = () => {
    const enterWeight = weightInputRef.current?.value;
    const enterCompostTag = compostTagInputRef.current?.value;

    console.log(enterWeight, enterCompostTag, checked);
    setShowAlert2(true);
  }

  //setShowCamera(true);
  if (showCamera)
    return (
        <IonPage>
          <IonHeader>
              <IonToolbar>
                <IonTitle size="large">Drop-off Scan</IonTitle>
              </IonToolbar>
            </IonHeader>
          <IonContent fullscreen>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
              <IonFabButton onClick={() => {
                  setShowCamera(false);
                  setShowAlert1(true);
                }}>
                <IonIcon icon={camera}></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonPage>
    );

    return(
      <IonPage>
            <Dialog1  
              header={'Wait!'}
              subHeader={'Before you drop off, make sure\nall your products are compostable!'}
              buttonText1={'I\'m not sure'}
              buttonText2={'Yep, all good!'}
              show={showAlert1}
              setShow={() => setShowAlert1(false)}
            />
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large" slot="secondary"> Confirm Drop Off </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem>
              <IonIcon icon={locationOutline} />
              <IonLabel className="ion-text-center"> Student Center Cafeteria </IonLabel>
            </IonItem>

            <IonItemDivider> Weight </IonItemDivider>
            
            <IonItem>
              <IonLabel position="floating">LBS</IonLabel>
              <IonInput ref={weightInputRef}></IonInput>
            </IonItem>          

            <IonItemDivider> Compost Content Tags </IonItemDivider>
            
            <IonItem>
              <IonLabel position="floating"> Ex: banana peel, paper cup </IonLabel>
              <IonInput ref={compostTagInputRef}></IonInput>
            </IonItem>

            <IonItemDivider> </IonItemDivider>

            <IonItem>
              <IonCheckbox slot="start" checked={checked} onIonChange={e => setChecked(e.detail.checked)} />
              <IonLabel className="ion-text-wrap"> 
                By checking this box, I confirm that all the materials 
                in my drop off are compostable.
              </IonLabel>
            </IonItem>

          </IonList>
        </IonContent>

        <IonFooter>
          <IonButton color="dark" expand="block" onClick={confirmDropOff}> Complete Drop Off </IonButton>
        </IonFooter>
        
        <Dialog2  
          header={'Congrats!'}
          subHeader={'You just completed a drop off! Thanks for helping the Earth.'}
          message={'+150 PTS'}
          buttonText={'Thanks!'}
          show={showAlert2}
          setShow={() => setShowAlert2(false)}
        />

    </IonPage>
  );
};

export default ConfirmDropOff;
