import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react";
import React from "react";

import { IStory } from "@interfaces";

import "./StoryListItem.scss";

interface StoryListItemProps {
    story: IStory;
}

export const StoryListItem: React.FC<StoryListItemProps> = ({story}) => {
    return (
        <IonCard routerLink={`/story/${story.storyId}`}>
            <IonImg alt={story.story.images[0].caption} src={story.story.images[0].src}/>
            <IonCardHeader>
                <IonCardTitle>{story.story.headline}</IonCardTitle>
                <IonCardSubtitle>{story.story.intro}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
};
