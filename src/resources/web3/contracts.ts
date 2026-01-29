// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Contracts extends APIResource {
  /**
   * Deploy Financial Smart Contract
   *
   * @example
   * ```ts
   * await client.web3.contracts.deploy({
   *   abi: {},
   *   bytecode: 'bytecode',
   * });
   * ```
   */
  deploy(body: ContractDeployParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/web3/contracts/deploy', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface ContractDeployParams {
  abi: unknown;

  bytecode: string;
}

export declare namespace Contracts {
  export { type ContractDeployParams as ContractDeployParams };
}
