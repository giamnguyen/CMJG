import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { 
  IonApp, 
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid, 
  IonRow,
  IonCol,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonRouterOutlet, IonIcon 
} from '@ionic/react';

import {earthOutline, accessibilityOutline} from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import Login from './pages/Login';
import Register from './pages/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  // const signIn = () => {};

  // const register = () => {};

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonIcon slot="start" icon={earthOutline} />
            Welcome to Easy Compost
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              {/* <IonButton onClick={signIn} routerLink="/Login"> */}
              <IonButton routerLink="/login">
                <IonIcon slot="start" icon={accessibilityOutline} />
                Sign In
              </IonButton>
            </IonCol>
            <IonCol>
              {/* <IonButton onClick={register} routerLink="/Register"> */}
              <IonButton routerLink="/register">
                Register
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
