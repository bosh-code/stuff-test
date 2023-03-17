import { IStoriesDTO } from "../interfaces";

const url = "https://www.stuff.co.nz/static/spade/nCuL9ZmbMXzhGbHTJNJYU6i45y9hj0DJrhPteuU6MGB68zM5goWqk5Q1aNkh.json";

export const getStories = async (): Promise<IStoriesDTO> => {
    console.log("getStories");
    const response = await fetch(url);
    return await response.json();
};
