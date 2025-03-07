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
import 'animate.css';
import './About.css'; // Custom styles

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle className="animate__animated animate__bounceInDown">About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Background Overlay */}
        <div className="background-overlay">
          <div className="container text-center mt-5">

            {/* Profile Picture GIF */}
            <img 
              src="https://miro.medium.com/max/1400/1*5_-vAY4eZmoSzW9eXq6ABw.gif" // Replace with your actual GIF URL
              alt="Melvin Reyes Profile"
              className="profile-gif animate__animated animate__zoomIn"
            />

            <h1 className="animate__animated animate__zoomIn mt-3 text-white">About Me</h1>
            <p className="animate__animated animate__fadeInLeft animate__delay-1s text-white">
              Hello! I'm <strong>Melvin Reyes</strong>, a passionate developer with a love for creating dynamic and responsive web applications.
            </p>
            <p className="animate__animated animate__fadeInRight animate__delay-2s text-white">
              I enjoy working with modern technologies and continuously learning new skills to improve my craft.
            </p>
            <p className="animate__animated animate__fadeInUp animate__delay-3s text-white">
              In my free time, I love exploring new places, reading books, and contributing to open-source projects.
            </p>

            <h2 className="animate__animated animate__bounceIn animate__delay-4s text-white">Skills</h2>
            <ul className="list-unstyled animate__animated animate__slideInUp animate__delay-5s text-white">
              <li className="animate__animated animate__pulse animate__delay-6s">✔️ HTML, CSS, JavaScript</li>
              <li className="animate__animated animate__pulse animate__delay-7s">✔️ React & Ionic Framework</li>
              <li className="animate__animated animate__pulse animate__delay-8s">✔️ MySQL & PHP</li>
              <li className="animate__animated animate__pulse animate__delay-9s">✔️ Backend Integration</li>
              <li className="animate__animated animate__pulse animate__delay-10s">✔️ UI/UX Design & Animations</li>
            </ul>

            {/* Contact Link with Hover Effect */}
            <p className="animate__animated animate__fadeInUp animate__delay-11s mt-4">
              Connect with me on 
              <a 
                href="https://github.com/Cybersecurity2000" 
                className="github-link mx-2"
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub
              </a>  
            </p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
