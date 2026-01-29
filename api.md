# Shared

Types:

- <code><a href="./src/resources/shared.ts">Address</a></code>
- <code><a href="./src/resources/shared.ts">Transaction</a></code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserLoginResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRegisterResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users/users.ts">login</a>({ ...params }) -> UserLoginResponse</code>
- <code title="post /users/logout">client.users.<a href="./src/resources/users/users.ts">logout</a>() -> void</code>
- <code title="post /users/register">client.users.<a href="./src/resources/users/users.ts">register</a>({ ...params }) -> UserRegisterResponse</code>

## PasswordReset

Types:

- <code><a href="./src/resources/users/password-reset.ts">PasswordResetConfirmResponse</a></code>
- <code><a href="./src/resources/users/password-reset.ts">PasswordResetInitiateResponse</a></code>

Methods:

- <code title="post /users/password-reset/confirm">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">confirm</a>({ ...params }) -> PasswordResetConfirmResponse</code>
- <code title="post /users/password-reset/initiate">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">initiate</a>({ ...params }) -> PasswordResetInitiateResponse</code>

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="put /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">update</a>() -> void</code>
- <code title="delete /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">delete</a>() -> void</code>

### Preferences

Types:

- <code><a href="./src/resources/users/me/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me/preferences.ts">PreferenceUpdateResponse</a></code>

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> PreferenceRetrieveResponse</code>
- <code title="put /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>({ ...params }) -> PreferenceUpdateResponse</code>

### Security

Types:

- <code><a href="./src/resources/users/me/security.ts">SecurityRetrieveLogResponse</a></code>
- <code><a href="./src/resources/users/me/security.ts">SecurityRotateKeysResponse</a></code>

Methods:

- <code title="get /users/me/security/log">client.users.me.security.<a href="./src/resources/users/me/security.ts">retrieveLog</a>({ ...params }) -> SecurityRetrieveLogResponse</code>
- <code title="post /users/me/security/rotate-keys">client.users.me.security.<a href="./src/resources/users/me/security.ts">rotateKeys</a>() -> SecurityRotateKeysResponse</code>

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>() -> DeviceListResponse</code>
- <code title="delete /users/me/devices/{deviceId}">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">deregister</a>(deviceId) -> void</code>
- <code title="post /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">register</a>({ ...params }) -> void</code>

### Biometrics

Types:

- <code><a href="./src/resources/users/me/biometrics.ts">BiometricRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/users/me/biometrics.ts">BiometricVerifyResponse</a></code>

Methods:

- <code title="delete /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">delete</a>() -> void</code>
- <code title="post /users/me/biometrics/enroll">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">enroll</a>({ ...params }) -> void</code>
- <code title="get /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">retrieveStatus</a>() -> BiometricRetrieveStatusResponse</code>
- <code title="post /users/me/biometrics/verify">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">verify</a>({ ...params }) -> BiometricVerifyResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountLinkResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountOpenResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountId) -> AccountRetrieveResponse</code>
- <code title="get /accounts/me">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>() -> AccountListResponse</code>
- <code title="delete /accounts/{accountId}">client.accounts.<a href="./src/resources/accounts/accounts.ts">close</a>(accountId) -> void</code>
- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts/accounts.ts">link</a>({ ...params }) -> AccountLinkResponse</code>
- <code title="post /accounts/open">client.accounts.<a href="./src/resources/accounts/accounts.ts">open</a>({ ...params }) -> AccountOpenResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/accounts/transactions.ts">TransactionListArchivedResponse</a></code>
- <code><a href="./src/resources/accounts/transactions.ts">TransactionListPendingResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/transactions/archived">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">listArchived</a>(accountId, { ...params }) -> TransactionListArchivedResponse</code>
- <code title="get /accounts/{accountId}/transactions/pending">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">listPending</a>(accountId) -> TransactionListPendingResponse</code>

## BalanceHistory

Types:

- <code><a href="./src/resources/accounts/balance-history.ts">BalanceHistoryRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/balance-history">client.accounts.balanceHistory.<a href="./src/resources/accounts/balance-history.ts">retrieve</a>(accountId, { ...params }) -> BalanceHistoryRetrieveResponse</code>

## Statements

Types:

