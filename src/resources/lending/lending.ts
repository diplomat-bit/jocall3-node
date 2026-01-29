// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ApplicationsAPI from './applications';
import { ApplicationRetrieveStatusResponse, Applications } from './applications';
import * as DecisionsAPI from './decisions';
import { DecisionRetrieveRationaleResponse, Decisions } from './decisions';

export class Lending extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  decisions: DecisionsAPI.Decisions = new DecisionsAPI.Decisions(this._client);

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

Lending.Applications = Applications;
Lending.Decisions = Decisions;

export declare namespace Lending {
  export {
    type LendingSubmitApplicationResponse as LendingSubmitApplicationResponse,
    type LendingSubmitApplicationParams as LendingSubmitApplicationParams,
  };

  export {
    Applications as Applications,
    type ApplicationRetrieveStatusResponse as ApplicationRetrieveStatusResponse,
  };

  export {
    Decisions as Decisions,
    type DecisionRetrieveRationaleResponse as DecisionRetrieveRationaleResponse,
  };
}
