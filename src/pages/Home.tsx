import {
    IonContent,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTitle,
    IonToolbar,
    RefresherEventDetail,
    useIonViewWillEnter
} from "@ionic/react";
import React, { useState } from "react";

import { StoryListItem } from "@components";
import { IStory } from "@interfaces";
import { getStories } from "@services";

import "./Home.scss";

export const Home: React.FC = () => {

    const [stories, setStories] = useState<IStory[]>([]);

    // Clear and reload stories
    const updateStories = async () => {
        setStories([]);
        const newStories = await getStories();
        setStories(newStories.stories);
    };

    // On page load, update stories
    useIonViewWillEnter(async () => {
        await updateStories();
    });

    // On refresh, update stories
    const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
        setTimeout(async () => {
            // Any calls to load data go here
            console.log("handleRefresh");
            await updateStories();
            event.detail.complete();
        }, 2000);
    };

    return (
        <IonPage id="home-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Home
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div id="stories-container">
                    {stories.map(story =>
                        <StoryListItem key={"story-" + story.storyId} story={story}/>
                    )}
                </div>

            </IonContent>
        </IonPage>
    );
};
