// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OverdraftAPI from './overdraft';
import { Overdraft, OverdraftGetResponse, OverdraftUpdateParams, OverdraftUpdateResponse } from './overdraft';
import * as StatementsAPI from './statements';
import { StatementListParams, StatementListResponse, Statements } from './statements';
import * as TransactionsAPI from './transactions';
import { TransactionListPendingParams, TransactionListPendingResponse, Transactions } from './transactions';

export class Accounts extends APIResource {
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  statements: StatementsAPI.Statements = new StatementsAPI.Statements(this._client);
  overdraft: OverdraftAPI.Overdraft = new OverdraftAPI.Overdraft(this._client);

  /**
   * Retrieves comprehensive analytics for a specific financial account, including
   * historical balance trends, projected cash flow, and AI-driven insights into
   * spending patterns.
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve(
   *   'acc_chase_checking_4567',
   * );
   * ```
   */
  retrieve(accountId: string, options?: Core.RequestOptions): Core.APIPromise<AccountRetrieveResponse> {
    return this._client.get(`/accounts/${accountId}/details`, options);
  }

  /**
   * Fetches a comprehensive, real-time list of all external financial accounts
   * linked to the user's profile, including consolidated balances and institutional
   * details.
   *
   * @example
   * ```ts
   * const accounts = await client.accounts.list();
   * ```
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/accounts/me', { query, ...options });
  }

  /**
   * Begins the secure process of linking a new external financial institution (e.g.,
   * another bank, investment platform) to the user's profile, typically involving a
   * third-party tokenized flow.
   *
   * @example
   * ```ts
   * const response = await client.accounts.link({
   *   countryCode: 'US',
   *   institutionName: 'Bank of America',
   * });
   * ```
   */
  link(body: AccountLinkParams, options?: Core.RequestOptions): Core.APIPromise<AccountLinkResponse> {
    return this._client.post('/accounts/link', { body, ...options });
  }
}

export interface AccountRetrieveResponse {
  id: string;

  currency: string;

  currentBalance: number;

  institutionName: string;

  lastUpdated: string;

  name: string;

  type: string;

  accountHolder?: string;

  availableBalance?: number;

  balanceHistory?: Array<AccountRetrieveResponse.BalanceHistory>;

  externalId?: string;

  interestRate?: number;

  mask?: string;

  openedDate?: string;

  projectedCashFlow?: AccountRetrieveResponse.ProjectedCashFlow;

  subtype?: string;

  transactionsCount?: number;
}

export namespace AccountRetrieveResponse {
  export interface BalanceHistory {
    balance?: number;

    date?: string;
  }

  export interface ProjectedCashFlow {
    confidenceScore?: number;

    days30?: number;

    days90?: number;
  }
}

export interface AccountListResponse {
  data: Array<AccountListResponse.Data>;

  limit: number;

  offset: number;

  total: number;

  nextOffset?: number;
}

export namespace AccountListResponse {
  export interface Data {
    id?: string;

    availableBalance?: number;

    currency?: string;

    currentBalance?: number;

    externalId?: string;

    institutionName?: string;

    lastUpdated?: string;

    mask?: string;

    name?: string;

    subtype?: string;

    type?: string;
  }
}

export interface AccountLinkResponse {
  authUri: string;

  linkSessionId: string;

  status: string;

  message?: string;
}

export interface AccountListParams {
  /**
   * Maximum number of items to return in a single page.
   */
  limit?: number;

  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
}

export interface AccountLinkParams {
  countryCode: string;

  institutionName: string;
}

Accounts.Transactions = Transactions;
Accounts.Statements = Statements;
Accounts.Overdraft = Overdraft;

export declare namespace Accounts {
  export {
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountLinkResponse as AccountLinkResponse,
    type AccountListParams as AccountListParams,
    type AccountLinkParams as AccountLinkParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListPendingResponse as TransactionListPendingResponse,
    type TransactionListPendingParams as TransactionListPendingParams,
  };

  export {
    Statements as Statements,
    type StatementListResponse as StatementListResponse,
    type StatementListParams as StatementListParams,
  };

  export {
    Overdraft as Overdraft,
    type OverdraftUpdateResponse as OverdraftUpdateResponse,
    type OverdraftGetResponse as OverdraftGetResponse,
    type OverdraftUpdateParams as OverdraftUpdateParams,
  };
}
