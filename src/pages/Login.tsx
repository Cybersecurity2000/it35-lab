import { 
    IonAlert,
    IonAvatar,
    IonButton,
    IonContent, 
    IonInput, 
    IonInputPasswordToggle,  
    IonPage,  
    IonToast,  
    useIonRouter
  } from '@ionic/react';
  import { useState } from 'react';
  import { supabase } from '../utils/supabaseClient';
  
  const AlertBox: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({ message, isOpen, onClose }) => {
    return (
      <IonAlert
        isOpen={isOpen}
        onDidDismiss={onClose}
        header="Notification"
        message={message}
        buttons={['OK']}
      />
    );
  };
  
  const Login: React.FC = () => {
    const navigation = useIonRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    const doLogin = async () => {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
  
      if (error) {
        setAlertMessage(error.message);
        setShowAlert(true);
        return;
      }
  
      setShowToast(true); 
      setTimeout(() => {
        navigation.push('/it35-lab/app', 'forward', 'replace');
      }, 300);
    };
  
    return (
      <IonPage>
        <IonContent className="ion-padding" fullscreen>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
              backdropFilter: 'blur(10px)', // glassmorphism effect
              padding: '30px',
              borderRadius: '20px',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '90%',
              maxWidth: '400px',
            }}>
              <IonAvatar
                style={{
                  width: '120px',
                  height: '120px',
                  marginBottom: '20px',
                  boxShadow: '0 0 15px red, 0 0 30px darkred',
                }}
              >
                <img 
                  src="https://media.giphy.com/media/IwSG1QKOwDjQk/giphy.gif" 
                  alt="Profile GIF"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </IonAvatar>
              <h1 style={{ color: 'white', marginBottom: '20px' }}>USER LOGIN</h1>
              <IonInput
                label="Email" 
                labelPlacement="floating" 
                fill="outline"
                type="email"
                placeholder="Enter Email"
                value={email}
                onIonInput={e => setEmail(e.detail.value!)}
                style={{ marginBottom: '15px', width: '100%' }}
              />
              <IonInput
                fill="outline"
                type="password"
                placeholder="Password"
                value={password}
                onIonInput={e => setPassword(e.detail.value!)}
                style={{ marginBottom: '20px', width: '100%' }}
              >
                <IonInputPasswordToggle slot="end" />
              </IonInput>
  
              <IonButton onClick={doLogin} expand="full" shape="round" style={{ marginBottom: '10px' }}>
                Login
              </IonButton>
  
              {/* Updated "Don't have an account? Register here" button */}
              <IonButton 
                routerLink="/it35-lab/register" 
                expand="full" 
                fill="clear" 
                shape="round" 
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  textTransform: 'none'
                }}
              >
                Don't have an account? Register here
              </IonButton>
            </div>
          </div>
  
          {/* Reusable AlertBox Component */}
          <AlertBox message={alertMessage} isOpen={showAlert} onClose={() => setShowAlert(false)} />
  
          {/* IonToast for success message */}
          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Login successful! Redirecting..."
            duration={1500}
            position="top"
            color="primary"
          />
        </IonContent>
      </IonPage>
    );
  };
  
  export default Login;
  