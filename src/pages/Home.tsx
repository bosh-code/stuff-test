import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import React, { useState } from "react";

import "./Home.css";

import { ExploreContainer } from "@components";
import { IStory } from "@interfaces";
import { getStories } from "@services";

export const Home: React.FC = () => {

    const [stories, setStories] = useState<IStory[]>([]);

    useIonViewWillEnter(async () => {
        console.log("useIonViewWillEnter");
        const newStories = await getStories();
        setStories(newStories.stories);
    });

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ExploreContainer/>
            </IonContent>
        </IonPage>
    );
};
