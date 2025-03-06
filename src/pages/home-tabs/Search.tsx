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
              <IonImg src="/assets/images/tanjiro.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Tanjiro Kamado</h2>
              <p>Demon Slayer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/images/nezuko.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Nezuko Kamado</h2>
              <p>Demon</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/images/zenitsu.png" />
            </IonAvatar>
            <IonLabel>
              <h2>Zenitsu Agatsuma</h2>
              <p>Demon Slayer</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="/assets/images/inosuke.png" />
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
