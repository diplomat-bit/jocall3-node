# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserLoginResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRegisterResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users/users.ts">login</a>({ ...params }) -> UserLoginResponse</code>
- <code title="post /users/register">client.users.<a href="./src/resources/users/users.ts">register</a>({ ...params }) -> UserRegisterResponse</code>

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

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>({ ...params }) -> DeviceListResponse</code>

### Biometrics

Types:

- <code><a href="./src/resources/users/me/biometrics.ts">BiometricRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/users/me/biometrics.ts">BiometricVerifyResponse</a></code>

Methods:

- <code title="get /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">retrieveStatus</a>() -> BiometricRetrieveStatusResponse</code>
- <code title="post /users/me/biometrics/verify">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">verify</a>({ ...params }) -> BiometricVerifyResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountLinkResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieve</a>(accountId) -> AccountRetrieveResponse</code>
- <code title="get /accounts/me">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts/accounts.ts">link</a>({ ...params }) -> AccountLinkResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/accounts/transactions.ts">TransactionListPendingResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/transactions/pending">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">listPending</a>(accountId, { ...params }) -> TransactionListPendingResponse</code>

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

- <code title="put /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">update</a>(accountId, { ...params }) -> OverdraftUpdateResponse</code>
- <code title="get /accounts/{accountId}/overdraft-settings">client.accounts.overdraft.<a href="./src/resources/accounts/overdraft.ts">get</a>(accountId) -> OverdraftGetResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionAddNotesResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionCategorizeResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(transactionId) -> TransactionRetrieveResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="put /transactions/{transactionId}/notes">client.transactions.<a href="./src/resources/transactions/transactions.ts">addNotes</a>(transactionId, { ...params }) -> TransactionAddNotesResponse</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions/transactions.ts">categorize</a>(transactionId, { ...params }) -> TransactionCategorizeResponse</code>

## Recurring

Types:

- <code><a href="./src/resources/transactions/recurring.ts">RecurringListResponse</a></code>

Methods:

- <code title="get /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">list</a>({ ...params }) -> RecurringListResponse</code>

## Insights

Types:

- <code><a href="./src/resources/transactions/insights.ts">InsightGetTrendsResponse</a></code>

Methods:

- <code title="get /transactions/insights/spending-trends">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getTrends</a>() -> InsightGetTrendsResponse</code>

# Budgets

Types:

- <code><a href="./src/resources/budgets.ts">BudgetRetrieveResponse</a></code>
- <code><a href="./src/resources/budgets.ts">BudgetUpdateResponse</a></code>
- <code><a href="./src/resources/budgets.ts">BudgetListResponse</a></code>

Methods:

- <code title="get /budgets/{budgetId}">client.budgets.<a href="./src/resources/budgets.ts">retrieve</a>(budgetId) -> BudgetRetrieveResponse</code>
- <code title="put /budgets/{budgetId}">client.budgets.<a href="./src/resources/budgets.ts">update</a>(budgetId, { ...params }) -> BudgetUpdateResponse</code>
- <code title="get /budgets">client.budgets.<a href="./src/resources/budgets.ts">list</a>({ ...params }) -> BudgetListResponse</code>

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

### Simulations

## Incubator

### Pitch

## Ads

# Corporate

## SanctionScreening

## Compliance

### Audits

## Treasury

## Cards

### Controls

## Risk

### Fraud

#### Rules

## Anomalies

# Web3

## Wallets

## Transactions

## NFTs

# Payments

## International

## Fx

# Sustainability

## Investments
