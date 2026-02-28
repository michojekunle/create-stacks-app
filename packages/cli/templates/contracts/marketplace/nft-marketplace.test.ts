import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;
const wallet2 = accounts.get("wallet_2")!;

describe("NFT Marketplace Contract", () => {
  it("should allow listing an NFT for sale", () => {
    // 1. Mint an NFT to wallet1
    simnet.callPublicFn(
      "nft",
      "mint",
      [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
      deployer,
    );

    // 2. List on marketplace
    const block = simnet.callPublicFn(
      "nft-marketplace",
      "list-asset",
      [Cl.contractPrincipal(deployer, "nft"), Cl.uint(1), Cl.uint(5000)],
      wallet1,
    );

    expect(block.result).toBeOk(Cl.bool(true));
  });

  it("should allow purchasing a listed NFT", () => {
    // 1. Setup: Mint and List
    simnet.callPublicFn(
      "nft",
      "mint",
      [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
      deployer,
    );

    simnet.callPublicFn(
      "nft-marketplace",
      "list-asset",
      [Cl.contractPrincipal(deployer, "nft"), Cl.uint(1), Cl.uint(5000)],
      wallet1,
    );

    // 2. Purchase from wallet2
    const block = simnet.callPublicFn(
      "nft-marketplace",
      "purchase-asset",
      [Cl.contractPrincipal(deployer, "nft"), Cl.uint(1)],
      wallet2,
    );

    expect(block.result).toBeOk(Cl.bool(true));

    // 3. Verify ownership changed
    const result = simnet.callReadOnlyFn(
      "nft",
      "get-owner",
      [Cl.uint(1)],
      deployer,
    );
    expect(result.result).toBeOk(Cl.some(Cl.principal(wallet2)));
  });

  it("should allow unlisting a listed NFT", () => {
    // 1. Setup: Mint and List
    simnet.callPublicFn(
      "nft",
      "mint",
      [Cl.principal(wallet1), Cl.stringAscii("ipfs://test-uri-1")],
      deployer,
    );

    simnet.callPublicFn(
      "nft-marketplace",
      "list-asset",
      [Cl.contractPrincipal(deployer, "nft"), Cl.uint(1), Cl.uint(5000)],
      wallet1,
    );

    // 2. Unlist from wallet1
    const block = simnet.callPublicFn(
      "nft-marketplace",
      "unlist-asset",
      [Cl.contractPrincipal(deployer, "nft"), Cl.uint(1)],
      wallet1,
    );

    expect(block.result).toBeOk(Cl.bool(true));

    // 3. Verify ownership returned to wallet1
    const result = simnet.callReadOnlyFn(
      "nft",
      "get-owner",
      [Cl.uint(1)],
      deployer,
    );
    expect(result.result).toBeOk(Cl.some(Cl.principal(wallet1)));
  });
});
