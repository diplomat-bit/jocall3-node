// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Models extends APIResource {
  /**
   * Start a model fine-tuning job
   */
  fineTune(body: ModelFineTuneParams, options?: Core.RequestOptions): Core.APIPromise<ModelFineTuneResponse> {
    return this._client.post('/ai/models/fine-tune', { body, ...options });
  }

  /**
   * List supported AI model versions
   */
  listVersions(options?: Core.RequestOptions): Core.APIPromise<ModelListVersionsResponse> {
    return this._client.get('/ai/models/versions', options);
  }
}

export interface ModelFineTuneResponse {
  job_id?: string;
}

export interface ModelListVersionsResponse {
  models?: Array<ModelListVersionsResponse.Model>;
}

export namespace ModelListVersionsResponse {
  export interface Model {
    modelId: string;

    version: string;
  }
}

export interface ModelFineTuneParams {
  base_model: string;

  training_data_url: string;

  hyperparameters?: unknown;
}

export declare namespace Models {
  export {
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelListVersionsResponse as ModelListVersionsResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
