# Project Spec: CryptoX

## Product Vision

CryptoX is a zero-budget crypto analytics platform focused on EVM chains. It helps independent researchers, retail analysts, builders, and curious investors discover where meaningful on-chain opportunity may exist without requiring paid data vendors, paid infrastructure, or proprietary dashboards.

The product should answer a practical question:

> Which EVM chains, protocols, tokens, and liquidity pools are showing promising activity relative to their size, risk, and recent momentum?

CryptoX is not a trading bot or financial advisor. It is a discovery and research tool that aggregates free public data, normalizes it into comparable metrics, and surfaces transparent signals through an explainable Opportunity Score.

## MVP Scope

The MVP should provide a read-only analytics experience with enough depth to compare EVM ecosystems and identify research leads.

Included in MVP:

- Chain overview dashboard for supported EVM networks.
- Protocol and token discovery tables.
- Basic liquidity pool analytics.
- Watchlist for chains, protocols, tokens, and pools.
- Historical snapshots for trend comparison.
- Opportunity Score v1 for ranking assets and protocols.
- Search across chains, tokens, protocols, and pools.
- Free API integrations only.
- Cached ingestion pipeline to reduce rate-limit pressure.
- Clear source attribution for each metric.
- No custody, wallet connection, trading, swaps, or portfolio execution.

## Non-Goals

CryptoX should intentionally avoid the following during MVP:

- No trading, swap routing, transaction signing, or wallet custody.
- No personalized investment advice.
- No paid APIs, paid infrastructure, or subscription-only datasets.
- No centralized exchange order book analytics.
- No Solana, Bitcoin, Cosmos, Move-based, or non-EVM ecosystems in MVP.
- No real-time tick-by-tick market data.
- No leverage, liquidation, derivatives, or options analytics.
- No social-login-heavy community features.
- No token launchpad, airdrop farming automation, or botting workflows.
- No machine-learning predictions presented as price forecasts.

## Supported Chains

MVP chains are selected for EVM compatibility, public data availability, ecosystem relevance, and likely coverage across free analytics APIs.

| Chain | Chain ID | MVP Priority | Rationale |
| --- | ---: | --- | --- |
| Ethereum Mainnet | 1 | P0 | Largest EVM settlement layer and baseline for comparison. |
| Base | 8453 | P0 | Strong consumer and DeFi growth with broad free data coverage. |
| Arbitrum One | 42161 | P0 | Major L2 DeFi ecosystem with deep liquidity. |
| Optimism | 10 | P0 | Major OP Stack ecosystem and L2 benchmark. |
| Polygon PoS | 137 | P0 | Established EVM ecosystem with broad token and protocol coverage. |
| BNB Smart Chain | 56 | P1 | High activity, retail-heavy DeFi ecosystem. |
| Avalanche C-Chain | 43114 | P1 | Mature EVM chain with DeFi and gaming activity. |
| Gnosis Chain | 100 | P1 | Lower-cost EVM chain with public-good and payments activity. |
| Linea | 59144 | P2 | Emerging zkEVM ecosystem. |
| Scroll | 534352 | P2 | Emerging zkEVM ecosystem. |
| zkSync Era | 324 | P2 | Emerging L2 ecosystem with distinct activity patterns. |
| Mantle | 5000 | P2 | Modular L2 ecosystem with DeFi incentives. |

P0 chains must be functional at launch. P1 chains should be included if free data coverage is stable. P2 chains can be enabled after the ingestion model is proven.

## User Personas

### Independent Crypto Researcher

Wants to compare chain and protocol momentum without paying for premium dashboards. Values transparent formulas, exportable tables, and source links.

Primary needs:

- Find fast-growing protocols before they become obvious.
- Compare TVL, volume, fees, and user activity across chains.
- Understand whether activity is organic or incentive-driven.

### Retail DeFi User

Wants a simpler way to discover opportunities without reading many separate explorers, DEX pages, and analytics dashboards.

Primary needs:

- See which pools or tokens have unusual growth.
- Save a watchlist.
- Avoid obvious scams, illiquid assets, and misleading spikes.

### Web3 Builder

Wants to understand where users, liquidity, and protocol categories are growing before choosing a chain or ecosystem.

Primary needs:

- Compare chain-level activity.
- Identify underserved categories.
- Track competitor protocols.

### Content Creator or Analyst