- <code><a href="./src/resources/accounts/statements.ts">StatementListResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/statements">client.accounts.statements.<a href="./src/resources/accounts/statements.ts">list</a>(accountId) -> StatementListResponse</code>
- <code title="get /accounts/{accountId}/statements/{statementId}/pdf">client.accounts.statements.<a href="./src/resources/accounts/statements.ts">download</a>(accountId, statementId) -> Response</code>

## Overdraft

Types:

- <code><a href="./src/resources/accounts/overdraft.ts">OverdraftGetResponse</a></code>

Methods:

- <code title="put /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">update</a>(accountId, { ...params }) -> void</code>
- <code title="get /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">get</a>(accountId) -> OverdraftGetResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(transactionId) -> Transaction</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="put /transactions/{transactionId}/notes">client.transactions.<a href="./src/resources/transactions/transactions.ts">addNotes</a>(transactionId, { ...params }) -> void</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions/transactions.ts">categorize</a>(transactionId, { ...params }) -> Transaction</code>
- <code title="post /transactions/{transactionId}/dispute">client.transactions.<a href="./src/resources/transactions/transactions.ts">dispute</a>(transactionId, { ...params }) -> void</code>
- <code title="post /transactions/{transactionId}/split">client.transactions.<a href="./src/resources/transactions/transactions.ts">split</a>(transactionId, { ...params }) -> void</code>

## Recurring

Types:

- <code><a href="./src/resources/transactions/recurring.ts">RecurringListResponse</a></code>

Methods:

- <code title="post /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">create</a>({ ...params }) -> void</code>
- <code title="get /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">list</a>() -> RecurringListResponse</code>
- <code title="delete /transactions/recurring/{recurringId}">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">cancel</a>(recurringId) -> void</code>

## Insights

Types:

- <code><a href="./src/resources/transactions/insights.ts">InsightGetForecastResponse</a></code>
- <code><a href="./src/resources/transactions/insights.ts">InsightGetTrendsResponse</a></code>

Methods:

- <code title="get /transactions/insights/future-flow">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getForecast</a>() -> InsightGetForecastResponse</code>
- <code title="get /transactions/insights/spending-trends">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getTrends</a>() -> InsightGetTrendsResponse</code>

# AI

## Advisor

Types:

- <code><a href="./src/resources/ai/advisor/advisor.ts">AdvisorChatResponse</a></code>
- <code><a href="./src/resources/ai/advisor/advisor.ts">AdvisorHistoryResponse</a></code>

Methods:

- <code title="post /ai/advisor/chat">client.ai.advisor.<a href="./src/resources/ai/advisor/advisor.ts">chat</a>({ ...params }) -> AdvisorChatResponse</code>
- <code title="get /ai/advisor/chat/history">client.ai.advisor.<a href="./src/resources/ai/advisor/advisor.ts">history</a>() -> AdvisorHistoryResponse</code>

### Tools

Types:

- <code><a href="./src/resources/ai/advisor/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /ai/advisor/tools">client.ai.advisor.tools.<a href="./src/resources/ai/advisor/tools.ts">list</a>() -> ToolListResponse</code>
- <code title="post /ai/advisor/tools/{toolId}/enable">client.ai.advisor.tools.<a href="./src/resources/ai/advisor/tools.ts">enable</a>(toolId) -> void</code>

## Oracle

### Simulate

Types:

- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunAdvancedResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateRunStandardResponse</a></code>

Methods:

- <code title="post /ai/oracle/simulate/advanced">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runAdvanced</a>({ ...params }) -> SimulateRunAdvancedResponse</code>
- <code title="post /ai/oracle/simulate/monte-carlo">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runMonteCarlo</a>({ ...params }) -> void</code>
- <code title="post /ai/oracle/simulate">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">runStandard</a>({ ...params }) -> SimulateRunStandardResponse</code>

### Predictions

Types:

- <code><a href="./src/resources/ai/oracle/predictions.ts">PredictionInflationResponse</a></code>
- <code><a href="./src/resources/ai/oracle/predictions.ts">PredictionMarketCrashResponse</a></code>

Methods:

- <code title="get /ai/oracle/predictions/inflation">client.ai.oracle.predictions.<a href="./src/resources/ai/oracle/predictions.ts">inflation</a>({ ...params }) -> PredictionInflationResponse</code>
- <code title="get /ai/oracle/predictions/market-crash-probability">client.ai.oracle.predictions.<a href="./src/resources/ai/oracle/predictions.ts">marketCrash</a>() -> PredictionMarketCrashResponse</code>

