import React, { useState } from 'react';
import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonInput,
  IonItem,
  IonLabel,
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonText,
  useIonRouter,
} from '@ionic/react';
import 'animate.css';
import './Login.css'; // Optional: for custom styles

const Login: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = () => {
    console.log('Logging in with:', email, password);

    if (email && password) {
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert('Please enter valid email and password');
    }
  };

  const goToSignup = () => {
    navigation.push('/signup', 'forward'); // Navigate to SignUp page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="login-container animate__animated animate__fadeIn">
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput 
              type="email" 
              value={email} 
              onIonChange={e => setEmail(e.detail.value!)} 
              required 
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput 
              type="password" 
              value={password} 
              onIonChange={e => setPassword(e.detail.value!)} 
              required 
            />
          </IonItem>
          <IonButton onClick={doLogin} expand="full" className="mt-4">
            Login
          </IonButton>
          <IonText className="mt-3" color="medium">
            Don't have an account? 
            <IonButton fill="clear" onClick={goToSignup}>
              Sign Up
            </IonButton>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
