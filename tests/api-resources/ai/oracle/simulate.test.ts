// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource simulate', () => {
  test('runAdvanced: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.runAdvanced({
      prompt: 'prompt',
      scenarios: [{ name: 'name' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runAdvanced: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.runAdvanced({
      prompt: 'prompt',
      scenarios: [{ name: 'name', description: 'description' }],
    });
  });

  test('runMonteCarlo: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.runMonteCarlo({ iterations: 0, variables: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runMonteCarlo: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.runMonteCarlo({ iterations: 0, variables: ['string'] });
  });

  test('runStandard: only required params', async () => {
    const responsePromise = client.ai.oracle.simulate.runStandard({ prompt: 'prompt' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('runStandard: required and optional params', async () => {
    const response = await client.ai.oracle.simulate.runStandard({
      prompt: 'prompt',
      parameters: {},
    });
  });
});
