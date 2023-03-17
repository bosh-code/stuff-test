import { IImage } from "./IImage";
import { Section } from "./enums";

/**
 * The child Story interface
 */
export interface IStoryDetails {
    headline: string;
    url: string;
    intro: string;
    section: Section;
    images: IImage[];
}
