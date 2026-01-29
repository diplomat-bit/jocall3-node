// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource treasury', () => {
  test('executeBulkPayouts: only required params', async () => {
    const responsePromise = client.corporate.treasury.executeBulkPayouts({ payouts: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('executeBulkPayouts: required and optional params', async () => {
    const response = await client.corporate.treasury.executeBulkPayouts({
      payouts: [{ amount: 0, recipient_id: 'recipient_id' }],
    });
  });

  test('optimizeLiquidity', async () => {
    const responsePromise = client.corporate.treasury.optimizeLiquidity();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('optimizeLiquidity: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.treasury.optimizeLiquidity({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('optimizeLiquidity: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.treasury.optimizeLiquidity(
        { sweepExcess: true, targetReserve: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('retrieveCashFlowForecast', async () => {
    const responsePromise = client.corporate.treasury.retrieveCashFlowForecast();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveCashFlowForecast: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.treasury.retrieveCashFlowForecast({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('retrieveCashFlowForecast: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.treasury.retrieveCashFlowForecast(
        { horizonDays: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('retrieveLiquidityPositions', async () => {
    const responsePromise = client.corporate.treasury.retrieveLiquidityPositions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieveLiquidityPositions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.corporate.treasury.retrieveLiquidityPositions({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
