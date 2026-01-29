# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserLoginResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRegisterResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users/users.ts">login</a>() -> unknown</code>
- <code title="post /users/register">client.users.<a href="./src/resources/users/users.ts">register</a>({ ...params }) -> UserRegisterResponse</code>

## PasswordReset

Types:

- <code><a href="./src/resources/users/password-reset.ts">PasswordResetConfirmResponse</a></code>
- <code><a href="./src/resources/users/password-reset.ts">PasswordResetInitiateResponse</a></code>

Methods:

- <code title="post /users/password-reset/confirm">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">confirm</a>() -> unknown</code>
- <code title="post /users/password-reset/initiate">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">initiate</a>() -> unknown</code>

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me/me.ts">MeUpdateResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="put /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">update</a>({ ...params }) -> MeUpdateResponse</code>

### Preferences

Types:

- <code><a href="./src/resources/users/me/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me/preferences.ts">PreferenceUpdateResponse</a></code>

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> PreferenceRetrieveResponse</code>
- <code title="put /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>({ ...params }) -> PreferenceUpdateResponse</code>

### Security

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>({ ...params }) -> unknown</code>

### Biometrics

Types:

- <code><a href="./src/resources/users/me/biometrics.ts">BiometricRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/users/me/biometrics.ts">BiometricVerifyResponse</a></code>

Methods:

- <code title="get /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">retrieveStatus</a>() -> unknown</code>
- <code title="post /users/me/biometrics/verify">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">verify</a>() -> unknown</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountLinkResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountId) -> AccountRetrieveResponse</code>
- <code title="get /accounts/me">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts/accounts.ts">link</a>() -> unknown</code>

## Transactions

Types:

- <code><a href="./src/resources/accounts/transactions.ts">TransactionListPendingResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/transactions/pending">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">listPending</a>(accountId, { ...params }) -> unknown</code>

## BalanceHistory

## Statements

Types:

- <code><a href="./src/resources/accounts/statements.ts">StatementListResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/statements">client.accounts.statements.<a href="./src/resources/accounts/statements.ts">list</a>(accountId, { ...params }) -> StatementListResponse</code>

## Overdraft

Types:

- <code><a href="./src/resources/accounts/overdraft.ts">OverdraftUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/overdraft.ts">OverdraftGetResponse</a></code>

Methods:

- <code title="put /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">update</a>(accountId) -> unknown</code>
- <code title="get /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">get</a>(accountId) -> unknown</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionAddNotesResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionCategorizeResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(transactionId) -> TransactionRetrieveResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> unknown</code>
- <code title="put /transactions/{transactionId}/notes">client.transactions.<a href="./src/resources/transactions/transactions.ts">addNotes</a>(transactionId) -> TransactionAddNotesResponse</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions/transactions.ts">categorize</a>(transactionId) -> TransactionCategorizeResponse</code>

## Recurring

Types:

- <code><a href="./src/resources/transactions/recurring.ts">RecurringListResponse</a></code>

Methods:

- <code title="get /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">list</a>({ ...params }) -> unknown</code>

## Insights

Types:

- <code><a href="./src/resources/transactions/insights.ts">InsightGetTrendsResponse</a></code>

Methods:

- <code title="get /transactions/insights/spending-trends">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getTrends</a>() -> unknown</code>

# AI

## Advisor

Types:

- <code><a href="./src/resources/ai/advisor/advisor.ts">AdvisorChatResponse</a></code>
- <code><a href="./src/resources/ai/advisor/advisor.ts">AdvisorHistoryResponse</a></code>

Methods:

- <code title="post /ai/advisor/chat">client.ai.advisor.<a href="./src/resources/ai/advisor/advisor.ts">chat</a>({ ...params }) -> unknown</code>
- <code title="get /ai/advisor/chat/history">client.ai.advisor.<a href="./src/resources/ai/advisor/advisor.ts">history</a>({ ...params }) -> unknown</code>

### Tools

Types:

- <code><a href="./src/resources/ai/advisor/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /ai/advisor/tools">client.ai.advisor.tools.<a href="./src/resources/ai/advisor/tools.ts">list</a>({ ...params }) -> unknown</code>

