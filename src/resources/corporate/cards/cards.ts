// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ControlsAPI from './controls';
import { Controls } from './controls';

export class Cards extends APIResource {
  controls: ControlsAPI.Controls = new ControlsAPI.Controls(this._client);
}

Cards.Controls = Controls;

export declare namespace Cards {
  export { Controls as Controls };
}
