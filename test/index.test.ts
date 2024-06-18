import { describe , it , expect } from "vitest";
import { sum } from "../src/index.ts";

describe("SUM", () => {
    it("should work", () => {
        expect(sum(1, 2)).toBe(3);
    });
})