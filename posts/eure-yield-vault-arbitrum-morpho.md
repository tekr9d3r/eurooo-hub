---
title: "EURe Yield Lands on Arbitrum — What's Actually Inside the New Morpho Vault"
date: "2026-10-14"
description: "kpk has launched a EURe yield vault on Morpho and Arbitrum, and it already holds 476,000 EURe. It exists because MiCA forbids Monerium from paying you interest. Here's how it works, what it really earns, and why the headline APY is a mirage."
coverImage: "/images/eure-yield-vault-arbitrum-morpho.png"
featured: true
---

## A Euro Yield Vault, Because the Issuer Legally Can't Pay You

There is a structural reason euro stablecoin yield looks the way it does in Europe, and it is worth stating before any discussion of vaults and APYs.

**MiCA Article 50 prohibits e-money token issuers from granting interest.** The ban explicitly treats "any remuneration or other benefit related to the length of time during which a holder holds" the token as interest. Paragraph 2 extends the same prohibition to crypto-asset service providers offering services related to those tokens.

In plain terms: Monerium cannot pay you for holding EURe. Nor can a MiCA-licensed exchange pay you for parking EURe with it. This is not an oversight — it is deliberate policy, designed to stop euro stablecoins competing with bank deposits. It is also one of the 86 questions in the [MiCA review consultation that closed on September 30](/blog/eur-stablecoin-market-stats-october-2026).

The consequence is that every euro of yield available to euro stablecoin holders has to come from somewhere other than the issuer — which in practice means third-party DeFi: lending markets, liquidity pools, vaults. That is the gap the new **kpk EURe Yield** vault is built for.

---

## What Launched

**kpk** — the asset-management infrastructure business formerly known as karpatkey, which has run onchain treasuries for Gnosis and ENS since 2020 — has deployed a EURe yield vault on **Morpho**, on **Arbitrum**.

The verifiable facts, read directly from the contract rather than the marketing page:

- **Name:** KPK EURe Yield (`KPK_EURe_Yield`)
- **Vault address:** `0x7bfdE3A7bd346Da92521D384563F89BB45dE1f60`
- **Underlying asset:** Monerium EURe on Arbitrum (`0x0c06cCF38114ddfc35e07427B9424adcca9F44F8`)
- **Standard:** ERC-4626
- **Current size:** **476,210 EURe**
- **Share price:** 1.00027 EURe — meaning roughly **0.03% of yield has accrued since inception**

That last number is the most informative one in the list. A share price this close to parity means the vault is days old. Everything below should be read as a description of a product that has barely started, not one with a track record.

For scale: there is about **€5.18M of EURe on Arbitrum** in total, out of **€32.1M of EURe across all chains**. This single vault already holds roughly **9% of every EURe on Arbitrum**, and about 1.5% of all EURe in existence. That is a remarkable concentration for a product this new, and it tells you the vault was seeded rather than organically filled.

---

## How It Works

The vault supplies EURe into approved isolated lending markets on Morpho and allocates across them using tier-based rules. Yield comes from overcollateralised borrowers paying interest — there is no token emission, no points programme, and no structured product wrapped around it. Someone borrows against collateral, and depositors earn the borrow rate.

**Four approved markets**, all rated tier A, each capped at 90% allocation, all priced by Chainlink oracles:

- **wstETH/EURe** (Lido) — 86% LLTV
- **WBTC/EURe** (BitGo) — 86% LLTV
- **WETH/EURe** — 86% LLTV
- **USDC/EURe** (Circle) — 91.5% LLTV

**Mechanics worth knowing:**

- **Liquidity target ≥30%** — the vault aims to keep at least 30% of assets withdrawable on demand.
- **0% performance fee.** Unusual, and almost certainly a land-grab: kpk is competing for the euro yield category before it exists at scale.
- **0.01% forceDeallocation penalty** — the cost of forcing liquidity out of an allocated market.
- **Three automated agents** — rebalance, exit and monitoring — tracking borrow utilisation, APY shifts, price divergence against reference venues, oracle liveness and liquidity depth. kpk is explicit that these are deterministic, logic-based programs with limited auditable permissions, **not AI systems**. Worth noting, given how loosely "agent" is used.
- **Curator and allocator Safe is 2-of-5**, at `0xb3E0fe1ac9AcaBC64132171CD88A91312Da71C25`.

