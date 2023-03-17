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
import React, { useEffect, useState } from "react";

import { StoryCard } from "@components";
import { IStory } from "@interfaces";
import { getStories } from "@services";

import "./Home.scss";

export const Home: React.FC = () => {

    const [stories, setStories] = useState<IStory[]>([]);

    // Set a nice page title
    useEffect(() => {
        document.title = "Latest Breaking Code | Stuff Test";
    }, []);

    // Clear and reload stories
    const updateStories = async () => {
        setStories([]);
        const newStories = await getStories();
        for (let i = 0; i < newStories.stories.length; i++) {
            console.log(newStories.stories[i].story.section);
        }
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
                    <IonTitle>Stories</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Stories
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div id="stories-container">
                    {stories.map(story =>
                        <StoryCard key={"story-" + story.storyId} story={story}/>
                    )}
                </div>

            </IonContent>
        </IonPage>
    );
};
