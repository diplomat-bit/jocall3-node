// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PoolingAPI from './pooling';
import { Pooling, PoolingConfigureParams } from './pooling';
import * as SweepingAPI from './sweeping';
import { Sweeping, SweepingConfigureRulesParams, SweepingExecuteParams } from './sweeping';

export class Treasury extends APIResource {
  sweeping: SweepingAPI.Sweeping = new SweepingAPI.Sweeping(this._client);
  pooling: PoolingAPI.Pooling = new PoolingAPI.Pooling(this._client);

  /**
   * Execute bulk payouts
   *
   * @example
   * ```ts
   * await client.corporate.treasury.executeBulkPayouts({
   *   payouts: [{}],
   * });
   * ```
   */
  executeBulkPayouts(
    body: TreasuryExecuteBulkPayoutsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/corporate/treasury/bulk-payouts', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * AI Liquidity Optimization Engine
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.optimizeLiquidity();
   * ```
   */
  optimizeLiquidity(
    body?: TreasuryOptimizeLiquidityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryOptimizeLiquidityResponse>;
  optimizeLiquidity(options?: Core.RequestOptions): Core.APIPromise<TreasuryOptimizeLiquidityResponse>;
  optimizeLiquidity(
    body: TreasuryOptimizeLiquidityParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryOptimizeLiquidityResponse> {
    if (isRequestOptions(body)) {
      return this.optimizeLiquidity({}, body);
    }
    return this._client.post('/corporate/treasury/liquidity/optimize', { body, ...options });
  }

  /**
   * Corporate Cash Flow Projection
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.retrieveCashFlowForecast();
   * ```
   */
  retrieveCashFlowForecast(
    query?: TreasuryRetrieveCashFlowForecastParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryRetrieveCashFlowForecastResponse>;
  retrieveCashFlowForecast(
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryRetrieveCashFlowForecastResponse>;
  retrieveCashFlowForecast(
    query: TreasuryRetrieveCashFlowForecastParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryRetrieveCashFlowForecastResponse> {
    if (isRequestOptions(query)) {
      return this.retrieveCashFlowForecast({}, query);
    }
    return this._client.get('/corporate/treasury/cash-flow/forecast', { query, ...options });
  }

  /**
   * Get current liquidity positions
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.treasury.retrieveLiquidityPositions();
   * ```
   */
  retrieveLiquidityPositions(
    options?: Core.RequestOptions,
  ): Core.APIPromise<TreasuryRetrieveLiquidityPositionsResponse> {
    return this._client.get('/corporate/treasury/liquidity-positions', options);
  }
}

export interface TreasuryOptimizeLiquidityResponse {
  projectedYield?: number;

  strategyId?: string;
}

export interface TreasuryRetrieveCashFlowForecastResponse {
  aiRecommendations?: Array<string>;

  forecastId?: string;

  projectedRunway?: number;
}

export interface TreasuryRetrieveLiquidityPositionsResponse {
  positions?: Array<unknown>;

  total_liquidity?: number;
}

export interface TreasuryExecuteBulkPayoutsParams {
  payouts: Array<TreasuryExecuteBulkPayoutsParams.Payout>;
}

export namespace TreasuryExecuteBulkPayoutsParams {
  export interface Payout {
    amount?: number;

    recipient_id?: string;
  }
}

export interface TreasuryOptimizeLiquidityParams {
  sweepExcess?: boolean;

  targetReserve?: number;
}

export interface TreasuryRetrieveCashFlowForecastParams {
  horizonDays?: number;
}

Treasury.Sweeping = Sweeping;
Treasury.Pooling = Pooling;

export declare namespace Treasury {
  export {
    type TreasuryOptimizeLiquidityResponse as TreasuryOptimizeLiquidityResponse,
    type TreasuryRetrieveCashFlowForecastResponse as TreasuryRetrieveCashFlowForecastResponse,
    type TreasuryRetrieveLiquidityPositionsResponse as TreasuryRetrieveLiquidityPositionsResponse,
    type TreasuryExecuteBulkPayoutsParams as TreasuryExecuteBulkPayoutsParams,
    type TreasuryOptimizeLiquidityParams as TreasuryOptimizeLiquidityParams,
    type TreasuryRetrieveCashFlowForecastParams as TreasuryRetrieveCashFlowForecastParams,
  };

  export {
    Sweeping as Sweeping,
    type SweepingConfigureRulesParams as SweepingConfigureRulesParams,
    type SweepingExecuteParams as SweepingExecuteParams,
  };

  export { Pooling as Pooling, type PoolingConfigureParams as PoolingConfigureParams };
}
