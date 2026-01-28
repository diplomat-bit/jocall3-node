// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PitchAPI from './pitch';
import { Pitch } from './pitch';

export class Incubator extends APIResource {
  pitch: PitchAPI.Pitch = new PitchAPI.Pitch(this._client);
}

Incubator.Pitch = Pitch;

export declare namespace Incubator {
  export { Pitch as Pitch };
}
