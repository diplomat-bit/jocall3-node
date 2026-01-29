// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ImpactAPI from './impact';
import { Impact } from './impact';
import * as OffsetsAPI from './offsets';
import { Offsets } from './offsets';

export class Sustainability extends APIResource {
  offsets: OffsetsAPI.Offsets = new OffsetsAPI.Offsets(this._client);
  impact: ImpactAPI.Impact = new ImpactAPI.Impact(this._client);

  /**
   * Generates a detailed report of the user's estimated carbon footprint based on
   * transaction data, lifestyle choices, and AI-driven impact assessments, offering
   * insights and reduction strategies.
   */
  retrieveCarbonFootprint(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/sustainability/carbon-footprint', options);
  }
}

export type SustainabilityRetrieveCarbonFootprintResponse = unknown;

Sustainability.Offsets = Offsets;
Sustainability.Impact = Impact;

export declare namespace Sustainability {
  export { type SustainabilityRetrieveCarbonFootprintResponse as SustainabilityRetrieveCarbonFootprintResponse };

  export { Offsets as Offsets };

  export { Impact as Impact };
}
