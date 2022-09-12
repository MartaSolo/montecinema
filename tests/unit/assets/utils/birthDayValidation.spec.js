import { describe, expect, it } from "vitest";
import isAdult from "@/assets/utils/birthDayValidation.js";

describe("isAdult", () => {
  it("returns true if a person is at least 18 years old", () => {
    expect(isAdult("2002-02-06")).toEqual(true);
  });
  it("returns false if a person is not 18 year old yet", () => {
    expect(isAdult("2012-04-18")).toEqual(false);
  });
});
