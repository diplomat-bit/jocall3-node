// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fx', () => {
  test('bookDeal: only required params', async () => {
    const responsePromise = client.payments.fx.bookDeal({
      amount: 0,
      pair: 'pair',
      valueDate: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bookDeal: required and optional params', async () => {
    const response = await client.payments.fx.bookDeal({
      amount: 0,
      pair: 'pair',
      valueDate: '2019-12-27',
    });
  });

  test('convert: only required params', async () => {
    const responsePromise = client.payments.fx.convert({
      amount: 0,
      from: 'from',
      to: 'to',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('convert: required and optional params', async () => {
    const response = await client.payments.fx.convert({
      amount: 0,
      from: 'from',
      to: 'to',
    });
  });

  test('getRates: only required params', async () => {
    const responsePromise = client.payments.fx.getRates({ pair: 'EURUSD' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getRates: required and optional params', async () => {
    const response = await client.payments.fx.getRates({ pair: 'EURUSD' });
  });
});
