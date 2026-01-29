// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DecisionsAPI from './decisions';
import { DecisionGetRationaleResponse, Decisions } from './decisions';

export class Lending extends APIResource {
  decisions: DecisionsAPI.Decisions = new DecisionsAPI.Decisions(this._client);

  /**
   * Track Loan Processing
   */
  getStatus(appId: string, options?: Core.RequestOptions): Core.APIPromise<LendingGetStatusResponse> {
    return this._client.get(`/lending/applications/${appId}/status`, options);
  }

  /**
   * Submit Advanced Credit Application
   */
  submitApplication(
    body: LendingSubmitApplicationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LendingSubmitApplicationResponse> {
    return this._client.post('/lending/applications', { body, ...options });
  }
}

export interface LendingGetStatusResponse {
  status?: string;

  underwriterQueuePos?: number;
}

export interface LendingSubmitApplicationResponse {
  applicationId?: string;

  status?: string;
}

export interface LendingSubmitApplicationParams {
  amount: number;

  employmentData: LendingSubmitApplicationParams.EmploymentData;

  loanType: 'MORTGAGE' | 'PERSONAL' | 'AUTO' | 'BUSINESS_EXPANSION';

  termMonths: number;

  assets?: Array<unknown>;

  collateralId?: string;

  liabilities?: Array<unknown>;
}

export namespace LendingSubmitApplicationParams {
  export interface EmploymentData {
    employer: string;

    monthlyIncome: number;

    tenureMonths?: number;
  }
}

Lending.Decisions = Decisions;

export declare namespace Lending {
  export {
    type LendingGetStatusResponse as LendingGetStatusResponse,
    type LendingSubmitApplicationResponse as LendingSubmitApplicationResponse,
    type LendingSubmitApplicationParams as LendingSubmitApplicationParams,
  };

  export { Decisions as Decisions, type DecisionGetRationaleResponse as DecisionGetRationaleResponse };
}
