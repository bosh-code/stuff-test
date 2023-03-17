import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react";
import React from "react";

import { IStory } from "@interfaces";

import "./StoryCard.scss";

interface StoryListItemProps {
    story: IStory;
}

export const StoryCard: React.FC<StoryListItemProps> = ({story}) => {
    return (
        <IonCard routerLink={`/${story.story.section}/${story.storyId}`}>
            <IonImg alt={story.story.images[0].caption}
                    src={story.story.images[0].src}
                    placeholder="assets/images/story-card-image-placeholder.png"/>
            <IonCardHeader>
                <IonCardTitle>{story.story.headline}</IonCardTitle>
                <IonCardSubtitle>{story.story.intro.substring(0, 80)}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
};
