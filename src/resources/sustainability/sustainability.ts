// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InvestmentsAPI from './investments';
import { InvestmentAnalyzeImpactResponse, Investments } from './investments';

export class Sustainability extends APIResource {
  investments: InvestmentsAPI.Investments = new InvestmentsAPI.Investments(this._client);

  /**
   * Generates a detailed report of the user's estimated carbon footprint based on
   * transaction data, lifestyle choices, and AI-driven impact assessments, offering
   * insights and reduction strategies.
   */
  getFootprint(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

export type SustainabilityGetFootprintResponse = unknown;

Sustainability.Investments = Investments;

export declare namespace Sustainability {
  export { type SustainabilityGetFootprintResponse as SustainabilityGetFootprintResponse };

  export {
    Investments as Investments,
    type InvestmentAnalyzeImpactResponse as InvestmentAnalyzeImpactResponse,
  };
}
