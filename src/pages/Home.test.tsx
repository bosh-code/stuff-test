import React from "react";
import { render } from "@testing-library/react";

import { Home } from "./Home";

describe("Home Page", () => {
    describe("Rendering", () => {
        it("should render the Home page", () => {
            const {baseElement} = render(<Home/>);

            expect(baseElement).toBeDefined();
        });
    });
});
