import {
    IonBackButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonImg,
    IonPage,
    IonToolbar,
    useIonViewWillEnter
} from "@ionic/react";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./StoryView.scss";

import { getStoryById } from "@services";
import { Story } from "@models";

export const StoryView: React.FC = () => {
    const [story, setStory] = useState<Story>();
    const params = useParams<{ id: string }>();

    // Set placeholder title for page
    document.title = "Latest Breaking Code | Stuff Test";

    // Set a nice page title
    useEffect(() => {
        document.title = `${story?.story.headline} | Stuff Test`;
    }, [story]);

    // Get story details
    useIonViewWillEnter(async () => {
        const story = await getStoryById(params.id);
        console.log("story", story);
        setStory(story);
    });

    return (
        <IonPage id="view-story-page">
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton text="Back" defaultHref="/"></IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {story ? (
                    <>
                        <IonImg alt={story.story.images[0].caption}
                                src={story.story.images[0].src}
                                placeholder="assets/images/story-card-image-placeholder.png"/>

                        <div className="ion-padding">
                            <span>
                                <IonChip>
                                    {story.story.section}
                                </IonChip>
                                <IonChip>
                                    {story.publishedDate.setLocale("nz").toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}
                                </IonChip>
                            </span>

                            <h1>{story.story.headline}</h1>

                            <p>
                                {story.story.intro}
                            </p>
                        </div>
                    </>
                ) : (
                    <div>Failed to load Story</div>
                )}
            </IonContent>
        </IonPage>
    );
};
