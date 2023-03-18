import { getStories, getStoryById } from "./storyService";
import { Story } from "@models";

describe("Story Service", () => {
    describe("getStories", () => {
        it("should get all stories from the API", async () => {
            const stories = await getStories();

            expect(stories).toHaveLength(10);
        });

        it("should return the correct type", async () => {
            const stories = await getStories();

            expect(stories[0]).toBeInstanceOf(Story);
        });
    });

    describe("getStoryById", () => {
        it("should return the correct type", async () => {
            const story = await getStoryById("300259036");

            expect(story).toBeInstanceOf(Story);
        });

        it("should get the correct story", async () => {
            const story = await getStoryById("300259036");

            expect(story.storyId).toBe("300259036");
            expect(story.publishedDate).toBe("05:00 23/03/2021");
        });
    });
});
