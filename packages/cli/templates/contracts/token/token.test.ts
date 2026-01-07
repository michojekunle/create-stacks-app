import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

describe("Token Contract (SIP-010)", () => {
  describe("Token Info", () => {
    it("should return correct name", () => {
      const result = simnet.callReadOnlyFn("token", "get-name", [], deployer);
      expect(result.result).toBeOk(Cl.stringAscii("MyToken"));
    });

    it("should return correct symbol", () => {
      const result = simnet.callReadOnlyFn("token", "get-symbol", [], deployer);
      expect(result.result).toBeOk(Cl.stringAscii("MTK"));
    });

    it("should return correct decimals", () => {
      const result = simnet.callReadOnlyFn(
        "token",
        "get-decimals",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(6));
    });

    it("should return correct total supply", () => {
      const result = simnet.callReadOnlyFn(
        "token",
        "get-total-supply",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(1000000000000));
    });
  });

  describe("Balance", () => {
    it("should have initial supply at deployer", () => {
      const result = simnet.callReadOnlyFn(
        "token",
        "get-balance",
        [Cl.principal(deployer)],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(1000000000000));
    });

    it("should have zero balance for new accounts", () => {
      const result = simnet.callReadOnlyFn(
        "token",
        "get-balance",
        [Cl.principal(wallet1)],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(0));
    });
  });

  describe("Transfer", () => {
    it("should transfer tokens successfully", () => {
      const amount = 1000000; // 1 token

      const block = simnet.callPublicFn(
        "token",
        "transfer",
        [
          Cl.uint(amount),
          Cl.principal(deployer),
          Cl.principal(wallet1),
          Cl.none(),
        ],
        deployer
      );
      expect(block.result).toBeOk(Cl.bool(true));

      const balance = simnet.callReadOnlyFn(
        "token",
        "get-balance",
        [Cl.principal(wallet1)],
        deployer
      );
      expect(balance.result).toBeOk(Cl.uint(amount));
    });

    it("should fail if sender is not tx-sender", () => {
      const block = simnet.callPublicFn(
        "token",
        "transfer",
        [
          Cl.uint(1000000),
          Cl.principal(deployer),
          Cl.principal(wallet2),
          Cl.none(),
        ],
        wallet1
      );
      expect(block.result).toBeErr(Cl.uint(101));
    });
  });

  describe("Mint", () => {
    it("should allow owner to mint", () => {
      const block = simnet.callPublicFn(
        "token",
        "mint",
        [Cl.uint(1000000), Cl.principal(wallet1)],
        deployer
      );
      expect(block.result).toBeOk(Cl.bool(true));
    });

    it("should prevent non-owner from minting", () => {
      const block = simnet.callPublicFn(
        "token",
        "mint",
        [Cl.uint(1000000), Cl.principal(wallet1)],
        wallet1
      );
      expect(block.result).toBeErr(Cl.uint(100));
    });
  });

  describe("Burn", () => {
    it("should allow token holder to burn", () => {
      const block = simnet.callPublicFn(
        "token",
        "burn",
        [Cl.uint(1000000)],
        deployer
      );
      expect(block.result).toBeOk(Cl.bool(true));
    });
  });
});
