import React, { useState, useEffect } from 'react';
import { IonContent, IonInput, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonLoading } from '@ionic/react';
import { Link, RouteComponentProps } from 'react-router-dom';
// import {loginUser} from '../firebaseConfig'
import { toast } from '../toast';
import './Login.css';

var globalUsername = '';

const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [busy, setBusy] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  return (
    <IonPage>
      <IonHeader>
          <IonToolbar>
              <IonTitle>LOGIN</IonTitle>
          </IonToolbar>
      </IonHeader>
      <IonLoading message="Please wait.." duration={0} isOpen={busy} />
      <IonContent className="ion-padding">
        <IonInput placeholder="Username" onIonChange={(e: any) => setUsername(e.target.value)} />
        <IonInput type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)}/>
        <IonButton color="dark"onClick={e => {
            e.preventDefault();
            history.push('/tabs/tab1')
            }}>
            Log In
          {/* <Link to="/tab1" style={{ color: 'white' }}> Login</Link> */}
        </IonButton>
        <p>
            Don't have an account? <Link to="/notabs/register">Register</Link>
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
