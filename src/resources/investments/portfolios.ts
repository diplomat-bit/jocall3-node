// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Portfolios extends APIResource {
  /**
   * Create Strategic Portfolio
   */
  create(body: PortfolioCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/investments/portfolios', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Full Portfolio Performance
   */
  retrieve(portfolioId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/investments/portfolios/${portfolioId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update Portfolio Strategy
   */
  update(
    portfolioId: string,
    body?: PortfolioUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  update(portfolioId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  update(
    portfolioId: string,
    body: PortfolioUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.update(portfolioId, {}, body);
    }
    return this._client.put(`/investments/portfolios/${portfolioId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List All Investment Portfolios
   */
  list(query?: PortfolioListParams, options?: Core.RequestOptions): Core.APIPromise<PortfolioListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PortfolioListResponse>;
  list(
    query: PortfolioListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/investments/portfolios', { query, ...options });
  }

  /**
   * Trigger Gemini AI Rebalancing
   */
  rebalance(
    portfolioId: string,
    body?: PortfolioRebalanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioRebalanceResponse>;
  rebalance(portfolioId: string, options?: Core.RequestOptions): Core.APIPromise<PortfolioRebalanceResponse>;
  rebalance(
    portfolioId: string,
    body: PortfolioRebalanceParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioRebalanceResponse> {
    if (isRequestOptions(body)) {
      return this.rebalance(portfolioId, {}, body);
    }
    return this._client.post(`/investments/portfolios/${portfolioId}/rebalance`, { body, ...options });
  }
}

export interface PortfolioListResponse {
  data?: Array<PortfolioListResponse.Data>;
}

export namespace PortfolioListResponse {
  export interface Data {
    id?: string;

    name?: string;

    totalValue?: number;
  }
}

export interface PortfolioRebalanceResponse {
  impactSummary?: string;

  rebalanceId?: string;
}

export interface PortfolioCreateParams {
  name: string;

  strategy: 'GROWTH' | 'BALANCED' | 'INCOME' | 'ESG_FOCUSED';

  initialAllocation?: unknown;
}

export interface PortfolioUpdateParams {
  riskTolerance?: number;

  strategy?: string;
}

export interface PortfolioListParams {
  limit?: number;

  offset?: number;
}

export interface PortfolioRebalanceParams {
  executionMode?: 'AUTO' | 'CONFIRM_ONLY';
}

export declare namespace Portfolios {
  export {
    type PortfolioListResponse as PortfolioListResponse,
    type PortfolioRebalanceResponse as PortfolioRebalanceResponse,
    type PortfolioCreateParams as PortfolioCreateParams,
    type PortfolioUpdateParams as PortfolioUpdateParams,
    type PortfolioListParams as PortfolioListParams,
    type PortfolioRebalanceParams as PortfolioRebalanceParams,
  };
}
