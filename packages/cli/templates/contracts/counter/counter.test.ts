import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;

describe("Counter Contract", () => {
  describe("Initialization", () => {
    it("should start at zero", () => {
      const result = simnet.callReadOnlyFn(
        "counter",
        "get-counter",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(0));
    });

    it("should have deployer as owner", () => {
      const result = simnet.callReadOnlyFn(
        "counter",
        "get-owner",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.principal(deployer));
    });
  });

  describe("Increment", () => {
    it("should increment counter by 1", () => {
      const block = simnet.callPublicFn("counter", "increment", [], deployer);
      expect(block.result).toBeOk(Cl.bool(true));

      const result = simnet.callReadOnlyFn(
        "counter",
        "get-counter",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(1));
    });

    it("should allow anyone to increment", () => {
      const block = simnet.callPublicFn("counter", "increment", [], wallet1);
      expect(block.result).toBeOk(Cl.bool(true));
    });
  });

  describe("Decrement", () => {
    it("should decrement counter by 1", () => {
      // First increment
      simnet.callPublicFn("counter", "increment", [], deployer);

      const block = simnet.callPublicFn("counter", "decrement", [], deployer);
      expect(block.result).toBeOk(Cl.bool(true));

      const result = simnet.callReadOnlyFn(
        "counter",
        "get-counter",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(0));
    });

    it("should fail when counter is at zero", () => {
      const block = simnet.callPublicFn("counter", "decrement", [], deployer);
      expect(block.result).toBeErr(Cl.uint(400));
    });
  });

  describe("Reset", () => {
    it("should allow owner to reset", () => {
      // First increment
      simnet.callPublicFn("counter", "increment", [], deployer);
      simnet.callPublicFn("counter", "increment", [], deployer);

      const block = simnet.callPublicFn("counter", "reset", [], deployer);
      expect(block.result).toBeOk(Cl.bool(true));

      const result = simnet.callReadOnlyFn(
        "counter",
        "get-counter",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(0));
    });

    it("should prevent non-owner from resetting", () => {
      const block = simnet.callPublicFn("counter", "reset", [], wallet1);
      expect(block.result).toBeErr(Cl.uint(403));
    });
  });

  describe("Set Counter", () => {
    it("should allow owner to set counter", () => {
      const block = simnet.callPublicFn(
        "counter",
        "set-counter",
        [Cl.uint(100)],
        deployer
      );
      expect(block.result).toBeOk(Cl.bool(true));

      const result = simnet.callReadOnlyFn(
        "counter",
        "get-counter",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(100));
    });

    it("should prevent non-owner from setting counter", () => {
      const block = simnet.callPublicFn(
        "counter",
        "set-counter",
        [Cl.uint(100)],
        wallet1
      );
      expect(block.result).toBeErr(Cl.uint(403));
    });
  });
});
