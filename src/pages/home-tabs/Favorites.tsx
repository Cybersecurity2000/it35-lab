import { 
  IonAvatar,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonItemOption, 
      IonItemOptions, 
      IonItemSliding, 
      IonLabel, 
      IonList, 
      IonMenuButton, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
import { call, pin, share, trash } from 'ionicons/icons';
  
  const Favorites: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Favorites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen color = "light">
       <IonList inset={true}>
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Tanjiro Kamado</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions slot="end">
                     <IonItemOption color="warning">
                       <IonIcon slot="icon-only" icon={pin}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="tertiary">
                       <IonIcon slot="icon-only" icon={share}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="danger" expandable={true}>
                       <IonIcon slot="icon-only" icon={trash}></IonIcon>
                     </IonItemOption>
                   </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Nezuko Kamado</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions slot="end">
                     <IonItemOption color="warning">
                       <IonIcon slot="icon-only" icon={pin}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="tertiary">
                       <IonIcon slot="icon-only" icon={share}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="danger" expandable={true}>
                       <IonIcon slot="icon-only" icon={trash}></IonIcon>
                     </IonItemOption>
                   </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Zenitsu Agatsuma</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions slot="end">
                     <IonItemOption color="warning">
                       <IonIcon slot="icon-only" icon={pin}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="tertiary">
                       <IonIcon slot="icon-only" icon={share}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="danger" expandable={true}>
                       <IonIcon slot="icon-only" icon={trash}></IonIcon>
                     </IonItemOption>
                   </IonItemOptions>
                 </IonItemSliding>
       
                 <IonItemSliding>
                   <IonItem button={true}>
                     <IonAvatar aria-hidden="true" slot="start">
                       <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                     </IonAvatar>
                     <IonLabel>Inosuke Hashibira</IonLabel>
                     <IonIcon aria-hidden="true" icon={call} slot="start"></IonIcon>
                   </IonItem>
                   <IonItemOptions slot="end">
                     <IonItemOption color="warning">
                       <IonIcon slot="icon-only" icon={pin}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="tertiary">
                       <IonIcon slot="icon-only" icon={share}></IonIcon>
                     </IonItemOption>
                     <IonItemOption color="danger" expandable={true}>
                       <IonIcon slot="icon-only" icon={trash}></IonIcon>
                     </IonItemOption>
                   </IonItemOptions>
                 </IonItemSliding>
               </IonList>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Favorites;