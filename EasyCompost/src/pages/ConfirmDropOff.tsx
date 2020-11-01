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
import { locationOutline, camera } from 'ionicons/icons'
import './Tab1.css';
import { getGlobalUsername } from './Login';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import Dialog2 from './Dialog2';
import Dialog1 from './Dialog1'


const ConfirmDropOff: React.FC = () => {
  const { photos, takePhoto } = usePhotoGallery();
  const username = getGlobalUsername();
  const [showAlert1, setShowAlert1] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);

  // const [text, setText] = useState<string>();
  // const username = getGlobalUsername();

  // async function getToast(){
  //   toast('Here\'s your toast!');
  // }

  const [showAlert2, setShowAlert2] = useState(false);
  const [checked, setChecked] = useState(false);
  const [greensChecked, setGreensChecked] = useState(false);
  const [brownsChecked, setBrownsChecked] = useState(false);
  const [heavyChecked, setHeavyChecked] = useState(false);
  const [indChecked, setIndChecked] = useState(false);

  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const compostTagInputRef = useRef<HTMLIonInputElement>(null);

  const confirmDropOff = () => {
    const enterWeight = weightInputRef.current?.value;
    const enterCompostTag = compostTagInputRef.current?.value;

    console.log(enterWeight, enterCompostTag, checked);
    setShowSurvey(false);
    setShowFinalPage(true);
    //setShowCamera(true);
  }

  const openCamera = () => {
    setShowCamera(true);
    if (photoTaken) setShowAlert2(true);
  }

  const createNewSurvey = () => {
    setShowSurvey(true);
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

    if (showSurvey)
      return(
        <IonPage>
              <Dialog1  
                header={'Wait!'}
                subHeader={'Before you drop off, make sure\nall your products are compostable!'}
                buttonText1={'I\'m not sure'}
                buttonText2={'Yep, all good!'}
                show={showAlert1}
                setShow={() => setShowAlert1(false)}
                photoTaken={() => setShowAlert2(true)}
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

              <IonItemDivider> Compost Content (Check all that apply) </IonItemDivider>
              <IonItem>
                <IonCheckbox slot="start" checked={greensChecked} onIonChange={e => setGreensChecked(e.detail.checked)} />
                <IonLabel className="ion-text-wrap"> 
                  Greens: Includes fruit and vegetable trimmings, leaves
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox slot="start" checked={brownsChecked} onIonChange={e => setBrownsChecked(e.detail.checked)} />
                <IonLabel className="ion-text-wrap"> 
                  Browns: Includes paper, cardboard, sticks
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox slot="start" checked={heavyChecked} onIonChange={e => setHeavyChecked(e.detail.checked)} />
                <IonLabel className="ion-text-wrap"> 
                  Heavy Compost: Oil/dairy/animal product scraps
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonCheckbox slot="start" checked={indChecked} onIonChange={e => setIndChecked(e.detail.checked)} />
                <IonLabel className="ion-text-wrap"> 
                  Industrial Compost: Containers and silverware labeled as compostable
                </IonLabel>
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

    if (showFinalPage)
    return(
      <IonPage>
        <Dialog1  
          header={'Wait!'}
          subHeader={'Before you drop off, make sure\nall your products are compostable!'}
          buttonText1={'I\'m not sure'}
          buttonText2={'Yep, all good!'}
          show={showAlert1}
          setShow={() => setShowAlert1(false)}
          photoTaken={() => setShowAlert2(true)}
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
            <IonItem>            
              <IonButton onClick={openCamera}>Use Survey Completed on 10/30/2020</IonButton>
            </IonItem>
            <IonItem>            
              <IonButton onClick={createNewSurvey}>Take New Survey</IonButton>
            </IonItem>
          </IonList>
        </IonContent> 
        <Dialog2  
                header={'Congrats!'}
                subHeader={'You just completed a drop off! Thanks for helping the Earth.'}
                message={'+150 PTS'}
                buttonText={'Thanks!'}
                show={showAlert2}
                setShow={() => setShowAlert2(false)}
              />
      </IonPage>
    )

    return(
      <IonPage>
        <Dialog1  
          header={'Wait!'}
          subHeader={'Before you drop off, make sure\nall your products are compostable!'}
          buttonText1={'I\'m not sure'}
          buttonText2={'Yep, all good!'}
          show={showAlert1}
          setShow={() => setShowAlert1(false)}
          photoTaken={() => setShowAlert2(true)}
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
            <IonItem>            
              <IonButton onClick={createNewSurvey}>Take New Survey</IonButton>
            </IonItem>
          </IonList>
        </IonContent> 
      </IonPage>
    )
};

export default ConfirmDropOff;
