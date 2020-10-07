import React, { useState, useEffect } from 'react';
import { IonContent, IonInput, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonLoading } from '@ionic/react';
import { Link } from 'react-router-dom';
// import {loginUser} from '../firebaseConfig'
import { toast } from '../toast';

var globalUsername = '';

const Login: React.FC = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  async function login() {
    // setBusy(true)
    // const res = await loginUser(username, password)
    // if (!res) {
    //   setBusy(false)
    //   toast('Username or password is incorrect')
    // } else {
    //   toast('You have logged in!')
    //   setGlobalUsername(username)
    // }
    // setBusy(false)

    console.log('hahahah');
  }

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
              <IonTitle>Login</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonButton onClick={login}>Login</IonButton>
        <p>
            Don't have an account? <Link to="/register">Register</Link>
        </p>
      </IonContent>
    </IonPage>
  )
};

function setGlobalUsername(username : string) {
    globalUsername = username;
}

export function getGlobalUsername() {
    return globalUsername;
}

export default Login;