---

## The Headline APY Is a Mirage

Here is where the live market data matters more than the documentation.

Pulling the current state of those four markets on Arbitrum:

- **wstETH/EURe** — supply APY **17.18%**, utilisation **99.8%**, roughly 19,500 EURe supplied
- **WBTC/EURe** — supply APY **2.83%**, utilisation 78.4%, roughly 31,900 EURe supplied
- **WETH/EURe** — supply APY **2.78%**, utilisation ~90%
- **USDC/EURe** — supply APY **2.78%**, utilisation ~90%

If you see 17% quoted anywhere for EURe lending, that is the wstETH market — and it is not a yield, it is a symptom. A 17% supply rate at **99.8% utilisation in a market containing under 20,000 EURe** means borrow demand has run into a wall of almost no supply. Morpho's rate curves spike hard as utilisation approaches 100% precisely to attract suppliers.

What happens next is arithmetic. As the vault deploys meaningful capital into that market, utilisation falls and the rate collapses toward the others. You cannot put 476,000 EURe into a 20,000 EURe market and keep 17%. The realistic blended return, once allocation settles across four markets paying roughly 2.8%, is **low single digits** — in the same range as the [Moonwell Flagship EURC vault on Base](https://app.morpho.org/), the largest comparable euro vault, which currently runs about **3.07%** on roughly $826K.

That is not a criticism of the vault. It is a correction to the number you will see screenshotted.

---

## The Risks Worth Naming

kpk's own documentation lists liquidity and utilisation risk, oracle risk, concentration risk, and smart-contract and dependency risk, and states plainly that these "cannot be fully eliminated." That is more honest than most. Three deserve emphasis:

**The markets are tiny relative to the vault.** Across the two visibly active markets there is roughly 51,000 EURe supplied. The vault holds 476,210. Most of its capital is either sitting in the liquidity buffer or waiting for depth that does not yet exist. A vault cannot earn lending yield on capital it cannot deploy.

**99.8% utilisation is in direct tension with a 30% liquidity promise.** The wstETH market is, right now, almost entirely lent out. The ≥30% liquidity target and the exit agent exist precisely to manage this, but a thin market at near-full utilisation is the condition under which withdrawal latency actually bites.

**Concentration is the whole design.** Four markets, all EURe-denominated, all on one chain, all priced by one oracle provider, with a 90% cap that permits near-total allocation to a single market. The tier-A rating applies to the collateral, not to the market's depth.

Add the unresolved regulatory question: the "DeFi is outside Article 50" reading holds that the ban binds issuers and service providers, not independent lending markets. That is the prevailing interpretation, but Article 50(2)'s reach over CASPs "providing services related to" EMTs has not been tested. If ESMA's September proposal to tighten the stablecoin regime is adopted, the perimeter around euro yield products is exactly the kind of thing that gets redrawn.

---

## Why This Matters Beyond One Vault

EURe is the fourth-largest euro stablecoin at €32.1M, and the most widely deployed by chain count — Gnosis (€19.8M), Arbitrum (€5.2M), Ethereum (€3.9M), Polygon (€2.7M) and more. It has never had the distribution of EURC or the institutional backing of EURCV. What it has had is genuine onchain usage.

Until now, holding EURe meant holding a euro that did nothing. MiCA guarantees that stays true at the issuer level — permanently, by design. So the entire competitive surface for euro stablecoin yield sits in third-party DeFi, and it has been almost empty: a handful of EURC vaults, nothing of size, and a market where the largest euro-denominated lending vault anywhere holds under a million dollars.

A professional treasury manager launching a zero-fee euro vault with an institutional risk framework is the first serious attempt to build that layer. Whether it works depends on something the vault cannot control: borrowers. Lending yield requires loan demand, and euro borrow demand onchain is currently measured in tens of thousands.

That is the real question this launch poses. Not whether euro savers want yield — obviously they do, and MiCA has made the issuer route permanently unavailable. The question is whether anyone wants to borrow euros onchain at a rate that makes supplying them worthwhile.

---

## Key Takeaways

1. **The vault exists because MiCA Article 50 bans EMT issuers from paying interest.** Monerium legally cannot pay EURe holders yield. Third-party DeFi is the only remaining route.
2. **It is live and already sizeable** — 476,210 EURe, roughly 9% of all EURe on Arbitrum — but the share price of 1.00027 shows it is days old with essentially no track record.
3. **Ignore any 17% figure.** That is the wstETH/EURe market at 99.8% utilisation on under 20,000 EURe. It will compress as capital arrives. Expect low single digits.
4. **0% performance fee signals a land-grab,** not generosity. The euro yield category barely exists and kpk is moving to own it.
5. **The binding constraint is borrow demand, not deposits.** Roughly 51,000 EURe is borrowed across the active markets. Until that grows, the yield has nowhere to come from.
6. **The regulatory perimeter is untested.** Article 50(2) reaches CASPs servicing EMTs, and ESMA has just proposed tightening the stablecoin regime. Euro yield products sit close to a line nobody has drawn precisely.

---

## Frequently Asked Questions

**What is the kpk EURe Yield vault?**
An ERC-4626 vault on Arbitrum that supplies Monerium's EURe into approved isolated lending markets on Morpho and earns the resulting borrow interest. It is operated by kpk, formerly karpatkey, which has managed onchain treasuries for Gnosis and ENS since 2020. The vault address is `0x7bfdE3A7bd346Da92521D384563F89BB45dE1f60`.

**How much is in it?**
Roughly 476,210 EURe as of October 14, 2026, read directly from the contract. That is about 9% of all EURe on Arbitrum and 1.5% of EURe in circulation across all chains.

**What yield does it actually pay?**
There is no meaningful track record yet — the share price is 1.00027, implying about 0.03% accrued since inception. Three of its four underlying markets currently pay roughly 2.8%; the fourth shows 17.18% but only because it sits at 99.8% utilisation on under 20,000 EURe, and that rate will fall as capital is deployed. A realistic expectation is low single digits, comparable to the ~3.07% on the largest EURC vault.

**Why can't Monerium just pay interest on EURe directly?**
MiCA Article 50 prohibits e-money token issuers from granting interest, and defines interest to include any benefit tied to how long a holder holds the token. Paragraph 2 extends the prohibition to crypto-asset service providers offering services related to those tokens. The policy intent is to stop euro stablecoins competing with bank deposits.

**Is earning yield on a euro stablecoin through DeFi legal in the EU?**
The prevailing interpretation is that Article 50 binds issuers and service providers, not independent lending markets, so third-party DeFi yield falls outside it. That reading has not been tested, and Article 50(2)'s reach over CASPs is the open question. ESMA proposed tightening the stablecoin regime on September 30, 2026. This is not legal advice — the perimeter here is genuinely unsettled.

**What are the main risks?**
kpk's own framework names liquidity and utilisation risk affecting withdrawal latency, oracle risk, concentration risk, and smart-contract and dependency risk across Morpho, the collateral assets and the oracle systems. Beyond those: the underlying markets are very small relative to the vault, one of them sits at 99.8% utilisation, and all four are EURe-denominated on a single chain with a single oracle provider.

**Which chain holds the most EURe?**
Gnosis, with roughly €19.8M of the €32.1M total. Arbitrum is second at about €5.2M, followed by Ethereum (€3.9M) and Polygon (€2.7M).

---

*Vault size, share price and asset address were read directly from the Arbitrum contract on October 14, 2026. Market rates and utilisation from the [Morpho API](https://api.morpho.org/graphql); EURe supply from [DefiLlama](https://defillama.com/stablecoins). Vault parameters from [kpk's documentation](https://kpk.io/). This is not investment or legal advice. For live EUR stablecoin data and DeFi yields, visit [eurooo.xyz](https://www.eurooo.xyz/stats).*
