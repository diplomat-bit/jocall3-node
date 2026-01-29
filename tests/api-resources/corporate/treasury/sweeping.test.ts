// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Jocall3 from 'jocall3-node';
import { Response } from 'node-fetch';

const client = new Jocall3({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sweeping', () => {
  test('configure: only required params', async () => {
    const responsePromise = client.corporate.treasury.sweeping.configure({
      sourceAccount: 'sourceAccount',
      targetAccount: 'targetAccount',
      threshold: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('configure: required and optional params', async () => {
    const response = await client.corporate.treasury.sweeping.configure({
      sourceAccount: 'sourceAccount',
      targetAccount: 'targetAccount',
      threshold: 0,
      frequency: 'daily',
    });
  });

  test('execute: only required params', async () => {
    const responsePromise = client.corporate.treasury.sweeping.execute({ ruleId: 'ruleId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('execute: required and optional params', async () => {
    const response = await client.corporate.treasury.sweeping.execute({ ruleId: 'ruleId' });
  });
});
