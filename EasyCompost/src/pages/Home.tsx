import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonRouterOutlet,
  IonContent,
  IonTabs,
  IonTabBar,
  IonIcon,
  IonTabButton,
  IonLabel,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonList, 
  IonItemDivider, 
  IonItem
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { scanOutline, ellipse, personOutline, homeOutline, trophyOutline } from 'ionicons/icons';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import UserInfo from './UserInfo';
import ConfirmDropOff from './ConfirmDropOff';

const Home: React.FC = () =>  {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/userInfo" component={UserInfo} />
              <Route path="/confirmDrop" component={ConfirmDropOff} />
              <Route path="/home" render={() => <Redirect to="/tab1" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/confirmDrop">
                <IonIcon icon={scanOutline} />
                <IonLabel>Scanning</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={trophyOutline} />
                <IonLabel>Rankings</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/userInfo">
                <IonIcon icon={personOutline} />
                <IonLabel>User Info</IonLabel>
            </IonTabButton>
            </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Home;
