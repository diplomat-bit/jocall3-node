// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource predictions', () => {
  test('retrieveInflationForecast', async () => {
    const responsePromise = client.ai.oracle.predictions.retrieveInflationForecast();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveInflationForecast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.oracle.predictions.retrieveInflationForecast({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('retrieveInflationForecast: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.oracle.predictions.retrieveInflationForecast(
        { region: 'region' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('retrieveMarketCrashProbability', async () => {
    const responsePromise = client.ai.oracle.predictions.retrieveMarketCrashProbability();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveMarketCrashProbability: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.ai.oracle.predictions.retrieveMarketCrashProbability({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