### Simulations

Types:

- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationListResponse</a></code>

Methods:

- <code title="get /ai/oracle/simulations/{simulationId}">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">retrieve</a>(simulationId) -> SimulationRetrieveResponse</code>
- <code title="get /ai/oracle/simulations">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">list</a>() -> SimulationListResponse</code>

## Incubator

Types:

- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorGeneratePitchResponse</a></code>
- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorListPitchesResponse</a></code>
- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorValidateIdeaResponse</a></code>

Methods:

- <code title="post /ai/incubator/pitch">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">generatePitch</a>({ ...params }) -> IncubatorGeneratePitchResponse</code>
- <code title="get /ai/incubator/pitches">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">listPitches</a>() -> IncubatorListPitchesResponse</code>
- <code title="post /ai/incubator/validate">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">validateIdea</a>({ ...params }) -> IncubatorValidateIdeaResponse</code>

### Analysis

Types:

- <code><a href="./src/resources/ai/incubator/analysis.ts">AnalysisCompetitorScanResponse</a></code>
- <code><a href="./src/resources/ai/incubator/analysis.ts">AnalysisSwotResponse</a></code>

Methods:

- <code title="post /ai/incubator/analysis/competitors">client.ai.incubator.analysis.<a href="./src/resources/ai/incubator/analysis.ts">competitorScan</a>({ ...params }) -> AnalysisCompetitorScanResponse</code>
- <code title="post /ai/incubator/analysis/swot">client.ai.incubator.analysis.<a href="./src/resources/ai/incubator/analysis.ts">swot</a>({ ...params }) -> AnalysisSwotResponse</code>

### Pitch

Types:

- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchRetrieveDetailsResponse</a></code>

Methods:

- <code title="get /ai/incubator/pitch/{pitchId}/details">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">retrieveDetails</a>(pitchId) -> PitchRetrieveDetailsResponse</code>
- <code title="put /ai/incubator/pitch/{pitchId}/feedback">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">submitFeedback</a>(pitchId, { ...params }) -> void</code>

## Ads

Types:

- <code><a href="./src/resources/ai/ads.ts">AdListResponse</a></code>
- <code><a href="./src/resources/ai/ads.ts">AdGenerateCopyResponse</a></code>
- <code><a href="./src/resources/ai/ads.ts">AdGenerateVideoResponse</a></code>
- <code><a href="./src/resources/ai/ads.ts">AdGetOperationResponse</a></code>
- <code><a href="./src/resources/ai/ads.ts">AdOptimizeCampaignResponse</a></code>

Methods:

- <code title="get /ai/ads">client.ai.ads.<a href="./src/resources/ai/ads.ts">list</a>() -> AdListResponse</code>
- <code title="post /ai/ads/generate/copy">client.ai.ads.<a href="./src/resources/ai/ads.ts">generateCopy</a>({ ...params }) -> AdGenerateCopyResponse</code>
- <code title="post /ai/ads/generate/video">client.ai.ads.<a href="./src/resources/ai/ads.ts">generateVideo</a>({ ...params }) -> AdGenerateVideoResponse</code>
- <code title="get /ai/ads/operations/{operationId}">client.ai.ads.<a href="./src/resources/ai/ads.ts">getOperation</a>(operationId) -> AdGetOperationResponse</code>
- <code title="post /ai/ads/optimize">client.ai.ads.<a href="./src/resources/ai/ads.ts">optimizeCampaign</a>({ ...params }) -> AdOptimizeCampaignResponse</code>

## Agent

Types:

- <code><a href="./src/resources/ai/agent.ts">AgentGetCapabilitiesResponse</a></code>
- <code><a href="./src/resources/ai/agent.ts">AgentGetPromptsResponse</a></code>

Methods:

- <code title="get /ai/agent/capabilities">client.ai.agent.<a href="./src/resources/ai/agent.ts">getCapabilities</a>() -> AgentGetCapabilitiesResponse</code>
- <code title="get /ai/agent/prompts">client.ai.agent.<a href="./src/resources/ai/agent.ts">getPrompts</a>() -> AgentGetPromptsResponse</code>
- <code title="put /ai/agent/prompts">client.ai.agent.<a href="./src/resources/ai/agent.ts">updatePrompts</a>({ ...params }) -> void</code>