Wants fast research inputs for reports, newsletters, videos, and social posts.

Primary needs:

- Rank opportunities by explainable criteria.
- Pull charts and tables.
- Cite sources cleanly.

## Core Pages

### 1. Dashboard

The default landing page after opening the app. It should show the current market and on-chain overview across supported chains.

Key elements:

- Global summary cards: total tracked TVL, 24h DEX volume, active chains, top opportunity.
- Chain comparison table.
- Top Opportunity Score movers.
- Protocol category highlights.
- Data freshness indicators.

### 2. Chains

Compares supported EVM chains.

Key elements:

- TVL, stablecoin supply, DEX volume, protocol count, fee/revenue estimates where available.
- 1d, 7d, and 30d percentage changes.
- Chain detail drilldown.
- Filters by L1, optimistic rollup, zk rollup, sidechain, appchain, and modular L2.

### 3. Chain Detail

Shows a single chain in depth.

Key elements:

- Chain metrics over time.
- Top protocols on the chain.
- Top tokens and pools.
- Category breakdown.
- Opportunity Score distribution.

### 4. Protocols

Ranks protocols across supported chains.

Key elements:

- Protocol name, category, chains, TVL, volume, fees, revenue, growth, and score.
- Filter by category, chain, minimum TVL, and growth period.
- Protocol detail drilldown.

### 5. Protocol Detail

Shows a single protocol in depth.

Key elements:

- Multi-chain deployment breakdown.
- Historical TVL and volume.
- Category peers.
- Related pools and tokens.
- Source links.

### 6. Tokens

Ranks tracked tokens by market and on-chain metrics.

Key elements:

- Price, market cap, liquidity, volume, age, volatility, and score.
- Filter by chain, category, liquidity, age, and risk flags.
- Token detail drilldown.

### 7. Pools

Ranks liquidity pools across supported DEXs.

Key elements:

- DEX, pair, chain, liquidity, volume, fees estimate, volume/liquidity ratio, and score.
- Filters for chain, DEX, minimum liquidity, and suspicious-liquidity flags.

### 8. Watchlist

User-saved list of chains, protocols, tokens, and pools.

Key elements:

- Saved entities grouped by type.
- Recent metric changes.
- Notes field.
- Optional local-only mode for privacy.

### 9. Search

Unified search experience.

Key elements:

- Search by name, symbol, contract address, protocol, pool address, or chain.
- Result grouping by entity type.
- Data source labels.

### 10. Methodology

Explains how data is collected, normalized, scored, and limited.

Key elements:

- Opportunity Score v1 formula.
- Data source list.
- Known limitations.
- Risk disclaimer.

## Information Architecture

Primary navigation:

- Dashboard
- Chains
- Protocols
- Tokens
- Pools
- Watchlist
- Methodology

Secondary navigation:

- Search
- Filters
- Saved views
- Data freshness
- Source details

Entity hierarchy:

- Chain
- Protocol
- Token
- Pool
- Snapshot
- Score
- Source

Suggested URL structure:

- `/`
- `/chains`
- `/chains/:chainSlug`
- `/protocols`
- `/protocols/:protocolSlug`
- `/tokens`
- `/tokens/:chainSlug/:address`
- `/pools`
- `/pools/:chainSlug/:poolAddress`
- `/watchlist`
- `/methodology`
- `/search?q=:query`

## Technical Architecture

The architecture should optimize for low operating cost, clear data lineage, and graceful degradation when free APIs are rate limited.

### Frontend

- React-based web app framework.
- Server-rendered or statically generated pages where practical.
- Table-first interface with charts for trends.
- Responsive layout for desktop-first research workflows with acceptable mobile support.
- No wallet connection in MVP.

### Backend

- Lightweight API layer for normalized analytics endpoints.
- Background ingestion jobs for scheduled data pulls.
- Explicit cache windows per data source.
- Source-aware error handling so one failed provider does not break the whole dashboard.
- Read-heavy design with precomputed snapshots and scores.

### Data Storage

- PostgreSQL-compatible relational database preferred.
- Local development can use local PostgreSQL or SQLite if needed.
- Production should target a free hosted PostgreSQL tier if available.
- Time-series data should be stored as periodic snapshots, not full raw block histories.

### Jobs and Scheduling

