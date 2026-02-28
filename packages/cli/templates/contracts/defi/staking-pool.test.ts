import { describe, expect, it } from "vitest";
import { Cl } from "@stacks/transactions";

const accounts = simnet.getAccounts();
const deployer = accounts.get("deployer")!;
const wallet1 = accounts.get("wallet_1")!;

describe("Staking Pool Contract", () => {
  it("should allow staking tokens", () => {
    // 1. Mint some tokens to wallet1 first
    simnet.callPublicFn(
      "token",
      "mint",
      [Cl.uint(1000), Cl.principal(wallet1)],
      deployer,
    );

    // 2. Stake tokens
    // Note: In a real scenario, wallet1 would need to authorize the staking-pool contract
    // or the transfer call inside 'stake' would fail if it's not the sender.
    // The current template implementation has (contract-call? token transfer amount tx-sender (as-contract tx-sender) none)
    // which works because tx-sender is the one calling 'stake'.

    const block = simnet.callPublicFn(
      "staking-pool",
      "stake",
      [Cl.contractPrincipal(deployer, "token"), Cl.uint(500)],
      wallet1,
    );

    expect(block.result).toBeOk(Cl.bool(true));

    // 3. Check stake
    const result = simnet.callReadOnlyFn(
      "staking-pool",
      "get-stake",
      [Cl.principal(wallet1)],
      deployer,
    );
    expect(result.result).toBeOk(Cl.uint(500));
  });

  it("should allow unstaking tokens", () => {
    // 1. Setup: Mint and Stake
    simnet.callPublicFn(
      "token",
      "mint",
      [Cl.uint(1000), Cl.principal(wallet1)],
      deployer,
    );
    simnet.callPublicFn(
      "staking-pool",
      "stake",
      [Cl.contractPrincipal(deployer, "token"), Cl.uint(1000)],
      wallet1,
    );

    // 2. Unstake
    const block = simnet.callPublicFn(
      "staking-pool",
      "unstake",
      [Cl.contractPrincipal(deployer, "token"), Cl.uint(400)],
      wallet1,
    );
    expect(block.result).toBeOk(Cl.bool(true));

    // 3. Check remaining stake
    const result = simnet.callReadOnlyFn(
      "staking-pool",
      "get-stake",
      [Cl.principal(wallet1)],
      deployer,
    );
    expect(result.result).toBeOk(Cl.uint(600));
  });
});