## Models

Types:

- <code><a href="./src/resources/ai/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/ai/models.ts">ModelFineTuneResponse</a></code>

Methods:

- <code title="get /ai/models/versions">client.ai.models.<a href="./src/resources/ai/models.ts">list</a>() -> ModelListResponse</code>
- <code title="post /ai/models/fine-tune">client.ai.models.<a href="./src/resources/ai/models.ts">fineTune</a>({ ...params }) -> ModelFineTuneResponse</code>

# Corporate

Types:

- <code><a href="./src/resources/corporate/corporate.ts">CorporateOnboardEntityResponse</a></code>

Methods:

- <code title="post /corporate/onboard">client.corporate.<a href="./src/resources/corporate/corporate.ts">onboardEntity</a>({ ...params }) -> CorporateOnboardEntityResponse</code>

## Compliance

Types:

- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenAdverseMediaResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenPepResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenSanctionsResponse</a></code>

Methods:

- <code title="post /corporate/compliance/media">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenAdverseMedia</a>({ ...params }) -> ComplianceScreenAdverseMediaResponse</code>
- <code title="post /corporate/compliance/pep">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenPep</a>({ ...params }) -> ComplianceScreenPepResponse</code>
- <code title="post /corporate/compliance/sanctions">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenSanctions</a>({ ...params }) -> ComplianceScreenSanctionsResponse</code>

### Audits

Types:

- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRequestResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRetrieveReportResponse</a></code>

Methods:

- <code title="post /corporate/compliance/audits">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">request</a>({ ...params }) -> AuditRequestResponse</code>
- <code title="get /corporate/compliance/audits/{auditId}/report">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">retrieveReport</a>(auditId) -> AuditRetrieveReportResponse</code>

## Treasury

Types:

- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryForecastCashFlowResponse</a></code>
- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryGetLiquidityPositionsResponse</a></code>
- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryManageLiquidityResponse</a></code>

Methods:

- <code title="post /corporate/treasury/bulk-payouts">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">bulkPayout</a>({ ...params }) -> void</code>
- <code title="get /corporate/treasury/cash-flow/forecast">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">forecastCashFlow</a>({ ...params }) -> TreasuryForecastCashFlowResponse</code>
- <code title="get /corporate/treasury/liquidity-positions">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">getLiquidityPositions</a>() -> TreasuryGetLiquidityPositionsResponse</code>
- <code title="post /corporate/treasury/liquidity/optimize">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">manageLiquidity</a>({ ...params }) -> TreasuryManageLiquidityResponse</code>

### Sweeping

Methods:

- <code title="post /corporate/treasury/sweeping/rules">client.corporate.treasury.sweeping.<a href="./src/resources/corporate/treasury/sweeping.ts">configure</a>({ ...params }) -> void</code>
- <code title="post /corporate/treasury/sweeping/execute">client.corporate.treasury.sweeping.<a href="./src/resources/corporate/treasury/sweeping.ts">execute</a>({ ...params }) -> void</code>

### Pooling

Methods:

- <code title="post /corporate/treasury/liquidity/pooling">client.corporate.treasury.pooling.<a href="./src/resources/corporate/treasury/pooling.ts">configure</a>({ ...params }) -> void</code>

## Cards

Types:

- <code><a href="./src/resources/corporate/cards/cards.ts">CardListResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardIssuePhysicalResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardIssueVirtualResponse</a></code>
- <code><a href="./src/resources/corporate/cards/cards.ts">CardListTransactionsResponse</a></code>

Methods:

- <code title="get /corporate/cards">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">list</a>({ ...params }) -> CardListResponse</code>
- <code title="post /corporate/cards/{cardId}/freeze">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">freeze</a>(cardId, { ...params }) -> void</code>
- <code title="post /corporate/cards/physical">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">issuePhysical</a>({ ...params }) -> CardIssuePhysicalResponse</code>
- <code title="post /corporate/cards/virtual">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">issueVirtual</a>({ ...params }) -> CardIssueVirtualResponse</code>
- <code title="get /corporate/cards/{cardId}/transactions">client.corporate.cards.<a href="./src/resources/corporate/cards/cards.ts">listTransactions</a>(cardId) -> CardListTransactionsResponse</code>

