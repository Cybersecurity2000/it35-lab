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
import './SIGNUP.css'; // Custom styles

const Signup: React.FC = () => {
  const navigation = useIonRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const doSignup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Signed up with:', { name, email, password });
    alert('Account created successfully! 🎉');
    navigation.push('/login', 'forward', 'replace'); // Redirect to login page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="animate__animated animate__fadeInDown">
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Background Overlay */}
        <div className="background-overlay">
          <div className="signup-container animate__animated animate__zoomIn">
            
            <h2 className="animate__animated animate__fadeInDown">Create Account</h2>
            <p className="animate__animated animate__fadeIn animate__delay-1s">Join us and explore amazing features!</p>

            <IonItem className="animate__animated animate__fadeInLeft animate__delay-2s">
              <IonLabel position="floating">Full Name</IonLabel>
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
              onClick={doSignup} 
              expand="full" 
              className="mt-4 signup-button animate__animated animate__pulse animate__delay-6s"
            >
              SIGNUP
            </IonButton>

            <IonText className="mt-3 animate__animated animate__fadeInUp animate__delay-7s" color="medium">
              Already have an account?  
              <IonButton 
                fill="clear" 
                onClick={() => navigation.push('/login', 'forward')} 
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

export default Signup;
