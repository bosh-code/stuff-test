import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from "@ionic/react";
import React from "react";

import { Story } from "@models";

interface StoryCardProps {
    story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({story}) => (
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

