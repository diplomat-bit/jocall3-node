// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portfolios', () => {
  test('create: only required params', async () => {
    const responsePromise = client.investments.portfolios.create({ name: 'name', strategy: 'GROWTH' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.investments.portfolios.create({
      name: 'name',
      strategy: 'GROWTH',
      initialAllocation: {},
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.investments.portfolios.retrieve('portfolioId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.retrieve('portfolioId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = client.investments.portfolios.update('portfolioId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.update('portfolioId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.update(
        'portfolioId',
        { riskTolerance: 0, strategy: 'strategy' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.investments.portfolios.list();
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
    await expect(client.investments.portfolios.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Jocall3.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.list({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('rebalance', async () => {
    const responsePromise = client.investments.portfolios.rebalance('portfolioId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rebalance: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.rebalance('portfolioId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });

  test('rebalance: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.investments.portfolios.rebalance(
        'portfolioId',
        { executionMode: 'AUTO' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Jocall3.NotFoundError);
  });
});
