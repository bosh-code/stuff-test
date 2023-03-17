import { IImage } from "./IImage";

/**
 * The child Story interface
 */
export interface IStoryDetails {
    headline: string;
    url: string;
    intro: string;
    section: string;
    images: IImage[];
}
