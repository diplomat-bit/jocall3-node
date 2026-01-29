// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource incubator', () => {
  test('listPitches', async () => {
    const responsePromise = client.ai.incubator.listPitches();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPitches: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.ai.incubator.listPitches({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jocall3.NotFoundError,
    );
  });

  test('submitPitch: only required params', async () => {
    const responsePromise = client.ai.incubator.submitPitch({
      businessPlan: 'businessPlan',
      financialProjections: {},
      foundingTeam: [{}],
      marketOpportunity: 'marketOpportunity',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('submitPitch: required and optional params', async () => {
    const response = await client.ai.incubator.submitPitch({
      businessPlan: 'businessPlan',
      financialProjections: {},
      foundingTeam: [{}],
      marketOpportunity: 'marketOpportunity',
    });
  });

  test('validateIdea: only required params', async () => {
    const responsePromise = client.ai.incubator.validateIdea({ concept: 'concept' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validateIdea: required and optional params', async () => {
    const response = await client.ai.incubator.validateIdea({ concept: 'concept' });
  });
});
