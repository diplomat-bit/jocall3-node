// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Models extends APIResource {
  /**
   * List supported AI model versions
   *
   * @example
   * ```ts
   * const models = await client.ai.models.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/ai/models/versions', options);
  }

  /**
   * Start a model fine-tuning job
   *
   * @example
   * ```ts
   * const response = await client.ai.models.fineTune({
   *   base_model: 'base_model',
   *   training_data_url: 'https://example.com',
   * });
   * ```
   */
  fineTune(body: ModelFineTuneParams, options?: Core.RequestOptions): Core.APIPromise<ModelFineTuneResponse> {
    return this._client.post('/ai/models/fine-tune', { body, ...options });
  }
}

export interface ModelListResponse {
  models?: Array<ModelListResponse.Model>;
}

export namespace ModelListResponse {
  export interface Model {
    modelId: string;

    version: string;

    capabilities?: Array<string>;
  }
}

export interface ModelFineTuneResponse {
  job_id?: string;
}

export interface ModelFineTuneParams {
  base_model: string;

  training_data_url: string;

  hyperparameters?: unknown;
}

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelFineTuneResponse as ModelFineTuneResponse,
    type ModelFineTuneParams as ModelFineTuneParams,
  };
}
