// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Proposals extends APIResource {
  /**
   * Create New Multi-sig Financial Proposal
   *
   * @example
   * ```ts
   * await client.corporate.governance.proposals.create({
   *   actionType: 'TRANSFER_LIMIT_CHANGE',
   *   payload: {},
   *   title: 'title',
   * });
   * ```
   */
  create(body: ProposalCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/corporate/governance/proposals', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List Active Governance Proposals
   *
   * @example
   * ```ts
   * const proposals =
   *   await client.corporate.governance.proposals.list();
   * ```
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ProposalListResponse> {
    return this._client.get('/corporate/governance/proposals', options);
  }

  /**
   * Cast Vote or Sign Transaction
   *
   * @example
   * ```ts
   * await client.corporate.governance.proposals.vote(
   *   'proposalId',
   *   { decision: 'APPROVE' },
   * );
   * ```
   */
  vote(proposalId: string, body: ProposalVoteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/corporate/governance/proposals/${proposalId}/vote`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ProposalListResponse {
  data: Array<ProposalListResponse.Data>;
}

export namespace ProposalListResponse {
  export interface Data {
    id: string;

    requiredApprovals: number;

    status: 'PENDING' | 'APPROVED' | 'EXECUTED' | 'REJECTED';

    title: string;

    currentApprovals?: number;

    description?: string;

    expiresAt?: string;
  }
}

export interface ProposalCreateParams {
  actionType: 'TRANSFER_LIMIT_CHANGE' | 'NEW_ADMIN' | 'LARGE_PAYMENT';

  /**
   * The raw action data to be executed upon approval
   */
  payload: unknown;

  title: string;

  description?: string;

  votingPeriodHours?: number;
}

export interface ProposalVoteParams {
  decision: 'APPROVE' | 'REJECT';

  comment?: string;

  /**
   * Cryptographic signature if required
   */
  signature?: string;
}

export declare namespace Proposals {
  export {
    type ProposalListResponse as ProposalListResponse,
    type ProposalCreateParams as ProposalCreateParams,
    type ProposalVoteParams as ProposalVoteParams,
  };
}
