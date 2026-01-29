// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ads', () => {
  test('list', async () => {
    const responsePromise = client.ai.ads.list();
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
    await expect(client.ai.ads.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jocall3.NotFoundError,
    );
  });

  test('generateCopy: only required params', async () => {
    const responsePromise = client.ai.ads.generateCopy({
      productDescription: 'productDescription',
      targetAudience: 'targetAudience',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateCopy: required and optional params', async () => {
    const response = await client.ai.ads.generateCopy({
      productDescription: 'productDescription',
      targetAudience: 'targetAudience',
    });
  });

  test('generateVideo: only required params', async () => {
    const responsePromise = client.ai.ads.generateVideo({
      lengthSeconds: 15,
      prompt: 'prompt',
      style: 'Cinematic',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('generateVideo: required and optional params', async () => {
    const response = await client.ai.ads.generateVideo({
      lengthSeconds: 15,
      prompt: 'prompt',
      style: 'Cinematic',
    });
  });

  test('optimizeCampaign: only required params', async () => {
    const responsePromise = client.ai.ads.optimizeCampaign({ campaignData: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimizeCampaign: required and optional params', async () => {
    const response = await client.ai.ads.optimizeCampaign({ campaignData: {} });
  });

  test('retrieveOperationStatus', async () => {
    const responsePromise = client.ai.ads.retrieveOperationStatus('operationId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveOperationStatus: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.ads.retrieveOperationStatus('operationId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
