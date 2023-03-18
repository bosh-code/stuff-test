import { IStoriesDTO } from "@interfaces";
import { Story } from "@models";

const url = "https://www.stuff.co.nz/static/spade/nCuL9ZmbMXzhGbHTJNJYU6i45y9hj0DJrhPteuU6MGB68zM5goWqk5Q1aNkh.json";

// Private method to get stories from API
const getStoriesFromAPI = async (): Promise<IStoriesDTO> => {
    const response = await fetch(url);
    return await response.json();
};

// Get an array of Story objects
export const getStories = async (): Promise<Story[]> => {
    const stories = await getStoriesFromAPI();
    return stories.stories.map((story) => new Story(story));
}

// Get a single Story object
export const getStoryById = async (id: string): Promise<Story> => {
    const stories = await getStoriesFromAPI();
    const foundStory = stories.stories.find((story) => story.storyId === id);
    return new Story(foundStory!);
}