- Scheduled ingestion every 1-6 hours depending on source limits.
- Daily rollups for long-term trend calculations.
- Manual refresh endpoint for development only.
- Ingestion logs stored for observability and debugging.

### Caching Strategy

- Cache API responses before normalization.
- Cache normalized entity snapshots.
- Use stale-while-revalidate behavior for UI reads.
- Show freshness timestamps prominently.
- Prefer missing partial data over fabricated values.

### Deployment

The platform should be deployable for free using combinations such as:

- Static or serverless frontend hosting.
- Free database tier.
- Free scheduled jobs through platform cron or CI.
- Public dashboards with no authenticated paid account requirement.

The project must remain portable if any free provider changes terms.

## Database Schema

The MVP schema should support normalized entities, historical snapshots, scoring, watchlists, and ingestion observability.

### `chains`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `chain_id` | Integer | EVM chain ID. Unique. |
| `slug` | Text | Stable URL slug. Unique. |
| `name` | Text | Display name. |
| `chain_type` | Text | L1, L2, sidechain, appchain, etc. |
| `native_token_symbol` | Text | ETH, MATIC, BNB, AVAX, etc. |
| `explorer_url` | Text | Primary block explorer. |
| `rpc_reference_url` | Text | Public RPC reference or docs link. |
| `is_enabled` | Boolean | Feature flag for supported chains. |
| `priority` | Text | P0, P1, or P2. |
| `created_at` | Timestamp | Record creation time. |
| `updated_at` | Timestamp | Last metadata update. |

### `protocols`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `slug` | Text | Stable protocol slug. Unique. |
| `name` | Text | Display name. |
| `category` | Text | DEX, lending, liquid staking, bridge, derivatives, yield, etc. |
| `website_url` | Text | Official site if available. |
| `logo_url` | Text | Optional logo. |
| `source_ref` | Text | Primary source identifier. |
| `created_at` | Timestamp | Record creation time. |
| `updated_at` | Timestamp | Last metadata update. |

### `protocol_chains`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `protocol_id` | UUID | Foreign key to `protocols`. |
| `chain_id` | UUID | Foreign key to `chains`. |
| `external_slug` | Text | Provider-specific protocol-chain identifier. |
| `is_active` | Boolean | Whether this deployment is currently tracked. |

### `tokens`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `chain_id` | UUID | Foreign key to `chains`. |
| `address` | Text | Contract address. Native assets use a reserved address convention. |
| `symbol` | Text | Token symbol. |
| `name` | Text | Token name. |
| `decimals` | Integer | Token decimals. |
| `coingecko_id` | Text | Optional market data mapping. |
| `is_stablecoin` | Boolean | Stablecoin classification. |
| `created_at` | Timestamp | Record creation time. |
| `updated_at` | Timestamp | Last metadata update. |

### `pools`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `chain_id` | UUID | Foreign key to `chains`. |
| `protocol_id` | UUID | Optional foreign key to `protocols`. |
| `address` | Text | Pool or pair contract address. |
| `dex_name` | Text | DEX source name. |
| `base_token_id` | UUID | Foreign key to `tokens`. |
| `quote_token_id` | UUID | Foreign key to `tokens`. |
| `fee_tier_bps` | Integer | Optional fee tier in basis points. |
| `created_at` | Timestamp | Record creation time. |
| `updated_at` | Timestamp | Last metadata update. |

### `chain_snapshots`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `chain_id` | UUID | Foreign key to `chains`. |
| `snapshot_at` | Timestamp | Snapshot time. |
| `tvl_usd` | Numeric | Total value locked. |
| `stablecoin_supply_usd` | Numeric | Stablecoin supply if available. |
| `dex_volume_24h_usd` | Numeric | 24h DEX volume. |
| `fees_24h_usd` | Numeric | Estimated fees if available. |
| `active_protocol_count` | Integer | Number of active tracked protocols. |
| `source_set` | JSON | Source names and timestamps. |

### `protocol_snapshots`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `protocol_id` | UUID | Foreign key to `protocols`. |
| `chain_id` | UUID | Optional foreign key to `chains`. |
| `snapshot_at` | Timestamp | Snapshot time. |
| `tvl_usd` | Numeric | Protocol TVL. |
| `volume_24h_usd` | Numeric | 24h volume where relevant. |
| `fees_24h_usd` | Numeric | 24h fees where available. |
| `revenue_24h_usd` | Numeric | 24h revenue where available. |
| `users_24h` | Integer | Optional active users if available. |
| `source_set` | JSON | Source names and timestamps. |

