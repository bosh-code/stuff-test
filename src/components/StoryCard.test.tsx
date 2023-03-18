import React from "react";
import { render } from "@testing-library/react";

import { StoryCard } from "./StoryCard";
import { Story } from "@models";
import { Section } from "@enums";

const story = new Story({
    "storyId": "300259036",
    "viewCount": 104908,
    "publishedDate": "05:00 23/03/2021",
    "story": {
        "headline": "Sounds murder witness Guy Wallace dies in suspected suicide",
        "url": "https://www.stuff.co.nz/national/300259036/sounds-murder-witness-guy-wallace-dies-in-suspected-suicide",
        "intro": "Guy Wallace, one of the last people to see Ben Smart and Olivia Hope alive, has died in a suspected suicide at his West Coast home.",
        "section": Section.National,
        "images": [
            {
                "type": "Defcon Image",
                "size": "220x418",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffBigHeadline.418x220.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Splash Image",
                "size": "400x300",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffSplash.300x400.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Standard Image",
                "size": "349x620",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffLandscapeSixteenByNine.620x349.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Thumbnail 1:1",
                "size": "1000x1000",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffThumbnailSquare.1000x1000.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Small Thumbnail 16:9",
                "size": "900x1600",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffThumbnailSixteenByNine.1600x900.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Strap Image",
                "size": "200x300",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffLandscapeThreeByTwo.300x200.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Thumbnail 4:5",
                "size": "1250x1000",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffThumbnailFourByFive.1000x1250.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Small Thumbnail",
                "size": "60x90",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/w/image.related.StuffThumbnail.90x60.4yrlcs.png/1616453583135.jpg",
                "caption": "Guy Wallace is the water taxi driver who delivered Ben Smart and Olivia Hope to  yacht in Endeavour Inlet early on New Years day. Marlborough Express pic PIC IN OTHER NEWS PAPERS FOLDER.2/12/98."
            },
            {
                "type": "Standard Image",
                "size": "349x620",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/n/i/u/h/image.related.StuffLandscapeSixteenByNine.620x349.4yrlcs.png/1616444995603.jpg",
                "caption": "Ben Smart and Olivia Hope at a function in February 1997."
            },
            {
                "type": "Standard Image",
                "size": "349x620",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/r/l/c/n/image.related.StuffLandscapeSixteenByNine.620x349.4yrlcs.png/1616444995603.jpg",
                "caption": "Wallace was one of the last people to see Smart and Hope alive."
            },
            {
                "type": "Standard Image",
                "size": "349x620",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/p/s/1/4/image.related.StuffLandscapeSixteenByNine.620x349.4yrlcs.png/1616444995603.jpg",
                "caption": "Scott Watson was convicted of the murders of Smart and Hope, and was sentenced to life in prison with a minimum parole period of 17 years."
            },
            {
                "type": "Standard Image",
                "size": "349x620",
                "src": "https://resources.stuff.co.nz/content/dam/images/4/y/r/l/g/v/image.related.StuffLandscapeSixteenByNine.620x349.4yrlcs.png/1616444995603.jpg",
                "caption": "Wallace has died in a suspected suicide at his home on Fernhill Place in Greymouth."
            }
        ]
    }
});

describe("StoryCard Component", () => {
    describe("Rendering", () => {
        it("should render the StoryCard component", () => {
            const {baseElement} = render(<StoryCard story={story}/>);
            expect(baseElement).toBeDefined();
        });
    });
});
