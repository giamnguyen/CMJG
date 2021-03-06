import React, { useState, useEffect } from 'react';
import { IonContent, IonInput, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonLoading } from '@ionic/react';
import { Link, RouteComponentProps } from 'react-router-dom'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import { toast } from '../toast';
import { registerUser } from '../functions';

import firebase from '../firebaseConfig';

const Register: React.FC<RouteComponentProps> = ({history}) => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  async function register() {
      setBusy(true)
      if (password.length < 6) {
        setBusy(false)
        return toast('Your password must have at least 8 characters')
      }
      if (password !== confirmPassword) {
        setBusy(false)
        return toast('Passwords do not match')
      }
      if (username.trim() === '' || password.trim() ==='' ) {
        setBusy(false)
        return toast('Username and password are required')
      }
      const res = await registerUser(username, password)
      if (res) {
        firebase.database().ref('users/' + username).set({
          name: username,
          daysComposting: 1,
          points: 100,
          weightComposted: 10
        });
        toast('User successfully registered!')
        history.push('/tabs/tab1');
      }
      setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
              <IonTitle>Register</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading message="Registration in progress..." duration={0} isOpen={busy} />
        <IonInput 
          placeholder="Username" 
          onIonChange={(e: any) => setUsername(e.target.value)} 
        />
        <IonInput 
          type="password" 
          placeholder="Password" 
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        <IonInput 
          type="password" 
          placeholder="Confirm password" 
          onIonChange={(e: any) => setConfirmPassword(e.target.value)}
        />
        <IonButton color="dark" onClick={register}>Register</IonButton>
        <p>
            Already have an account? <Link to="/notabs/login">Login</Link>
        </p>
      </IonContent>
    </IonPage>
  )
};

export default Register;