### `token_snapshots`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `token_id` | UUID | Foreign key to `tokens`. |
| `snapshot_at` | Timestamp | Snapshot time. |
| `price_usd` | Numeric | Current or latest known price. |
| `market_cap_usd` | Numeric | Market cap if available. |
| `fdv_usd` | Numeric | Fully diluted valuation if available. |
| `liquidity_usd` | Numeric | Aggregate DEX liquidity if available. |
| `volume_24h_usd` | Numeric | 24h trading volume. |
| `price_change_24h_pct` | Numeric | 24h price change. |
| `source_set` | JSON | Source names and timestamps. |

### `pool_snapshots`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `pool_id` | UUID | Foreign key to `pools`. |
| `snapshot_at` | Timestamp | Snapshot time. |
| `liquidity_usd` | Numeric | Pool liquidity. |
| `volume_24h_usd` | Numeric | 24h volume. |
| `txns_24h` | Integer | 24h transaction count if available. |
| `fee_apr_estimate_pct` | Numeric | Estimated fee APR if calculable. |
| `source_set` | JSON | Source names and timestamps. |

### `opportunity_scores`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `entity_type` | Text | `chain`, `protocol`, `token`, or `pool`. |
| `entity_id` | UUID | ID of scored entity. |
| `snapshot_at` | Timestamp | Score timestamp. |
| `score` | Numeric | 0-100 final score. |
| `momentum_score` | Numeric | 0-100 component. |
| `liquidity_score` | Numeric | 0-100 component. |
| `valuation_score` | Numeric | 0-100 component. |
| `activity_score` | Numeric | 0-100 component. |
| `risk_score` | Numeric | 0-100 component where higher is safer. |
| `explanation` | JSON | Human-readable factor breakdown. |

### `watchlist_items`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `entity_type` | Text | `chain`, `protocol`, `token`, or `pool`. |
| `entity_id` | UUID | ID of saved entity. |
| `label` | Text | Optional user label. |
| `notes` | Text | Optional research notes. |
| `created_at` | Timestamp | Record creation time. |
| `updated_at` | Timestamp | Last update time. |

### `data_sources`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `name` | Text | Source display name. |
| `base_url` | Text | API or documentation URL. |
| `cost_model` | Text | Must be free for MVP. |
| `rate_limit_notes` | Text | Human-maintained notes. |
| `is_enabled` | Boolean | Whether source is active. |

### `ingest_runs`

| Column | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Primary key. |
| `source_id` | UUID | Foreign key to `data_sources`. |
| `job_name` | Text | Ingestion job identifier. |
| `started_at` | Timestamp | Start time. |
| `finished_at` | Timestamp | Finish time. |
| `status` | Text | `success`, `partial`, or `failed`. |
| `records_read` | Integer | Count from source. |
| `records_written` | Integer | Count persisted. |
| `error_message` | Text | Failure detail if applicable. |

## API Integrations

All integrations must be free to use for MVP. If a provider introduces required payment, the integration should be disabled or replaced.

### Primary Free Data Sources

| Source | Purpose | MVP Usage |
| --- | --- | --- |
| DeFiLlama | Chain TVL, protocol TVL, stablecoin supply, fees, revenue, DEX volume where available. | Primary protocol and chain metrics. |
| DexScreener | Token pairs, pool liquidity, DEX volume, token discovery. | Primary pool and pair discovery. |
| CoinGecko Free/Demo API | Token prices, market caps, FDV, basic market metadata. | Supplemental token market data. |
| Etherscan-compatible explorers | Contract metadata, token transfers, basic explorer links. | Optional enrichment where free API keys exist. |
| Blockscout explorers | Explorer data for supported chains where available. | Free fallback for contract and transaction lookup. |
| Public RPC endpoints | Minimal on-chain reads such as token metadata when APIs are incomplete. | Fallback only, heavily cached. |

### Integration Principles

- Prefer aggregate analytics APIs over raw RPC scans to stay within zero-budget constraints.
- Do not depend on a single provider for launch-critical pages.
- Store provider-specific IDs separately from normalized internal IDs.
- Track `source_set` on every snapshot so the UI can explain where values came from.
- Cache aggressively and respect provider rate limits.
- Never scrape websites when an official or documented API is available.
- Display "not available" for missing metrics rather than estimating without disclosure.

