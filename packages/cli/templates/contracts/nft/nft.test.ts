import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

describe("NFT Contract (SIP-009)", () => {
  describe("Minting", () => {
    it("should mint an NFT successfully", () => {
      const block = simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );
      expect(block.result).toBeOk(Cl.uint(1));
    });

    it("should increment last token id", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const result = simnet.callReadOnlyFn(
        "nft",
        "get-last-token-id",
        [],
        deployer
      );
      expect(result.result).toBeOk(Cl.uint(1));
    });

    it("should store token URI", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const result = simnet.callReadOnlyFn(
        "nft",
        "get-token-uri",
        [Cl.uint(1)],
        deployer
      );
      expect(result.result).toBeOk(Cl.some(Cl.stringAscii("ipfs://test-uri-1")));
    });
  });

  describe("Ownership", () => {
    it("should return correct owner", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const result = simnet.callReadOnlyFn(
        "nft",
        "get-owner",
        [Cl.uint(1)],
        deployer
      );
      expect(result.result).toBeOk(Cl.some(Cl.principal(wallet1)));
    });
  });

  describe("Transfer", () => {
    it("should transfer NFT successfully", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const block = simnet.callPublicFn(
        "nft",
        "transfer",
        [Cl.uint(1), Cl.principal(wallet1), Cl.principal(wallet2)],
        wallet1
      );
      expect(block.result).toBeOk(Cl.bool(true));

      const result = simnet.callReadOnlyFn(
        "nft",
        "get-owner",
        [Cl.uint(1)],
        deployer
      );
      expect(result.result).toBeOk(Cl.some(Cl.principal(wallet2)));
    });

    it("should fail if sender is not owner", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const block = simnet.callPublicFn(
        "nft",
        "transfer",
        [Cl.uint(1), Cl.principal(wallet1), Cl.principal(wallet2)],
        wallet2
      );
      expect(block.result).toBeErr(Cl.uint(101));
    });
  });

  describe("Marketplace", () => {
    it("should list NFT for sale", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      const block = simnet.callPublicFn(
        "nft",
        "list-for-sale",
        [Cl.uint(1), Cl.uint(1000000)],
        wallet1
      );
      expect(block.result).toBeOk(Cl.bool(true));

      const listing = simnet.callReadOnlyFn(
        "nft",
        "get-listing",
        [Cl.uint(1)],
        deployer
      );
      expect(listing.result).toBeSome(
        Cl.tuple({
          price: Cl.uint(1000000),
          seller: Cl.principal(wallet1),
        })
      );
    });

    it("should allow purchase of listed NFT", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      simnet.callPublicFn(
        "nft",
        "list-for-sale",
        [Cl.uint(1), Cl.uint(1000000)],
        wallet1
      );

      const block = simnet.callPublicFn("nft", "buy", [Cl.uint(1)], wallet2);
      expect(block.result).toBeOk(Cl.uint(1));

      const result = simnet.callReadOnlyFn(
        "nft",
        "get-owner",
        [Cl.uint(1)],
        deployer
      );
      expect(result.result).toBeOk(Cl.some(Cl.principal(wallet2)));
    });

    it("should unlist NFT", () => {
      simnet.callPublicFn(
        "nft",
        "mint",
        [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
        deployer
      );

      simnet.callPublicFn(
        "nft",
        "list-for-sale",
        [Cl.uint(1), Cl.uint(1000000)],
        wallet1
      );

      const block = simnet.callPublicFn("nft", "unlist", [Cl.uint(1)], wallet1);
      expect(block.result).toBeOk(Cl.bool(true));

      const listing = simnet.callReadOnlyFn(
        "nft",
        "get-listing",
        [Cl.uint(1)],
        deployer
      );
      expect(listing.result).toBeNone();
    });
  });
});
