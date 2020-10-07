
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, withIonLifeCycle, IonButton, IonFooter, IonList, IonItem, IonLabel, IonListHeader, IonText } from '@ionic/react';
import React from 'react';
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed } from '@capacitor/core';

const { PushNotifications } = Plugins;
const INITIAL_STATE = {
  notifications: [{ id: 'id', title: "Test Push", body: "This is my first push notification" }],
};

export class UserInfo extends React.Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  push() {
    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On succcess, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        alert('Push registration success, token: ' + token.value);
      }
    );

    // Some issue with your setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        let notif = this.state.notifications;
        notif.push({ id: notification.id, title: notification.title, body: notification.body })
        this.setState({
          notifications: notif
        })
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        let notif = this.state.notifications;
        notif.push({ id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body })
        this.setState({
          notifications: notif
        })
      }
    );
  }

  render() {
    const { notifications } = this.state;
    return (
      <IonPage>
        <IonListHeader color="medium">
          <IonLabel>User Information</IonLabel>
        </IonListHeader>
        <IonContent className="ion-padding">
          <IonList>
            {notifications && notifications.map((notif: any) =>
              <IonItem key={notif.id}>
                <IonLabel>
                  <IonText>
                    <h3>{notif.title}</h3>
                  </IonText>
                  <p>{notif.body}</p>
                </IonLabel>
              </IonItem>
            )}
          </IonList>
        </IonContent>
        <IonFooter>
          <IonToolbar>
          <IonButton expand="full" onClick={() => this.push()}>Register for Push</IonButton>
          </IonToolbar>
        </IonFooter>
      </IonPage >
    );
  };
}
export default UserInfo;