### Controls

Methods:

- <code title="put /corporate/cards/{cardId}/controls">client.corporate.cards.controls.<a href="./src/resources/corporate/cards/controls.ts">update</a>(cardId, { ...params }) -> void</code>

## Risk

Types:

- <code><a href="./src/resources/corporate/risk/risk.ts">RiskGetExposureResponse</a></code>
- <code><a href="./src/resources/corporate/risk/risk.ts">RiskStressTestResponse</a></code>

Methods:

- <code title="get /corporate/risk/exposure">client.corporate.risk.<a href="./src/resources/corporate/risk/risk.ts">getExposure</a>() -> RiskGetExposureResponse</code>
- <code title="post /corporate/risk/stress-test">client.corporate.risk.<a href="./src/resources/corporate/risk/risk.ts">stressTest</a>({ ...params }) -> RiskStressTestResponse</code>

### Fraud

Types:

- <code><a href="./src/resources/corporate/risk/fraud/fraud.ts">FraudAnalyzeTransactionResponse</a></code>

Methods:

- <code title="post /corporate/risk/fraud/analyze">client.corporate.risk.fraud.<a href="./src/resources/corporate/risk/fraud/fraud.ts">analyzeTransaction</a>({ ...params }) -> FraudAnalyzeTransactionResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="post /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">create</a>({ ...params }) -> void</code>
- <code title="put /corporate/risk/fraud/rules/{ruleId}">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">update</a>(ruleId, { ...params }) -> void</code>
- <code title="get /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">list</a>() -> RuleListResponse</code>

## Governance

### Proposals

Types:

- <code><a href="./src/resources/corporate/governance/proposals.ts">ProposalListResponse</a></code>

Methods:

- <code title="post /corporate/governance/proposals">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">create</a>({ ...params }) -> void</code>
- <code title="get /corporate/governance/proposals">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">list</a>() -> ProposalListResponse</code>
- <code title="post /corporate/governance/proposals/{proposalId}/vote">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">vote</a>(proposalId, { ...params }) -> void</code>

## Anomalies

Types:

- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyListResponse</a></code>

Methods:

- <code title="get /corporate/anomalies">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">list</a>() -> AnomalyListResponse</code>
- <code title="put /corporate/anomalies/{anomalyId}/status">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">updateStatus</a>(anomalyId, { ...params }) -> void</code>

# Web3

Types:

- <code><a href="./src/resources/web3/web3.ts">Web3GetNetworkStatusResponse</a></code>

Methods:

- <code title="get /web3/network/status">client.web3.<a href="./src/resources/web3/web3.ts">getNetworkStatus</a>() -> Web3GetNetworkStatusResponse</code>

## Wallets

Types:

- <code><a href="./src/resources/web3/wallets.ts">WalletCreateResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletListResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletGetBalanceResponse</a></code>

Methods:

- <code title="post /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">create</a>({ ...params }) -> WalletCreateResponse</code>
- <code title="get /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">list</a>() -> WalletListResponse</code>
- <code title="post /web3/wallets/connect">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">connect</a>({ ...params }) -> void</code>
- <code title="get /web3/wallets/{walletId}/balances">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">getBalance</a>(walletId) -> WalletGetBalanceResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/web3/transactions.ts">TransactionSendCryptoResponse</a></code>

Methods:

- <code title="post /web3/transactions/bridge">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">bridgeChain</a>({ ...params }) -> void</code>
- <code title="post /web3/transactions/initiate">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">initiate</a>({ ...params }) -> void</code>
- <code title="post /web3/transactions/send">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">sendCrypto</a>({ ...params }) -> TransactionSendCryptoResponse</code>
- <code title="post /web3/transactions/swap">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">swapTokens</a>({ ...params }) -> void</code>

## NFTs

Types:

- <code><a href="./src/resources/web3/nfts.ts">NFTListResponse</a></code>

Methods:

- <code title="get /web3/nfts">client.web3.nfts.<a href="./src/resources/web3/nfts.ts">list</a>() -> NFTListResponse</code>
- <code title="post /web3/nfts/mint">client.web3.nfts.<a href="./src/resources/web3/nfts.ts">mint</a>({ ...params }) -> void</code>

