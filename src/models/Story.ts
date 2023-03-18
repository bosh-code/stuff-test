import { IStory, IStoryDetails } from "@interfaces";
import { DateTime } from "luxon";

export class Story {
    storyId: string;
    viewCount: number;
    publishedDate: DateTime;
    story: IStoryDetails;

    constructor(story: IStory) {
        this.storyId = story.storyId;
        this.viewCount = story.viewCount;
        this.publishedDate = DateTime.fromFormat(story.publishedDate, "HH:mm dd/MM/yyyy");
        this.story = story.story;
    }
}
