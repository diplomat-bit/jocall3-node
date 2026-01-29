// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Ads extends APIResource {
  /**
   * List All Generated Ad Assets
   *
   * @example
   * ```ts
   * const ads = await client.ai.ads.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<AdListResponse> {
    return this._client.get('/ai/ads', options);
  }

  /**
   * Generate High-Conversion Ad Copy
   *
   * @example
   * ```ts
   * const response = await client.ai.ads.generateCopy({
   *   productDescription: 'productDescription',
   *   targetAudience: 'targetAudience',
   * });
   * ```
   */
  generateCopy(
    body: AdGenerateCopyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdGenerateCopyResponse> {
    return this._client.post('/ai/ads/generate/copy', { body, ...options });
  }

  /**
   * Generate a Standard Video Ad with Veo 2.0
   *
   * @example
   * ```ts
   * const response = await client.ai.ads.generateVideo({
   *   lengthSeconds: 15,
   *   prompt: 'prompt',
   *   style: 'Cinematic',
   * });
   * ```
   */
  generateVideo(
    body: AdGenerateVideoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdGenerateVideoResponse> {
    return this._client.post('/ai/ads/generate/video', { body, ...options });
  }

  /**
   * Poll for Video Gen Status
   *
   * @example
   * ```ts
   * const response = await client.ai.ads.getOperation(
   *   'operationId',
   * );
   * ```
   */
  getOperation(operationId: string, options?: Core.RequestOptions): Core.APIPromise<AdGetOperationResponse> {
    return this._client.get(`/ai/ads/operations/${operationId}`, options);
  }

  /**
   * AI Campaign Efficiency Optimizer
   *
   * @example
   * ```ts
   * const response = await client.ai.ads.optimizeCampaign({
   *   campaignData: {},
   * });
   * ```
   */
  optimizeCampaign(
    body: AdOptimizeCampaignParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdOptimizeCampaignResponse> {
    return this._client.post('/ai/ads/optimize', { body, ...options });
  }
}

export interface AdListResponse {
  data?: Array<unknown>;
}

export interface AdGenerateCopyResponse {
  bodyText?: string;

  headlines?: Array<string>;
}

export interface AdGenerateVideoResponse {
  operationId?: string;
}

export interface AdGetOperationResponse {
  progress?: number;

  status?: string;

  videoUri?: string;
}

export interface AdOptimizeCampaignResponse {
  suggestedChanges?: Array<string>;
}

export interface AdGenerateCopyParams {
  productDescription: string;

  targetAudience: string;
}

export interface AdGenerateVideoParams {
  lengthSeconds: 15 | 30 | 60;

  /**
   * Visual description
   */
  prompt: string;

  style: 'Cinematic' | 'Minimalist' | 'Cyberpunk' | 'Professional';
}

export interface AdOptimizeCampaignParams {
  campaignData: unknown;
}

export declare namespace Ads {
  export {
    type AdListResponse as AdListResponse,
    type AdGenerateCopyResponse as AdGenerateCopyResponse,
    type AdGenerateVideoResponse as AdGenerateVideoResponse,
    type AdGetOperationResponse as AdGetOperationResponse,
    type AdOptimizeCampaignResponse as AdOptimizeCampaignResponse,
    type AdGenerateCopyParams as AdGenerateCopyParams,
    type AdGenerateVideoParams as AdGenerateVideoParams,
    type AdOptimizeCampaignParams as AdOptimizeCampaignParams,
  };
}