## SmartContracts

Methods:

- <code title="post /web3/contracts/deploy">client.web3.smartContracts.<a href="./src/resources/web3/smart-contracts.ts">deploy</a>({ ...params }) -> void</code>

# Payments

Types:

- <code><a href="./src/resources/payments/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="get /payments/{paymentId}">client.payments.<a href="./src/resources/payments/payments.ts">retrieve</a>(paymentId) -> void</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments/payments.ts">list</a>() -> PaymentListResponse</code>

## Domestic

Methods:

- <code title="post /payments/domestic/ach">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">ach</a>({ ...params }) -> void</code>
- <code title="post /payments/domestic/rtp">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">rtp</a>({ ...params }) -> void</code>
- <code title="post /payments/domestic/wire">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">wire</a>({ ...params }) -> void</code>

## International

Types:

- <code><a href="./src/resources/payments/international.ts">InternationalGetStatusResponse</a></code>

Methods:

- <code title="get /payments/international/{paymentId}/status">client.payments.international.<a href="./src/resources/payments/international.ts">getStatus</a>(paymentId) -> InternationalGetStatusResponse</code>
- <code title="post /payments/international/sepa">client.payments.international.<a href="./src/resources/payments/international.ts">sepa</a>({ ...params }) -> void</code>
- <code title="post /payments/international/swift">client.payments.international.<a href="./src/resources/payments/international.ts">swift</a>({ ...params }) -> void</code>

## Fx

Types:

- <code><a href="./src/resources/payments/fx.ts">FxGetRatesResponse</a></code>

Methods:

- <code title="post /payments/fx/deals">client.payments.fx.<a href="./src/resources/payments/fx.ts">bookDeal</a>({ ...params }) -> void</code>
- <code title="post /payments/fx/convert">client.payments.fx.<a href="./src/resources/payments/fx.ts">convert</a>({ ...params }) -> void</code>
- <code title="get /payments/fx/rates">client.payments.fx.<a href="./src/resources/payments/fx.ts">getRates</a>({ ...params }) -> FxGetRatesResponse</code>

# Sustainability

Types:

- <code><a href="./src/resources/sustainability/sustainability.ts">SustainabilityGetFootprintResponse</a></code>

Methods:

- <code title="get /sustainability/carbon-footprint">client.sustainability.<a href="./src/resources/sustainability/sustainability.ts">getFootprint</a>() -> SustainabilityGetFootprintResponse</code>

## Offsets

Methods:

- <code title="post /sustainability/offsets/purchase">client.sustainability.offsets.<a href="./src/resources/sustainability/offsets.ts">purchase</a>({ ...params }) -> void</code>
- <code title="post /sustainability/offsets/retire">client.sustainability.offsets.<a href="./src/resources/sustainability/offsets.ts">retire</a>({ ...params }) -> void</code>

## Impact

Types:

- <code><a href="./src/resources/sustainability/impact.ts">ImpactPortfolioAnalysisResponse</a></code>
- <code><a href="./src/resources/sustainability/impact.ts">ImpactProjectSearchResponse</a></code>

Methods:

- <code title="get /sustainability/impact/portfolio">client.sustainability.impact.<a href="./src/resources/sustainability/impact.ts">portfolioAnalysis</a>() -> ImpactPortfolioAnalysisResponse</code>
- <code title="get /sustainability/impact/projects">client.sustainability.impact.<a href="./src/resources/sustainability/impact.ts">projectSearch</a>({ ...params }) -> ImpactProjectSearchResponse</code>

# Marketplace

Types:

- <code><a href="./src/resources/marketplace/marketplace.ts">MarketplaceListProductsResponse</a></code>

Methods:

- <code title="get /marketplace/products">client.marketplace.<a href="./src/resources/marketplace/marketplace.ts">listProducts</a>() -> MarketplaceListProductsResponse</code>

## Offers

Types:

- <code><a href="./src/resources/marketplace/offers.ts">OfferListResponse</a></code>

Methods:

- <code title="get /marketplace/offers">client.marketplace.offers.<a href="./src/resources/marketplace/offers.ts">list</a>() -> OfferListResponse</code>
- <code title="post /marketplace/offers/{offerId}/redeem">client.marketplace.offers.<a href="./src/resources/marketplace/offers.ts">redeem</a>(offerId) -> void</code>

