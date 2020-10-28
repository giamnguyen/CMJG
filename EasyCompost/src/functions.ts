import firebase from './firebaseConfig';
import { toast } from './toast';


// authenticate with firebase
// if present, show dashboard
// if not, show error
export async function loginUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(res);
        
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@gmail.com`
    
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(res);
        return true;
    } catch (error) {
        // console.log(error);
        toast(error.message, 4000);
        return false;
    }
}

export async function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        toast('You signed out successfully! Thank you for using the app');
        console.log('You signed out! Thank you for using the app');
      }).catch(function(error) {
        // An error happened.
    });
}    

