import React from "react";
import { render } from "@testing-library/react";
import Router from "react-router-dom";

import { StoryView } from "./StoryView";

jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useParams: jest.fn()
}));

describe("StoryView Page", () => {
    describe("Rendering", () => {
        it("should render StoryView Page", () => {
            jest.spyOn(Router, "useParams").mockReturnValue({id: "300259036"});

            const {baseElement} = render(<StoryView/>);

            expect(baseElement).toBeDefined();
        });
    });
});