### Initial Data Pull Cadence

| Data Type | Cadence | Notes |
| --- | --- | --- |
| Chain TVL | Every 6 hours | Slow-moving enough for coarse refresh. |
| Protocol TVL | Every 6 hours | Used for trend and score calculations. |
| DEX volume | Every 1-3 hours | More time-sensitive, but still rate-limit aware. |
| Token price | Every 1-3 hours | Cache and batch where possible. |
| Pool liquidity | Every 1-3 hours | Needed for pool rankings. |
| Score recomputation | After each successful ingest | Store score snapshots. |
| Daily rollups | Daily | Used for 7d and 30d trend windows. |

## Opportunity Score v1

Opportunity Score v1 is an explainable 0-100 ranking system. It is designed for research prioritization, not investment advice.

### Goals

- Highlight entities with improving fundamentals or activity.
- Penalize obvious fragility such as low liquidity, extreme volatility, or stale data.
- Be transparent enough that users can understand why something ranks highly.
- Work even when some metrics are missing.

### Entity Coverage

Opportunity Score v1 applies to:

- Chains
- Protocols
- Tokens
- Pools

Each entity type can share the same top-level score model while using entity-specific metric mappings.

### Component Weights

| Component | Weight | Meaning |
| --- | ---: | --- |
| Momentum | 30% | Growth in TVL, volume, fees, liquidity, users, or price depending on entity type. |
| Liquidity | 20% | Depth and reliability of available liquidity or capital base. |
| Activity | 20% | Usage intensity such as volume, transactions, fees, or active protocol count. |
| Valuation Efficiency | 15% | Relationship between market cap/FDV and activity or liquidity where available. |
| Risk Adjustment | 15% | Staleness, low liquidity, concentration, volatility, missing data, or suspicious spikes. |

### Normalization

Each component should be normalized to a 0-100 percentile-like score within comparable cohorts:

- Chains compared against supported chains.
- Protocols compared against protocols in the same category where possible.
- Tokens compared against tokens on the same chain and liquidity band.
- Pools compared against pools on the same chain and DEX category.

### Formula

Final score:

`Opportunity Score = (Momentum * 0.30) + (Liquidity * 0.20) + (Activity * 0.20) + (Valuation Efficiency * 0.15) + (Risk Adjustment * 0.15)`

If a component is unavailable, redistribute its weight across available components and mark the score as partial.

### Momentum Inputs

Potential inputs:

- 24h, 7d, and 30d TVL growth.
- 24h, 7d, and 30d volume growth.
- Fee or revenue growth where available.
- Liquidity growth for pools.
- Stablecoin supply growth for chains.

Suggested weighting inside Momentum:

- 7d growth: 50%
- 30d growth: 30%
- 24h growth: 20%

This reduces overreaction to short-lived spikes.

### Liquidity Inputs

Potential inputs:

- Token or pool liquidity in USD.
- Protocol TVL.
- Chain TVL.
- Stablecoin supply.
- Liquidity distribution across pools.

Low-liquidity entities should be capped even if momentum is high.

### Activity Inputs

Potential inputs:

- DEX volume.
- Fees.
- Revenue.
- Transaction count.
- Active users if available from free data.
- Protocol count for chains.

### Valuation Efficiency Inputs

Potential inputs:

- Volume / market cap.
- Fees / market cap.
- TVL / FDV.
- Volume / liquidity.
- Revenue / TVL.

This component should be skipped when valuation data is unavailable.

### Risk Adjustment Inputs

Risk Adjustment is a "higher is safer" score.

Penalties:

- Stale source data.
- Extremely low liquidity.
- Very young pool or token.
- Sudden one-period spike without follow-through.
- Missing token metadata.
- Unverified or ambiguous contract data.
- Excessive price volatility.
- Liquidity concentrated in one pool.
- Honeypot or transfer-tax suspicion if reliable free data becomes available.

### Score Labels

| Score Range | Label | Meaning |
| --- | --- | --- |
| 85-100 | Exceptional | Strong research candidate with multiple confirming signals. |
| 70-84 | Strong | Worth reviewing soon. |
| 55-69 | Emerging | Interesting but needs more confirmation. |
| 40-54 | Watch | Mixed or early signal. |
| 0-39 | Weak | Low priority or high risk. |

