import { IStoryDetails } from "./IStoryDetails";

/**
 * The parent Story interface
 */
export interface IStory {
    storyId: string;
    viewCount: number;
    publishedDate: string;
    story: IStoryDetails;
}
