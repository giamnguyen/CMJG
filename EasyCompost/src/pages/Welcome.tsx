import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonPage,
} from '@ionic/react';

import { earthOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import './Welcome.css';


const Welcome: React.FC<RouteComponentProps> = ({ history }) => {

  //   const signIn = () => {};

  // const register = () => {};

  return (
    <IonPage>
      <IonReactRouter>
        {/* <IonRouterOutlet>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet> */
        /*<IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonIcon slot="start" icon={earthOutline} />
              Welcome to Easy Compost
            </IonTitle>
          </IonToolbar>
        </IonHeader>*/}
        <IonContent class="welcomePage">
          <IonGrid>
          <IonRow class="buttons">
              <IonCol>
                {/* <IonButton onClick={signIn} routerLink="/Login"> */}
                <IonButton color="dark" onClick={e => {
                  e.preventDefault();
                  history.push('/notabs/login')
                  }}>
                  Sign In
                </IonButton>
              </IonCol>
              <IonCol>
                {/* <IonButton onClick={register} routerLink="/Register"> */}
                <IonButton color="dark" onClick={e => {
                  e.preventDefault();
                  history.push('/notabs/register')
                  }}>
                  Register
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonReactRouter>
    </IonPage>
  );
};

export default Welcome;
