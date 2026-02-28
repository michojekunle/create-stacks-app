import { defineConfig } from "vitest/config";
import {
  vitestSetupFilePath,
  getClarinetVitestsArgv,
} from "@stacks/clarinet-sdk/vitest";

export default defineConfig({
  test: {
    environment: "clarinet",
    setupFiles: [vitestSetupFilePath],
    environmentOptions: {
      clarinet: {
        ...getClarinetVitestsArgv(),
      },
    },
    include: ["**/*.test.ts"],
  },
});
