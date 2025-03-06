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
  useIonRouter
} from '@ionic/react';

const SignUp: React.FC = () => {
  const navigation = useIonRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('Signing up with:', email, password);
    // Add sign-up logic here
    navigation.push('/login', 'back'); // Go back to login after signup
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
        <IonButton onClick={handleSignUp} expand="full" className="mt-4">
          Sign Up
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
