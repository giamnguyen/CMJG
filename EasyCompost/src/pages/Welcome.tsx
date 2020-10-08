import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Link, RouteComponentProps } from 'react-router-dom';
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
  IonIcon,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonRouterOutlet, 
} from '@ionic/react';

import {earthOutline} from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';


const UsersListPage: React.FC<RouteComponentProps> = ({history}) => {

//   const signIn = () => {};

  // const register = () => {};

  return (
    <IonPage>
      <IonReactRouter>
        {/* <IonRouterOutlet>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet> */}
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
                <IonButton onClick={e => {
                  e.preventDefault();
                  history.push('/login')
                  }}>
                  Sign In
                </IonButton>
              </IonCol>
              <IonCol>
                {/* <IonButton onClick={register} routerLink="/Register"> */}
                <IonButton onClick={e => {
                  e.preventDefault();
                  history.push('/register')
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

export default UsersListPage;
