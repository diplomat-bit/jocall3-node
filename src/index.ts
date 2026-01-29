// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type PageParams, PageResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AccountLinkParams,
  AccountLinkResponse,
  AccountListParams,
  AccountListResponse,
  AccountOpenParams,
  AccountOpenResponse,
  AccountRetrieveResponse,
  Accounts,
} from './resources/accounts/accounts';
import { AI } from './resources/ai/ai';
import {
  Corporate,
  CorporateOnboardEntityParams,
  CorporateOnboardEntityResponse,
} from './resources/corporate/corporate';
import { Investments } from './resources/investments/investments';
import {
  Lending,
  LendingGetStatusResponse,
  LendingSubmitApplicationParams,
  LendingSubmitApplicationResponse,
} from './resources/lending/lending';
import { Marketplace, MarketplaceListProductsResponse } from './resources/marketplace/marketplace';
import { PaymentListResponse, Payments } from './resources/payments/payments';
import {
  Sustainability,
  SustainabilityGetFootprintResponse,
} from './resources/sustainability/sustainability';
import { System } from './resources/system/system';
import {
  TransactionAddNotesParams,
  TransactionCategorizeParams,
  TransactionCategorizeResponse,
  TransactionDisputeParams,
  TransactionListParams,
  TransactionListResponse,
  TransactionRetrieveResponse,
  TransactionSplitParams,
  Transactions,
} from './resources/transactions/transactions';
import {
  UserLoginParams,
  UserLoginResponse,
  UserRegisterParams,
  UserRegisterResponse,
  Users,
} from './resources/users/users';
import { Web3, Web3GetNetworkStatusResponse } from './resources/web3/web3';

const environments = {
  production: 'https://75975599-8fdc-4274-8701-05fc0b8089cc.mock.pstmn.io',
  sandbox: 'https://75975599-8fdc-4274-8701-05fc0b8089cc.mock.pstmn.io',
  gemini_direct: 'https://generativelanguage.googleapis.com/v1beta',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['JOCALL3_API_KEY'].
   */
  apiKey?: string | null | undefined;

  /**
   * Defaults to process.env['GEMINI_API_KEY'].
   */
  geminiAPIKey?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://75975599-8fdc-4274-8701-05fc0b8089cc.mock.pstmn.io`
   * - `sandbox` corresponds to `https://75975599-8fdc-4274-8701-05fc0b8089cc.mock.pstmn.io`
   * - `gemini_direct` corresponds to `https://generativelanguage.googleapis.com/v1beta`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['JOCALL3_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Jocall3 API.
 */
export class Jocall3 extends Core.APIClient {
  apiKey: string | null;
  geminiAPIKey: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Jocall3 API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['JOCALL3_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.geminiAPIKey=process.env['GEMINI_API_KEY'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['JOCALL3_BASE_URL'] ?? https://75975599-8fdc-4274-8701-05fc0b8089cc.mock.pstmn.io] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('JOCALL3_BASE_URL'),
    apiKey = Core.readEnv('JOCALL3_API_KEY') ?? null,
    geminiAPIKey = Core.readEnv('GEMINI_API_KEY') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      geminiAPIKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.Jocall3Error(
        'Ambiguous URL; The `baseURL` option (or JOCALL3_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'production'] : false,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.geminiAPIKey = geminiAPIKey;
  }

  users: API.Users = new API.Users(this);
  accounts: API.Accounts = new API.Accounts(this);
  transactions: API.Transactions = new API.Transactions(this);
  ai: API.AI = new API.AI(this);
  corporate: API.Corporate = new API.Corporate(this);
  web3: API.Web3 = new API.Web3(this);
  payments: API.Payments = new API.Payments(this);
  sustainability: API.Sustainability = new API.Sustainability(this);
  marketplace: API.Marketplace = new API.Marketplace(this);
  lending: API.Lending = new API.Lending(this);
  investments: API.Investments = new API.Investments(this);
  system: API.System = new API.System(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.apiKey && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    if (this.geminiAPIKey && headers['x-goog-api-key']) {
      return;
    }
    if (customHeaders['x-goog-api-key'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either apiKey or geminiAPIKey to be set. Or for one of the "Authorization" or "x-goog-api-key" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...this.bearerAuth(opts),
      ...this.geminiHeaderAuth(opts),
    };
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.apiKey == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected geminiHeaderAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.geminiAPIKey == null) {
      return {};
    }
    return { 'x-goog-api-key': this.geminiAPIKey };
  }

  static Jocall3 = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static Jocall3Error = Errors.Jocall3Error;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Jocall3.Users = Users;
Jocall3.Accounts = Accounts;
Jocall3.Transactions = Transactions;
Jocall3.AI = AI;
Jocall3.Corporate = Corporate;
Jocall3.Web3 = Web3;
Jocall3.Payments = Payments;
Jocall3.Sustainability = Sustainability;
Jocall3.Marketplace = Marketplace;
Jocall3.Lending = Lending;
Jocall3.Investments = Investments;
Jocall3.System = System;

export declare namespace Jocall3 {
  export type RequestOptions = Core.RequestOptions;

  export import Page = Pagination.Page;
  export { type PageParams as PageParams, type PageResponse as PageResponse };

  export {
    Users as Users,
    type UserLoginResponse as UserLoginResponse,
    type UserRegisterResponse as UserRegisterResponse,
    type UserLoginParams as UserLoginParams,
    type UserRegisterParams as UserRegisterParams,
  };

  export {
    Accounts as Accounts,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountLinkResponse as AccountLinkResponse,
    type AccountOpenResponse as AccountOpenResponse,
    type AccountListParams as AccountListParams,
    type AccountLinkParams as AccountLinkParams,
    type AccountOpenParams as AccountOpenParams,
  };

  export {
    Transactions as Transactions,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCategorizeResponse as TransactionCategorizeResponse,
    type TransactionListParams as TransactionListParams,
    type TransactionAddNotesParams as TransactionAddNotesParams,
    type TransactionCategorizeParams as TransactionCategorizeParams,
    type TransactionDisputeParams as TransactionDisputeParams,
    type TransactionSplitParams as TransactionSplitParams,
  };

  export { AI as AI };

  export {
    Corporate as Corporate,
    type CorporateOnboardEntityResponse as CorporateOnboardEntityResponse,
    type CorporateOnboardEntityParams as CorporateOnboardEntityParams,
  };

  export { Web3 as Web3, type Web3GetNetworkStatusResponse as Web3GetNetworkStatusResponse };

  export { Payments as Payments, type PaymentListResponse as PaymentListResponse };

  export {
    Sustainability as Sustainability,
    type SustainabilityGetFootprintResponse as SustainabilityGetFootprintResponse,
  };

  export {
    Marketplace as Marketplace,
    type MarketplaceListProductsResponse as MarketplaceListProductsResponse,
  };

  export {
    Lending as Lending,
    type LendingGetStatusResponse as LendingGetStatusResponse,
    type LendingSubmitApplicationResponse as LendingSubmitApplicationResponse,
    type LendingSubmitApplicationParams as LendingSubmitApplicationParams,
  };

  export { Investments as Investments };

  export { System as System };
}

export { toFile, fileFromPath } from './uploads';
export {
  Jocall3Error,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Jocall3;
