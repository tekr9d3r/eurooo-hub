---
title: "Revolut Launched EURR. Here's What Actually Went Live."
date: "2026-08-27"
description: "Revolut began a gated EURR pilot on August 26, five days before it finishes deleting USDT from Europe. The token is issued by Stripe-owned Bridge, not Revolut — and it shares its ticker with a euro stablecoin that was exploited in May and now trades at six cents."
coverImage: "/images/revolut-eurr.png"
featured: false
---

## Revolut Enters the Euro Stablecoin Market

On August 26, 2026, Revolut [began rolling out EURR](https://www.coindesk.com/business/2026/08/26/euro-stablecoins-get-a-mainstream-push-as-revolut-begins-rolling-out-eurr-in-europe), a euro-pegged stablecoin, to selected customers in **Denmark, Poland and Portugal**. Roughly **2 million customers** are in the initial phase, out of Revolut's **80 million** globally. Expansion to other EEA markets is promised "later this year, subject to product, operational and regulatory readiness."

The timing is not subtle. Revolut finishes deleting USDT from the EEA and Switzerland on **August 31** — five days after EURR went live. Remaining USDT balances auto-convert to customers' base currency. The replacement arrived first.

This is the largest distribution event in the history of euro stablecoins. It is also more complicated than the headline suggests, in three ways that matter.

---

## Revolut Did Not Issue This Token

The single most important detail is buried in most coverage: **Revolut is not the issuer.**

EURR is issued by **Bridge Building S.A.**, a Luxembourg entity that holds the reserves and carries the regulatory obligation. Bridge is the stablecoin infrastructure company [Stripe agreed to acquire for $1.1 billion in October 2024](https://decrypt.co/376575/revolut-launches-euro-pegged-eurr-stablecoin). Revolut distributes the token through its Cyprus-regulated subsidiary. Bridge issues and holds; Revolut distributes.

Bridge's regulatory position was assembled quickly and deliberately. It secured **MiCA CASP authorisation and an EMI licence from Luxembourg's CSSF**, [announced on July 2, 2026](https://www.fintechfutures.com/blockchain-crypto-digital-assets/stripe-bridge-eu-mica-authorisation-e-money-licence), with an authorisation date of June 29 — one day before the MiCA transitional period closed. It entered the EU's EMT register on **August 7, 2026 as the 42nd authorised issuer**. Those approvals passport across all 27 member states, and they let Bridge issue **custom euro stablecoins for other brands**, along with virtual IBANs and EU-wide euro accounts.

Read that structure again, because it is the actual story. Stripe now owns a licensed, passportable euro stablecoin factory, and Revolut is its first marquee customer. EURR is a white-label product. If the model works, the next five neobanks that want a branded euro token do not need to build anything — they call Bridge.

That is a meaningfully different competitive threat to Circle than "Revolut launched a coin." Circle sells EURC as a product. Bridge sells the ability to have your own.

---

## The Ticker Problem

EURR is already taken.

**StablR**, a Malta-licensed EMI, has issued a euro stablecoin under the ticker EURR since 2024. StablR is not a minor footnote: Tether took a strategic equity stake in the company in December 2024, and StablR's tokens are minted through Tether's **Hadron** tokenisation platform.

There is now a genuine collision. DefiLlama currently lists **two separate assets both called EURR** — "StablR Euro" and "Revolut Euro" — as distinct rows in the same table.

It gets worse. In **May 2026, StablR's EURR was exploited.** An attacker compromised the private key to StablR's [minting multisig and minted at least 4.5 million unbacked EURR](https://www.theblock.co/post/402429/stablrs-eurr-and-usdr-depeg-after-attacker-mints-13-5-million-in-unbacked-tokens-through-multisig-exploit), dumping roughly $10.4 million of face value across EURR and USDR on decentralised exchanges for about $2.8 million in proceeds. Blockaid traced it to a key compromise rather than a smart contract bug — the attacker simply replaced the administrators and bypassed supply controls. EURR fell to $0.85 on the day. StablR suspended minting and redemption.

It never recovered. **StablR's EURR trades at roughly $0.06 today** — down about 95% from its peg — on 24-hour volume of under $2,000. Supply has fallen from around €7.5M to under €800K. This is not a depegged stablecoin; it is a dead one that has not been formally buried.

So Revolut has put a mass-market retail token into the hands of consumers under a ticker currently occupied by a Tether-affiliated stablecoin trading at six cents on the euro. Anyone searching "EURR" finds the exploit. Anyone setting a price alert on EURR is watching a corpse.

This is a self-inflicted and entirely avoidable problem, and it is the kind of thing that only looks small until the first support ticket from a customer who sent funds to the wrong contract. If you take one practical thing from this post: **verify the issuer and the contract address, not the ticker.**

---

## This Is a Gated Pilot, Not a Launch

The word "launch" is doing a lot of work in the headlines, so it is worth being precise about what exists today.

EURR is genuinely live: the contract is deployed on **Ethereum**, Bridge has minted against it, and the token is described as fully integrated into Revolut's retail app for **eligible customers** in the three pilot countries. This is not a press release about a future product.

But it is available to a deliberately small, gated group — a subset of users within Denmark, Poland and Portugal — and essentially nobody else. Wider EEA availability is stated as "later this year, subject to product, operational and regulatory readiness," which is a timeline with three escape hatches built into it. Additional chains and external wallet transfers are promised as liquidity develops, with a Revolut spokesperson saying transfers will open "more broadly as liquidity builds."

The on-chain float today is a seed mint measured in hundreds of tokens. That number is not a verdict on the product in either direction — a gated pilot is supposed to look like this, and reading it as either traction or failure would be wrong. The useful takeaway is narrower: **the "80 million customers" figure in the headlines describes Revolut's global user base, not access to EURR.** Roughly 2 million customers sit in the pilot markets, and only some of those can use it.

Judge this in six months, when the rollout has either cleared its three caveats or quietly slipped.

---

## Where This Lands in the Market

The euro stablecoin market as it stands today:

- **EURC** (Circle) — €454.9M, 58.6% share, flat over 30 days
- **EURCV** (SG Forge) — €176.6M, 22.8%, **up 18.9%**
- **EURI** (Banking Circle) — €38.6M, 5.0%
- **EURE** (Monerium) — €32.1M, 4.1%
- **EUROP** (Schuman) — €21.5M, 2.8%, **up 48.9%**

Total supply is **€776M** — another record, up from €757M three weeks ago.

The number that matters is EURC's. It has **fallen below 60% share for the first time**, to 58.6%, while EURCV compounds at nearly 19% a month. A year ago Circle had no real challenger. It now faces SG Forge at scale, CACEIS's institutional EURXT, a 37-bank Qivalis consortium in licensing, and Stripe's issuance stack sitting behind Europe's largest neobank.

---

## The ECB Is Not Applauding

None of this is happening with the central bank's blessing.

ECB President Christine Lagarde has [pushed back repeatedly on euro stablecoins](https://decrypt.co/367265/ecbs-lagarde-pushes-back-on-euro-stablecoins-warns-of-structural-weaknesses), calling the model structurally weak as a settlement foundation and warning that large-scale deposit migration into non-bank stablecoins would weaken bank lending and degrade the transmission of policy rates. The ECB has separately warned EU finance ministers that loosening euro stablecoin rules would weaken banks.

There is a live regulatory process attached to this. The European Commission is [gathering feedback until September 30](https://decrypt.co/373113/eu-set-to-revise-mica-in-2027-to-cover-foreign-stablecoin-issuers) on whether to reopen MiCA, with revisions expected to be taken up in **2027**. The specific gap Brussels wants to close is non-EU issuers operating in Europe — which is precisely the structural question a Stripe-owned, Luxembourg-licensed issuer serving a UK-headquartered neobank invites.

Revolut is moving into that window, not around it.

---

## Key Takeaways

1. **The issuer is Stripe, not Revolut.** Bridge Building S.A. holds the reserves and the licence. Revolut is the distribution channel. This is white-label infrastructure, and Bridge can sell the same thing to anyone.
2. **Stripe quietly built the more important asset.** MiCA CASP plus EMI from the CSSF, passportable across 27 states, live on the EMT register since August 7. The ability to mint branded euro stablecoins on demand is worth more than any single token.
3. **The EURR ticker is contested and carries serious baggage.** StablR's EURR — Tether-affiliated, Hadron-minted — was exploited in May 2026 and never recovered. It trades at roughly $0.06 today. Two assets now share the symbol, one of them effectively dead. Verify issuer and contract address, never the ticker.
4. **This is a gated pilot, not general availability.** The token is live and in the app, but only for eligible users in three countries. Wider EEA rollout is promised "later this year, subject to product, operational and regulatory readiness" — three conditions, any of which can move the date. The 80 million figure is Revolut's global user base, not EURR's addressable one.
5. **USDT out on August 31, EURR in on August 26.** Revolut engineered a five-day handoff for a captive base of EEA customers. That is the most deliberate stablecoin substitution any European platform has attempted.
6. **The market is at a record €776M and EURC just fell below 60%.** Circle is no longer growing into an empty field.

---

## Frequently Asked Questions

**What is Revolut's EURR?**
A euro-pegged stablecoin redeemable at €1, rolled out from August 26, 2026 to selected Revolut customers in Denmark, Poland and Portugal. It launched on Ethereum, with more chains and external wallet transfers planned as liquidity builds. Expansion to further EEA markets is expected later in 2026.

**Who actually issues EURR?**
Bridge Building S.A., a Luxembourg entity owned by Bridge — the stablecoin infrastructure firm Stripe agreed to buy for $1.1 billion in 2024. Bridge holds the reserves under MiCA and holds both CASP authorisation and an EMI licence from Luxembourg's CSSF. Revolut distributes the token via its Cyprus-regulated subsidiary but is not the issuer.

**Is Revolut's EURR the same as StablR's EURR?**
No, and this matters. StablR is a separate Malta-licensed issuer, backed by a Tether equity investment and minting via Tether's Hadron platform. Its EURR was exploited in May 2026 — an attacker compromised the minting multisig key and issued millions in unbacked tokens — and it never recovered, trading around $0.06 today against a €1 peg. Two distinct assets now share the EURR ticker, and price data, alerts and search results for "EURR" will frequently return the wrong one. Always confirm the issuer and contract address before transacting.

**Why did Revolut launch this now?**
Revolut completes its USDT removal across the EEA and Switzerland on August 31, 2026, after which remaining balances auto-convert to fiat. EURR launched five days earlier, giving customers a MiCA-compliant euro alternative inside the same app.

**Can I use EURR today?**
Only if you are an eligible Revolut customer in Denmark, Poland or Portugal. This is a gated pilot: the token is live and integrated into the retail app for that group, but it is not generally available. Revolut says wider EEA availability is expected "later this year, subject to product, operational and regulatory readiness." Circulating supply is currently a seed mint of a few hundred tokens, which is normal for a pilot at this stage and should not be read as either traction or failure.

**Does the 80 million customer figure mean 80 million people can use EURR?**
No. That is Revolut's global user base. About 2 million customers are in the three pilot markets, and only eligible users among them have access. The gap between distribution potential and current availability is the single most misreported part of this story.

**Does this threaten Circle's EURC?**
Indirectly, and the threat is structural rather than immediate. EURC holds €454.9M and 58.6% share — its first reading below 60%. The competitive risk is less that EURR outgrows EURC and more that Bridge's licensed, passportable issuance stack lets any large consumer platform launch a branded euro token without Circle. Circle sells a product; Bridge sells the factory.

**What does the ECB think?**
Christine Lagarde has warned that euro stablecoins have structural weaknesses as settlement infrastructure and that deposit migration could weaken bank lending and policy transmission. The European Commission is consulting until September 30, 2026 on reopening MiCA, with revisions expected in 2027 aimed partly at non-EU issuers operating in Europe.

---

*Data sourced from [DefiLlama Stablecoins](https://defillama.com/stablecoins), [CoinDesk](https://www.coindesk.com/), [Cointelegraph](https://cointelegraph.com/), [Decrypt](https://decrypt.co/) and [The Block](https://www.theblock.co/). Supply figures as of August 27, 2026. For live EUR stablecoin data and DeFi yields, visit [eurooo.xyz](https://www.eurooo.xyz/stats).*
