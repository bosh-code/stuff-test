import React from "react";
import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";

export const HomeFab: React.FC = () => {
    return (
        <IonFab slot="fixed" vertical="top" horizontal="start">
            <IonFabButton routerLink="/home">
                <IonIcon icon={chevronBackOutline}></IonIcon>
            </IonFabButton>
        </IonFab>
    );
};
