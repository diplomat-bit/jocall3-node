// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource proposals', () => {
  test('create: only required params', async () => {
    const responsePromise = client.corporate.governance.proposals.create({
      actionType: 'TRANSFER_LIMIT_CHANGE',
      payload: {},
      title: 'title',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.corporate.governance.proposals.create({
      actionType: 'TRANSFER_LIMIT_CHANGE',
      payload: {},
      title: 'title',
      description: 'description',
      votingPeriodHours: 0,
    });
  });

  test('list', async () => {
    const responsePromise = client.corporate.governance.proposals.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.governance.proposals.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('vote: only required params', async () => {
    const responsePromise = client.corporate.governance.proposals.vote('proposalId', { decision: 'APPROVE' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('vote: required and optional params', async () => {
    const response = await client.corporate.governance.proposals.vote('proposalId', {
      decision: 'APPROVE',
      comment: 'comment',
      signature: 'signature',
    });
  });
});
