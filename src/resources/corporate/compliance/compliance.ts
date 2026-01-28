// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AuditsAPI from './audits';
import { Audits } from './audits';

export class Compliance extends APIResource {
  audits: AuditsAPI.Audits = new AuditsAPI.Audits(this._client);
}

Compliance.Audits = Audits;

export declare namespace Compliance {
  export { Audits as Audits };
}
