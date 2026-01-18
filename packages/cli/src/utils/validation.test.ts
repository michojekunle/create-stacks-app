import { describe, it, expect } from "vitest";
import { validateProjectName } from "./validation";

describe("validateProjectName", () => {
  it("should accept valid names", () => {
    expect(() => validateProjectName("my-app")).not.toThrow();
    expect(() => validateProjectName("app123")).not.toThrow();
  });

  it("should reject invalid names", () => {
    expect(() => validateProjectName("My-App")).toThrow();
    expect(() => validateProjectName("app space")).toThrow();
    expect(() => validateProjectName("-app")).toThrow();
  });
});
