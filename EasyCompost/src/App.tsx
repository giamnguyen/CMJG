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
  IonInput
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { scanOutline, ellipse, personOutline, homeOutline, trophyOutline } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserInfo from './pages/UserInfo';
import ConfirmDropOff from './pages/ConfirmDropOff';
import Welcome from './pages/Welcome';

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

const App: React.FC = () =>  {
  return (
    <IonApp>
      <IonReactRouter>
            <IonRouterOutlet>
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/register" component={Register} />
              <Route path="/userInfo" component={UserInfo} />
              <Route path="/confirmDrop" component={ConfirmDropOff} />
              <Route path="/" render={() => <Redirect to="/welcome" />} exact={true} />
            </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