## Oracle

### Simulate

Types:

- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunAdvancedResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunStandardResponse</a></code>

Methods:

- <code title="post /ai/oracle/simulate/advanced">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runAdvanced</a>({ ...params }) -> unknown</code>
- <code title="post /ai/oracle/simulate">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runStandard</a>() -> SimulateRunStandardResponse</code>

### Predictions

### Simulations

Types:

- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationListResponse</a></code>

Methods:

- <code title="get /ai/oracle/simulations/{simulationId}">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">retrieve</a>(simulationId) -> SimulationRetrieveResponse</code>
- <code title="get /ai/oracle/simulations">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">list</a>({ ...params }) -> unknown</code>

## Incubator

Types:

- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorGeneratePitchResponse</a></code>

Methods:

- <code title="post /ai/incubator/pitch">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">generatePitch</a>({ ...params }) -> unknown</code>

### Analysis

### Pitch

Types:

- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchRetrieveDetailsResponse</a></code>
- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchSubmitFeedbackResponse</a></code>

Methods:

- <code title="get /ai/incubator/pitch/{pitchId}/details">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">retrieveDetails</a>(pitchId) -> PitchRetrieveDetailsResponse</code>
- <code title="put /ai/incubator/pitch/{pitchId}/feedback">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">submitFeedback</a>(pitchId) -> unknown</code>

## Ads

Types:

- <code><a href="./src/resources/ai/ads.ts">AdListResponse</a></code>
- <code><a href="./src/resources/ai/ads.ts">AdGetOperationResponse</a></code>

Methods:

- <code title="get /ai/ads">client.ai.ads.<a href="./src/resources/ai/ads.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /ai/ads/operations/{operationId}">client.ai.ads.<a href="./src/resources/ai/ads.ts">getOperation</a>(operationId) -> unknown</code>

## Agent

## Models

# Corporate

## Compliance

### Audits

Types:

- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRequestResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRetrieveReportResponse</a></code>

Methods:

- <code title="post /corporate/compliance/audits">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">request</a>() -> unknown</code>
- <code title="get /corporate/compliance/audits/{auditId}/report">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">retrieveReport</a>(auditId) -> AuditRetrieveReportResponse</code>

## Treasury

Types:

- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryForecastCashFlowResponse</a></code>
- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryGetLiquidityPositionsResponse</a></code>

Methods:

- <code title="get /corporate/treasury/cash-flow/forecast">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">forecastCashFlow</a>({ ...params }) -> TreasuryForecastCashFlowResponse</code>
- <code title="get /corporate/treasury/liquidity-positions">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">getLiquidityPositions</a>() -> TreasuryGetLiquidityPositionsResponse</code>

### Sweeping

### Pooling

## Cards

Types:

- <code><a href="./src/resources/corporate/cards/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardFreezeResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardIssueVirtualResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardListTransactionsResponse</a></code>

Methods:

- <code title="get /corporate/cards">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /corporate/cards/{cardId}/freeze">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">freeze</a>(cardId) -> CardFreezeResponse</code>
- <code title="post /corporate/cards/virtual">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">issueVirtual</a>({ ...params }) -> CardIssueVirtualResponse</code>
- <code title="get /corporate/cards/{cardId}/transactions">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">listTransactions</a>(cardId, { ...params }) -> unknown</code>

### Controls

Types:

- <code><a href="./src/resources/corporate/cards/controls.ts">ControlUpdateResponse</a></code>

Methods:

- <code title="put /corporate/cards/{cardId}/controls">client.corporate.cards.controls.<a href="./src/resources/corporate/cards/controls.ts">update</a>(cardId) -> ControlUpdateResponse</code>

## Risk

### Fraud

#### Rules

Types:

- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="put /corporate/risk/fraud/rules/{ruleId}">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">update</a>(ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">list</a>({ ...params }) -> unknown</code>

## Governance

### Proposals

## Anomalies

Types:

- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyListResponse</a></code>
- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyUpdateStatusResponse</a></code>

Methods:

- <code title="get /corporate/anomalies">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">list</a>({ ...params }) -> unknown</code>
- <code title="put /corporate/anomalies/{anomalyId}/status">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">updateStatus</a>(anomalyId) -> unknown</code>

# Web3

## Wallets

Types:

- <code><a href="./src/resources/web3/wallets.ts">WalletCreateResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletListResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletGetBalanceResponse</a></code>

Methods:

- <code title="post /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">create</a>() -> unknown</code>
- <code title="get /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /web3/wallets/{walletId}/balances">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">getBalance</a>(walletId, { ...params }) -> unknown</code>

## Transactions

Types:

- <code><a href="./src/resources/web3/transactions.ts">TransactionInitiateResponse</a></code>

Methods:

- <code title="post /web3/transactions/initiate">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">initiate</a>() -> unknown</code>

## NFTs

Types:

- <code><a href="./src/resources/web3/nfts.ts">NFTListResponse</a></code>

Methods:

- <code title="get /web3/nfts">client.web3.nfts.<a href="./src/resources/web3/nfts.ts">list</a>({ ...params }) -> unknown</code>

## SmartContracts

# Payments

## Domestic

## International

Types:

- <code><a href="./src/resources/payments/international.ts">InternationalGetStatusResponse</a></code>

Methods:

- <code title="get /payments/international/{paymentId}/status">client.payments.international.<a href="./src/resources/payments/international.ts">getStatus</a>(paymentId) -> unknown</code>

## Fx

Types:

- <code><a href="./src/resources/payments/fx.ts">FxConvertResponse</a></code>
- <code><a href="./src/resources/payments/fx.ts">FxGetRatesResponse</a></code>

Methods:

- <code title="post /payments/fx/convert">client.payments.fx.<a href="./src/resources/payments/fx.ts">convert</a>() -> unknown</code>
- <code title="get /payments/fx/rates">client.payments.fx.<a href="./src/resources/payments/fx.ts">getRates</a>({ ...params }) -> FxGetRatesResponse</code>

# Sustainability

Types:

- <code><a href="./src/resources/sustainability/sustainability.ts">SustainabilityGetFootprintResponse</a></code>

Methods:

- <code title="get /sustainability/carbon-footprint">client.sustainability.<a href="./src/resources/sustainability/sustainability.ts">getFootprint</a>() -> unknown</code>

## Offsets

## Impact

# Marketplace

Types:

- <code><a href="./src/resources/marketplace/marketplace.ts">MarketplaceListProductsResponse</a></code>

Methods:

- <code title="get /marketplace/products">client.marketplace.<a href="./src/resources/marketplace/marketplace.ts">listProducts</a>({ ...params }) -> unknown</code>

## Offers

Types:

- <code><a href="./src/resources/marketplace/offers.ts">OfferRedeemResponse</a></code>

Methods:

- <code title="post /marketplace/offers/{offerId}/redeem">client.marketplace.offers.<a href="./src/resources/marketplace/offers.ts">redeem</a>(offerId) -> unknown</code>

# Lending

## Decisions

# Investments

## Portfolios

Types:

- <code><a href="./src/resources/investments/portfolios.ts">PortfolioRetrieveResponse</a></code>
- <code><a href="./src/resources/investments/portfolios.ts">PortfolioUpdateResponse</a></code>
- <code><a href="./src/resources/investments/portfolios.ts">PortfolioListResponse</a></code>
- <code><a href="./src/resources/investments/portfolios.ts">PortfolioRebalanceResponse</a></code>

Methods:

- <code title="get /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">retrieve</a>(portfolioId) -> unknown</code>
- <code title="put /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">update</a>(portfolioId) -> unknown</code>
- <code title="get /investments/portfolios">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /investments/portfolios/{portfolioId}/rebalance">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">rebalance</a>(portfolioId) -> unknown</code>

## Assets

Types:

- <code><a href="./src/resources/investments/assets.ts">AssetSearchResponse</a></code>

Methods:

- <code title="get /investments/assets/search">client.investments.assets.<a href="./src/resources/investments/assets.ts">search</a>({ ...params }) -> unknown</code>

## Performance

# System

## Status

## Webhooks

## AuditLogs

## Sandbox

## Verification

## Notifications
