// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domestic', () => {
  test('ach: only required params', async () => {
    const responsePromise = client.payments.domestic.ach({
      account: 'account',
      amount: 0,
      routing: 'routing',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('ach: required and optional params', async () => {
    const response = await client.payments.domestic.ach({
      account: 'account',
      amount: 0,
      routing: 'routing',
    });
  });

  test('rtp: only required params', async () => {
    const responsePromise = client.payments.domestic.rtp({ amount: 0, recipientId: 'recipientId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('rtp: required and optional params', async () => {
    const response = await client.payments.domestic.rtp({ amount: 0, recipientId: 'recipientId' });
  });

  test('wire: only required params', async () => {
    const responsePromise = client.payments.domestic.wire({
      account: 'account',
      amount: 0,
      routing: 'routing',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('wire: required and optional params', async () => {
    const response = await client.payments.domestic.wire({
      account: 'account',
      amount: 0,
      routing: 'routing',
    });
  });
});
