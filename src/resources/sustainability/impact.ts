// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Impact extends APIResource {
  /**
   * Search Global Green Projects
   */
  listGreenProjects(
    query?: ImpactListGreenProjectsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpactListGreenProjectsResponse>;
  listGreenProjects(options?: Core.RequestOptions): Core.APIPromise<ImpactListGreenProjectsResponse>;
  listGreenProjects(
    query: ImpactListGreenProjectsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpactListGreenProjectsResponse> {
    if (isRequestOptions(query)) {
      return this.listGreenProjects({}, query);
    }
    return this._client.get('/sustainability/impact/projects', { query, ...options });
  }

  /**
   * ESG Portfolio Impact Analysis
   */
  retrievePortfolioAnalysis(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImpactRetrievePortfolioAnalysisResponse> {
    return this._client.get('/sustainability/impact/portfolio', options);
  }
}

export interface ImpactListGreenProjectsResponse {
  data?: Array<unknown>;
}

export interface ImpactRetrievePortfolioAnalysisResponse {
  esgScore?: number;

  fossilFuelExposure?: number;

  greenProjectInvolvement?: Array<string>;

  socialJusticeRating?: string;
}

export interface ImpactListGreenProjectsParams {
  continent?: string;
}

export declare namespace Impact {
  export {
    type ImpactListGreenProjectsResponse as ImpactListGreenProjectsResponse,
    type ImpactRetrievePortfolioAnalysisResponse as ImpactRetrievePortfolioAnalysisResponse,
    type ImpactListGreenProjectsParams as ImpactListGreenProjectsParams,
  };
}
