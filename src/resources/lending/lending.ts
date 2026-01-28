// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DecisionsAPI from './decisions';
import { Decisions } from './decisions';

export class Lending extends APIResource {
  decisions: DecisionsAPI.Decisions = new DecisionsAPI.Decisions(this._client);
}

Lending.Decisions = Decisions;

export declare namespace Lending {
  export { Decisions as Decisions };
}
