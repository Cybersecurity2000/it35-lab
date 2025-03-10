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
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useIonRouter();

  // Login function
  const doLogin = () => {
    if (email && password) {
      alert('Login successful');
      navigation.push('/it35-lab/app', 'forward', 'replace');
    } else {
      alert('Please enter valid email and password');
    }
  };

  // Signup function
  const doSignup = () => {
    if (signupName && signupEmail && signupPassword && confirmPassword) {
      if (signupPassword !== confirmPassword) {
        alert('Passwords do not match');
      } else {
        alert('Account successfully created');
        setShowSignup(false); // Switch to login view
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }
    } else {
      alert('Please fill out all fields correctly');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="animate__animated animate__fadeInDown">
          <IonTitle>{showSignup ? 'Sign Up' : 'Login'}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="background-overlay">
          <div className="login-container animate__animated animate__zoomIn">
            {!showSignup ? (
              <>
                <h2 className="animate__animated animate__fadeInDown">Welcome Back!</h2>
                <p className="animate__animated animate__fadeIn animate__delay-1s">Sign in to continue</p>

                <IonItem className="animate__animated animate__fadeInLeft animate__delay-2s">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput 
                    type="email" 
                    value={email} 
                    onIonChange={e => setEmail(e.detail.value!)} 
                    required 
                  />
                </IonItem>

                <IonItem className="animate__animated animate__fadeInRight animate__delay-3s">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput 
                    type="password" 
                    value={password} 
                    onIonChange={e => setPassword(e.detail.value!)} 
                    required 
                  />
                </IonItem>

                <IonButton 
                  onClick={doLogin} 
                  expand="full" 
                  className="mt-4 login-button animate__animated animate__pulse animate__delay-4s"
                >
                  Login
                </IonButton>

                <IonText className="mt-3 animate__animated animate__fadeInUp animate__delay-5s" color="medium">
                  Don't have an account?  
                  <IonButton 
                    fill="clear" 
                    onClick={() => setShowSignup(true)} 
                    className="signup-link"
                  >
                    Sign Up
                  </IonButton>
                </IonText>
              </>
            ) : (
              <>
                <h2 className="animate__animated animate__fadeInDown">Create an Account</h2>
                <p className="animate__animated animate__fadeIn animate__delay-1s">Sign up to get started</p>

                <IonItem className="animate__animated animate__fadeInLeft animate__delay-2s">
                  <IonLabel position="floating">Name</IonLabel>
                  <IonInput 
                    type="text" 
                    value={signupName} 
                    onIonChange={e => setSignupName(e.detail.value!)} 
                    required 
                  />
                </IonItem>

                <IonItem className="animate__animated animate__fadeInRight animate__delay-3s">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput 
                    type="email" 
                    value={signupEmail} 
                    onIonChange={e => setSignupEmail(e.detail.value!)} 
                    required 
                  />
                </IonItem>

                <IonItem className="animate__animated animate__fadeInLeft animate__delay-4s">
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput 
                    type="password" 
                    value={signupPassword} 
                    onIonChange={e => setSignupPassword(e.detail.value!)} 
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
                  className="mt-4 signup-button"
                >
                  Sign Up
                </IonButton>

                <IonText className="mt-3" color="medium">
                  Already have an account?  
                  <IonButton fill="clear" onClick={() => setShowSignup(false)} className="login-link">
                    Login
                  </IonButton>
                </IonText>
              </>
            )}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
