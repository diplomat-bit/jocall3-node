// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InvestmentsAPI from './investments';
import { Investments } from './investments';

export class Sustainability extends APIResource {
  investments: InvestmentsAPI.Investments = new InvestmentsAPI.Investments(this._client);
}

Sustainability.Investments = Investments;

export declare namespace Sustainability {
  export { Investments as Investments };
}
