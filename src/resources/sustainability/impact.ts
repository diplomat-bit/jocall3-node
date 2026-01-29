// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Impact extends APIResource {
  /**
   * ESG Portfolio Impact Analysis
   */
  portfolioAnalysis(options?: Core.RequestOptions): Core.APIPromise<ImpactPortfolioAnalysisResponse> {
    return this._client.get('/sustainability/impact/portfolio', options);
  }

  /**
   * Search Global Green Projects
   */
  projectSearch(
    query?: ImpactProjectSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpactProjectSearchResponse>;
  projectSearch(options?: Core.RequestOptions): Core.APIPromise<ImpactProjectSearchResponse>;
  projectSearch(
    query: ImpactProjectSearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpactProjectSearchResponse> {
    if (isRequestOptions(query)) {
      return this.projectSearch({}, query);
    }
    return this._client.get('/sustainability/impact/projects', { query, ...options });
  }
}

export interface ImpactPortfolioAnalysisResponse {
  esgScore?: number;

  fossilFuelExposure?: number;

  greenProjectInvolvement?: Array<string>;

  socialJusticeRating?: string;
}

export interface ImpactProjectSearchResponse {
  data?: Array<unknown>;
}

export interface ImpactProjectSearchParams {
  continent?: string;
}

export declare namespace Impact {
  export {
    type ImpactPortfolioAnalysisResponse as ImpactPortfolioAnalysisResponse,
    type ImpactProjectSearchResponse as ImpactProjectSearchResponse,
    type ImpactProjectSearchParams as ImpactProjectSearchParams,
  };
}
