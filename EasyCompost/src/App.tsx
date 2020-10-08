import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonIcon,
  IonTabButton,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { scanOutline, personOutline, homeOutline, trophyOutline } from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login';
import Register from './pages/Register';
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
            <Route path="/notabs" render={() => (
                <IonRouterOutlet>
                <Route
                  path="/notabs/login"
                  component={Login}
                  exact={true}
                />
                <Route
                  path="/notabs/register"
                  component={Register}
                  exact={true}
                />
                <Route
                  path="/notabs/welcome"
                  component={Welcome}
                  exact={true}
                />
              </IonRouterOutlet>
            )} />
            <Route
              path="/tabs"
              render={() => (
                  <IonTabs>
                    <IonRouterOutlet>
                      <Route
                        path="/tabs/home"
                        component={Tab1}
                        exact={true}
                      />
                      <Route
                        path="/tabs/confirmDrop"
                        component={ConfirmDropOff}
                        exact={true}
                      />
                      <Route
                        path="/tabs/tab2"
                        component={Tab2}
                        exact={true}
                      />
                      <Route
                        path="/tabs/tab3"
                        component={Tab3}
                        exact={true}
                      />
                      <Route
                        path="/tabs/userInfo"
                        component={UserInfo}
                        exact={true}
                      />
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                      <IonTabButton tab="tab1" href="/tabs/home">
                          <IonIcon icon={homeOutline} />
                          <IonLabel>Home</IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab2" href="/tabs/confirmDrop">
                          <IonIcon icon={scanOutline} />
                          <IonLabel>Scanning</IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab3" href="/tabs/tab3">
                          <IonIcon icon={trophyOutline} />
                          <IonLabel>Rankings</IonLabel>
                      </IonTabButton>
                      <IonTabButton tab="tab4" href="/tabs/userInfo">
                          <IonIcon icon={personOutline} />
                          <IonLabel>User Info</IonLabel>
                      </IonTabButton>
                    </IonTabBar>
                  </IonTabs>
              )}
            />
            <Route
              path="/"
              render={() => <Redirect to="/notabs/welcome" />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
  );
};

export default App;