import {
    IonChip,
    IonContent,
    IonHeader,
    IonLabel,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSegment,
    IonSegmentButton,
    IonTitle,
    IonToolbar,
    RefresherEventDetail,
    useIonViewWillEnter
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { StoryCard } from "@components";
import { IStory, Section } from "@interfaces";
import { getStories } from "@services";

import "./Home.scss";

export const Home: React.FC = () => {
    // Stories state
    const [stories, setStories] = useState<IStory[]>([]);
    // Section filter, default is all sections
    const [sectionFilter, setSectionFilter] = useState<string>("");
    // Date Sorting segment, default is newest first
    const [dateSort, setDateSort] = useState<string>("default");

    // Set a nice page title
    useEffect(() => {
        document.title = "Latest Breaking Code | Stuff Test";
    }, []);

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
            await updateStories();
            event.detail.complete();
        }, 2000);
    };

    // If section filter is set to argument, clear it, otherwise set it to new section
    const updateSectionFilter = (section: string) => {
        if (sectionFilter === section) {
            setSectionFilter("");
        } else {
            setSectionFilter(section);
        }
    };

    return (
        <IonPage id="home-page">

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Stories</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonRefresher slot="fixed"
                              onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">
                            Stories
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div id="controls-container">
                    {/* Date Sorting */}
                    <IonSegment value={dateSort}
                                onIonChange={(event) => setDateSort(event.detail.value!)}>
                        <IonSegmentButton value="default">
                            <IonLabel>Newest</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="alternate">
                            <IonLabel>Oldest</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>

                    {/* Section Chips */}
                    <span id="chips-container">
                    {Object.keys(Section).map((section, index) => {
                        return <IonChip color={sectionFilter === section ? "primary" : ""}
                                        key={index}
                                        onClick={() => updateSectionFilter(section)}>
                            <IonLabel>
                                {section}
                            </IonLabel>
                        </IonChip>;
                    })}
                </span>
                </div>

                {/* Section filter is set */}
                {sectionFilter !== "" && <div id="stories-container">
                    {/* Map over filtered stories that have the same section */}
                    {stories.filter(story => story.story.section === sectionFilter).map(story =>
                        <StoryCard key={"story-" + story.storyId}
                                   story={story}/>
                    )}
                </div>}

                {/* Section filter not set, show all stories */}
                {sectionFilter === "" && <div id="stories-container">
                    {stories.map(story =>
                        <StoryCard key={"story-" + story.storyId}
                                   story={story}/>
                    )}
                </div>}
            </IonContent>
        </IonPage>
    );
};
