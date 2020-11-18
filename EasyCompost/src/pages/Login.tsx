 import React, { useState, useEffect } from 'react';
import { IonContent, IonInput, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonLoading } from '@ionic/react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { loginUser } from '../functions'
import { toast } from '../toast';

var globalUsername = '';

const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [busy, setBusy] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [username, setUsername] = useState<string>('')

  async function login() {
    setBusy(true);
    const res = await loginUser(username, password);

    if (!res) {
      toast('Error logging with your credentials');
    } else {
      toast('You have logged in!');
      setGlobalUsername(username);
      history.push('/tabs/tab1');
    }
    // console.log(`${res ? 'Login success' : 'Login failed'}`);
    setBusy(false);
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
        <IonInput 
          placeholder="Username" 
          onIonChange={(e: any) => setUsername(e.target.value)} 
        />
        <IonInput 
          type="password" 
          placeholder="Password" 
          onIonChange={(e: any) => setPassword(e.target.value)}
        />
        {/* <IonButton onClick={e => {
            e.preventDefault();
            history.push('/tabs/tab1')
            }}>
            Log In
          {/* <Link to="/tab1" style={{ color: 'white' }}> Login</Link> */}
        <IonButton color="dark" onClick={login}>Login</IonButton>
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