# Lending

Types:

- <code><a href="./src/resources/lending/lending.ts">LendingGetStatusResponse</a></code>
- <code><a href="./src/resources/lending/lending.ts">LendingSubmitApplicationResponse</a></code>

Methods:

- <code title="get /lending/applications/{appId}/status">client.lending.<a href="./src/resources/lending/lending.ts">getStatus</a>(appId) -> LendingGetStatusResponse</code>
- <code title="post /lending/applications">client.lending.<a href="./src/resources/lending/lending.ts">submitApplication</a>({ ...params }) -> LendingSubmitApplicationResponse</code>

## Decisions

Types:

- <code><a href="./src/resources/lending/decisions.ts">DecisionGetRationaleResponse</a></code>

Methods:

- <code title="get /lending/decisions/{decisionId}/rationale">client.lending.decisions.<a href="./src/resources/lending/decisions.ts">getRationale</a>(decisionId) -> DecisionGetRationaleResponse</code>

# Investments

## Portfolios

Types:

- <code><a href="./src/resources/investments/portfolios.ts">PortfolioListResponse</a></code>
- <code><a href="./src/resources/investments/portfolios.ts">PortfolioRebalanceResponse</a></code>

Methods:

- <code title="post /investments/portfolios">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">create</a>({ ...params }) -> void</code>
- <code title="get /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">retrieve</a>(portfolioId) -> void</code>
- <code title="put /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">update</a>(portfolioId, { ...params }) -> void</code>
- <code title="get /investments/portfolios">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">list</a>({ ...params }) -> PortfolioListResponse</code>
- <code title="post /investments/portfolios/{portfolioId}/rebalance">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">rebalance</a>(portfolioId, { ...params }) -> PortfolioRebalanceResponse</code>

## Assets

Types:

- <code><a href="./src/resources/investments/assets.ts">AssetSearchResponse</a></code>

Methods:

- <code title="get /investments/assets/search">client.investments.assets.<a href="./src/resources/investments/assets.ts">search</a>({ ...params }) -> AssetSearchResponse</code>

## Performance

Types:

- <code><a href="./src/resources/investments/performance.ts">PerformanceGetHistoricalResponse</a></code>

Methods:

- <code title="get /investments/performance/historical">client.investments.performance.<a href="./src/resources/investments/performance.ts">getHistorical</a>({ ...params }) -> PerformanceGetHistoricalResponse</code>

# System

## Status

Types:

- <code><a href="./src/resources/system/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /system/status">client.system.status.<a href="./src/resources/system/status.ts">retrieve</a>() -> StatusRetrieveResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/system/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /system/webhooks">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">create</a>({ ...params }) -> void</code>
- <code title="get /system/webhooks">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /system/webhooks/{webhookId}">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">delete</a>(webhookId) -> void</code>

## AuditLogs

Types:

- <code><a href="./src/resources/system/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /system/audit-logs">client.system.auditLogs.<a href="./src/resources/system/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponse</code>

## Sandbox

Types:

- <code><a href="./src/resources/system/sandbox.ts">SandboxSimulateErrorResponse</a></code>

Methods:

- <code title="post /system/sandbox/reset">client.system.sandbox.<a href="./src/resources/system/sandbox.ts">reset</a>() -> void</code>
- <code title="post /system/sandbox/simulate-error">client.system.sandbox.<a href="./src/resources/system/sandbox.ts">simulateError</a>({ ...params }) -> SandboxSimulateErrorResponse</code>

## Verification

Methods:

- <code title="post /system/verification/biometric-comparison">client.system.verification.<a href="./src/resources/system/verification.ts">biometricMatch</a>({ ...params }) -> void</code>
- <code title="post /system/verification/document">client.system.verification.<a href="./src/resources/system/verification.ts">document</a>({ ...params }) -> void</code>

## Notifications

Types:

- <code><a href="./src/resources/system/notifications.ts">NotificationListTemplatesResponse</a></code>

Methods:

- <code title="get /system/notifications/templates">client.system.notifications.<a href="./src/resources/system/notifications.ts">listTemplates</a>() -> NotificationListTemplatesResponse</code>
- <code title="post /system/notifications/push">client.system.notifications.<a href="./src/resources/system/notifications.ts">send</a>({ ...params }) -> void</code>