### Score Transparency

Every score should include:

- Final score.
- Component scores.
- Missing components.
- Main positive drivers.
- Main risk drivers.
- Last updated timestamp.
- Source list.

## Development Roadmap

### Phase 0: Specification and Setup

Deliverables:

- Project specification.
- Data source inventory.
- Chain list and entity model.
- Design direction for dashboard-first product.

Exit criteria:

- MVP scope is agreed.
- Data model is stable enough to implement.
- No paid vendor is required.

### Phase 1: Data Foundation

Deliverables:

- Database schema.
- Seed data for supported chains.
- Source registry.
- Ingestion jobs for chain and protocol metrics.
- Ingestion logging.

Exit criteria:

- P0 chains can be populated.
- Protocol TVL snapshots are stored.
- Failed source calls are visible and recoverable.

### Phase 2: Discovery Tables

Deliverables:

- Dashboard.
- Chains page.
- Protocols page.
- Basic search.
- Freshness indicators.

Exit criteria:

- Users can compare chains and protocols from normalized data.
- Tables support sorting and filtering.
- Every displayed metric has a source.

### Phase 3: Tokens and Pools

Deliverables:

- Token ingestion.
- Pool ingestion.
- Tokens page.
- Pools page.
- Entity detail pages.

Exit criteria:

- Tokens and pools are mapped to chains.
- Liquidity and volume are available for major pools.
- Missing market data is handled gracefully.

### Phase 4: Opportunity Score v1

Deliverables:

- Score computation service.
- Score snapshots.
- Methodology page.
- Score explanations in UI.
- Watchlist.

Exit criteria:

- Chains, protocols, tokens, and pools receive scores.
- Score inputs are inspectable.
- Partial scores are clearly marked.

### Phase 5: Launch Polish

Deliverables:

- Responsive layout.
- Empty, loading, error, and stale-data states.
- Basic accessibility pass.
- Performance optimization.
- Launch checklist.

Exit criteria:

- MVP launch criteria are met.
- Platform can run within zero-budget constraints.

## Launch Criteria

CryptoX is ready for public MVP launch when the following are true:

- P0 chains are enabled and populated.
- Chain and protocol dashboards load successfully from cached normalized data.
- Token and pool pages include meaningful coverage for top entities.
- Opportunity Score v1 is computed and displayed with explanations.
- Data freshness is visible on every analytics page.
- Source attribution is visible for every major metric.
- The app handles API failures without crashing.
- The database can be rebuilt from configured free sources.
- No paid API key, paid database, paid server, or paid job runner is required.
- Pages are usable on desktop and acceptable on mobile.
- Methodology and risk disclaimers are published.
- There is no transaction signing, custody, or trading functionality.
- Basic performance target is met: primary pages render usable content within 3 seconds from cached data.
- Basic accessibility target is met: keyboard navigation and readable contrast for main workflows.

## Future Roadmap

Post-MVP improvements should expand depth without breaking the zero-budget principle.

### Analytics Expansion

- Category-specific dashboards.
- Stablecoin flow analytics.
- Bridge flow analytics if reliable free data is available.
- Fee and revenue leaderboards.
- Protocol peer comparison.
- Chain ecosystem heatmaps.
- Pool fee APR trend estimates.
- Contract age and deployment metadata.

### Personalization

- Saved filters.
- Watchlist alerts.
- Local-first notes.
- Shareable research views.
- CSV export.

### Data Quality

- Multi-source reconciliation.
- Confidence score per metric.
- Entity merge tooling.
- Manual override workflow for bad mappings.
- Better stale-data detection.

### Risk Features

- Liquidity concentration warnings.
- New-token caution labels.
- Suspicious volume heuristics.
- Contract verification indicators.
- Admin-key and ownership metadata where free sources support it.

### Chain Expansion

- Add more EVM-compatible chains after source coverage is confirmed.
- Consider modular appchains and rollups.
- Keep non-EVM chains out of scope unless the product vision changes.

### Advanced Scoring

- Opportunity Score v2 with category-specific weighting.
- Historical backtesting of score behavior.
- Score change alerts.
- Separate Safety Score and Growth Score.
- User-adjustable score weighting.

### Collaboration and Publishing

- Public watchlists.
- Embeddable charts.
- Research notes export.
- Snapshot permalinks.
- Weekly ecosystem report generation.

