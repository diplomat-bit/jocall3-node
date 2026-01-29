// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ProposalsAPI from './proposals';
import { ProposalCreateParams, ProposalListResponse, ProposalVoteParams, Proposals } from './proposals';

export class Governance extends APIResource {
  proposals: ProposalsAPI.Proposals = new ProposalsAPI.Proposals(this._client);
}

Governance.Proposals = Proposals;

export declare namespace Governance {
  export {
    Proposals as Proposals,
    type ProposalListResponse as ProposalListResponse,
    type ProposalCreateParams as ProposalCreateParams,
    type ProposalVoteParams as ProposalVoteParams,
  };
}
