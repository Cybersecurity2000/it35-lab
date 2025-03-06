import React from 'react';
import { 
  IonButtons,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Optional: for custom styles

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container text-center mt-5">
          <h1 className="animate__animated animate__fadeIn">About Me</h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Hello! I'm Melvin Reyes, a passionate developer with a love for creating dynamic and responsive web applications.
          </p>
          <p className="animate__animated animate__fadeIn animate__delay-2s">
            I enjoy working with modern technologies and continuously learning new skills to improve my craft.
          </p>
          <p className="animate__animated animate__fadeIn animate__delay-3s">
            In my free time, I love exploring new places, reading books, and contributing to open-source projects.
          </p>
          <h2 className="animate__animated animate__fadeIn animate__delay-4s">Skills</h2>
          <ul className="list-unstyled animate__animated animate__fadeIn animate__delay-5s">
            <li>✔️ HTML, CSS, JavaScript</li>
            <li>✔️ React & Ionic Framework</li>
            <li>✔️ MySQL & PHP</li>
            <li>✔️ Backend Integration</li>
            <li>✔️ UI/UX Design & Animations</li>
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
