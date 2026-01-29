// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as FraudAPI from './fraud/fraud';
import { Fraud, FraudAnalyzeTransactionParams, FraudAnalyzeTransactionResponse } from './fraud/fraud';

export class Risk extends APIResource {
  fraud: FraudAPI.Fraud = new FraudAPI.Fraud(this._client);

  /**
   * Get Aggregate Risk Exposure
   *
   * @example
   * ```ts
   * const response = await client.corporate.risk.getExposure();
   * ```
   */
  getExposure(options?: Core.RequestOptions): Core.APIPromise<RiskGetExposureResponse> {
    return this._client.get('/corporate/risk/exposure', options);
  }

  /**
   * Simulates extreme market conditions (e.g., 2008 crash, hyperinflation) against
   * the corporate ledger.
   *
   * @example
   * ```ts
   * const response = await client.corporate.risk.stressTest({
   *   scenarioType: 'BANK_RUN',
   * });
   * ```
   */
  stressTest(
    body: RiskStressTestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RiskStressTestResponse> {
    return this._client.post('/corporate/risk/stress-test', { body, ...options });
  }
}

export interface RiskGetExposureResponse {
  assetConcentration?: unknown;

  counterpartyRisk?: Array<unknown>;

  valueAtRisk?: number;
}

export interface RiskStressTestResponse {
  aiNarrative?: string;

  liquidityGap?: number;

  resilienceScore?: number;
}

export interface RiskStressTestParams {
  scenarioType: 'BANK_RUN' | 'MARKET_CRASH' | 'REGULATORY_SHOCK' | 'DEPEGGING';

  intensity?: number;
}

Risk.Fraud = Fraud;

export declare namespace Risk {
  export {
    type RiskGetExposureResponse as RiskGetExposureResponse,
    type RiskStressTestResponse as RiskStressTestResponse,
    type RiskStressTestParams as RiskStressTestParams,
  };

  export {
    Fraud as Fraud,
    type FraudAnalyzeTransactionResponse as FraudAnalyzeTransactionResponse,
    type FraudAnalyzeTransactionParams as FraudAnalyzeTransactionParams,
  };
}
