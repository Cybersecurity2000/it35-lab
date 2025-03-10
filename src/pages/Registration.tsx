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
import './Registration.css';

const Registration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useIonRouter();

  const doRegister = () => {
    if (name && email && password && password === confirmPassword) {
      alert('Registration successful');
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert('Please fill out all fields correctly');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="animate__animated animate__fadeInDown">
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="background-overlay">
          <div className="registration-container animate__animated animate__zoomIn">
            <h2 className="animate__animated animate__fadeInDown">Create an Account</h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">Sign up to get started</p>

            <IonItem className="animate__animated animate__fadeInLeft animate__delay-2s">
              <IonLabel position="floating">Name</IonLabel>
              <IonInput 
                type="text" 
                value={name} 
                onIonChange={e => setName(e.detail.value!)} 
                required 
              />
            </IonItem>

            <IonItem className="animate__animated animate__fadeInRight animate__delay-3s">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput 
                type="email" 
                value={email} 
                onIonChange={e => setEmail(e.detail.value!)} 
                required 
              />
            </IonItem>

            <IonItem className="animate__animated animate__fadeInLeft animate__delay-4s">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput 
                type="password" 
                value={password} 
                onIonChange={e => setPassword(e.detail.value!)} 
                required 
              />
            </IonItem>

            <IonItem className="animate__animated animate__fadeInRight animate__delay-5s">
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput 
                type="password" 
                value={confirmPassword} 
                onIonChange={e => setConfirmPassword(e.detail.value!)} 
                required 
              />
            </IonItem>

            <IonButton 
              onClick={doRegister} 
              expand="full" 
              className="mt-4 signup-button animate__animated animate__pulse animate__delay-6s"
            >
              Sign Up
            </IonButton>

            <IonText className="mt-3" color="medium">
              Already have an account?  
              <IonButton 
                fill="clear" 
                onClick={() => navigation.push('/login', 'forward', 'replace')} 
                className="login-link"
              >
                Login
              </IonButton>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Registration;
