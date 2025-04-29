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
import SearchContainer from '../../components/SearchContainer';

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
          <SearchContainer />
            <IonList>
            </IonList>
          </IonContent>
      </IonPage>
    );
  };
  
  export default Search;