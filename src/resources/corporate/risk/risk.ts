// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FraudAPI from './fraud/fraud';
import { Fraud, FraudAnalyzeParams, FraudAnalyzeResponse } from './fraud/fraud';

export class Risk extends APIResource {
  fraud: FraudAPI.Fraud = new FraudAPI.Fraud(this._client);

  /**
   * Get Aggregate Risk Exposure
   *
   * @example
   * ```ts
   * const response =
   *   await client.corporate.risk.retrieveExposure();
   * ```
   */
  retrieveExposure(options?: Core.RequestOptions): Core.APIPromise<RiskRetrieveExposureResponse> {
    return this._client.get('/corporate/risk/exposure', options);
  }

  /**
   * Simulates extreme market conditions (e.g., 2008 crash, hyperinflation) against
   * the corporate ledger.
   *
   * @example
   * ```ts
   * const response = await client.corporate.risk.runStressTest({
   *   scenarioType: 'BANK_RUN',
   * });
   * ```
   */
  runStressTest(
    body: RiskRunStressTestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskRunStressTestResponse> {
    return this._client.post('/corporate/risk/stress-test', { body, ...options });
  }
}

export interface RiskRetrieveExposureResponse {
  assetConcentration?: unknown;

  counterpartyRisk?: Array<unknown>;

  valueAtRisk?: number;
}

export interface RiskRunStressTestResponse {
  aiNarrative?: string;

  liquidityGap?: number;

  resilienceScore?: number;
}

export interface RiskRunStressTestParams {
  scenarioType: 'BANK_RUN' | 'MARKET_CRASH' | 'REGULATORY_SHOCK' | 'DEPEGGING';

  intensity?: number;
}

Risk.Fraud = Fraud;

export declare namespace Risk {
  export {
    type RiskRetrieveExposureResponse as RiskRetrieveExposureResponse,
    type RiskRunStressTestResponse as RiskRunStressTestResponse,
    type RiskRunStressTestParams as RiskRunStressTestParams,
  };

  export {
    Fraud as Fraud,
    type FraudAnalyzeResponse as FraudAnalyzeResponse,
    type FraudAnalyzeParams as FraudAnalyzeParams,
  };
}
