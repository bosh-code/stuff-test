import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
    describe("Rendering", () => {
        it("should render the App", () => {
            const {baseElement} = render(<App/>);

            expect(baseElement).toBeDefined();
        });
    });
});
