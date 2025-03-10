import { 
  IonAvatar,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonImg, 
  IonItem, 
  IonLabel, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonSearchbar, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar placeholder="Search"></IonSearchbar>
        <IonList>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://gifsec.com/wp-content/uploads/2022/10/tanjiro-gif-12.gif" />
            </IonAvatar>
            <IonLabel>
              <h2>Tanjiro Kamado</h2>
              <p>Demon Slayer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://www.icegif.com/wp-content/uploads/2022/06/icegif-782.gif" />
            </IonAvatar>
            <IonLabel>
              <h2>Nezuko Kamado</h2>
              <p>Demon</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://media.tenor.com/QZF7CaKs7CwAAAAC/zenitsu-zenitsu-agatsuma.gif" />
            </IonAvatar>
            <IonLabel>
              <h2>Zenitsu Agatsuma</h2>
              <p>Demon Slayer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://www.icegif.com/wp-content/uploads/2022/10/icegif-1752.gif" />
            </IonAvatar>
            <IonLabel>
              <h2>Inosuke Hashibira</h2>
              <p>Demon Slayer</p>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;
